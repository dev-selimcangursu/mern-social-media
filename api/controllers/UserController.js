const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secretkey123";

// Yeni Kullanıcı Kayıt
const create = async (req, res) => {
  try {
    const { fullname, username, email, phone, password, date_of_birth } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.json({
        success: false,
        message: "Bu mail adresiyle kayıtlı bir hesap zaten mevcut!",
      });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.json({
        success: false,
        message: "Bu kullanıcı adı zaten kullanılıyor!",
      });
    }

    const newUser = new User({
      fullname,
      username,
      email,
      phone,
      password: hashedPassword,
      date_of_birth,
      biography: null,
      status_id: 1,
      membership_plan_id: 1,
      privacy_status: false,
    });

    await newUser.save();

    return res.json({
      success: true,
      message: "Kullanıcı başarıyla oluşturuldu!",
    });
  } catch (error) {
    console.error("Kullanıcı oluşturma hatası:", error);
    return res.status(500).json({
      success: false,
      message: "Sunucu hatası!",
    });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "E-Posta Hatalı veya Böyle Bir Kullanıcı Yok",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Şifre yanlış",
      });
    }

    const payload = {
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      image: user.picture || "",
      biography: user.biography || "",
      userId: user._id,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });

    return res.status(200).json({
      success: true,
      message: "Giriş Başarılı",
      token,
      user: payload,
    });
  } catch (error) {
    console.error("Giriş hatası:", error);
    return res.status(500).json({
      success: false,
      message: "Sunucu hatası!",
    });
  }
};

module.exports = { create, login };

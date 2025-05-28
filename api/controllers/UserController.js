const User = require("../models/User");
const bcrypt = require("bcrypt");

const create = async (req, res) => {
  try {
    const { fullname, username, email, password, date_of_birth } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // 1. E-posta kontrolü
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.json({
        success: false,
        message: "Bu mail adresiyle kayıtlı bir hesap zaten mevcut!",
      });
    }

    // 2. Kullanıcı adı kontrolü
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.json({
        success: false,
        message: "Bu kullanıcı adı zaten kullanılıyor!",
      });
    }

    // 3. Yeni kullanıcı oluştur
    const newUser = new User({
      fullname,
      username,
      email,
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

module.exports = { create };

const UserFollows = require("../models/UserFollows");
const mongoose = require("mongoose");

// Takipçi ve Takip Edilen Sayılarını Döner
const followsCount = async (req, res) => {
  try {
    const { userId } = req.body;

    // userId geçerli bir ObjectId mi kontrol et
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Geçersiz kullanıcı ID." });
    }

    const objectId = new mongoose.Types.ObjectId(userId);
    const meFollowCount = await UserFollows.countDocuments({
      user_id: objectId,
      status: 1,
    });
    const followingMeCount = await UserFollows.countDocuments({
      related_user_id: objectId,
      status: 1,
    });

    return res.status(200).json({ meFollowCount, followingMeCount });
  } catch (error) {
    console.error("Takip sayısı alınamadı:", error);
    return res.status(500).json({ message: "Bir hata oluştu." });
  }
};

module.exports = { followsCount };

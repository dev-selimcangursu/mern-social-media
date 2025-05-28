const Stories = require("../models/Stories");
const UserFollows = require("../models/UserFollows");

const getStories = async (req, res) => {
  try {
    const { authId } = req.query;

    const followings = await UserFollows.find({
      user_id: authId,
      status: 1,
    }).select("related_user_id");

    const followingUserIds = followings.map((follow) => follow.related_user_id);

    const friendsStories = await Stories.find({
      user_id: { $in: followingUserIds },
    }).populate("user_id", "fullname");

    res.status(200).json(friendsStories);
  } catch (error) {
    console.error("Hikayeler alınırken hata:", error);
    res.status(500).json({ message: "Bir hata oluştu" });
  }
};

module.exports = { getStories };

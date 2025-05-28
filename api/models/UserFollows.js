const mongoose = require("mongoose");

const UserFollowsSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    related_user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: Number },
  },
  { timestamps: true }
);

const UserFollows = mongoose.model("user_follows", UserFollowsSchema);

module.exports = UserFollows;

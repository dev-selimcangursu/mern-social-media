const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    media_url: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
    viewed_by: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    expires_at: {
      type: Date,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", StorySchema);

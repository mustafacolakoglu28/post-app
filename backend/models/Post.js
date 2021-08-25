const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 255,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      required: false,
      minLength: 10,
      maxLenght: 255,
    },
  ],

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
      required: false,
    },
  ],
});
module.exports = mongoose.model("Post", PostSchema);

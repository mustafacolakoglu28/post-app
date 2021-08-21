const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLenghth: 200,
  },

  surname: {
    type: String,
    required: true,
    minLength: 3,
    maxLenghth: 200,
  },

  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 100,
  },

  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: false,
    },
  ],

  follows: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  ],
});
module.exports = mongoose.model("User", UserSchema);

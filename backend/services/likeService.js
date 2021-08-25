const Like = require("../models/Like");
const postService = require("../services/postService");
const userService = require("../services/userService");

const createLike = async (like) => {
  const newLike = await Like.create({
    user: like.user,
    post: like.post,
  });
  const post = await postService.getPost(newLike.post);
  console.log(post);
  post.likes.push(newLike);
  await post.save();

  const user = await userService.getUser(newLike.user);
  console.log(user);
  user.likes.push(newLike);
  await user.save();

  return newLike;
};

const getLike = async (likeId) => {
  const like = await Like.findById(likeId);
  return like;
};

module.exports = { createLike, getLike };

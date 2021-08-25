const Post = require("../models/Post");
const userService = require("../services/userService");

const createPost = async (post) => {
  const newPost = await Post.create({
    content: post.content,
    user: post.user,
  });
  const user = await userService.getUser(newPost.user);
  user.posts.push(newPost);
  await user.save();
  return newPost;
};

const getPost = async (postId) => {
  const post = await Post.findById(postId);
  return post;
};

module.exports = { createPost, getPost };

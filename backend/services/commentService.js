const Comment = require("../models/Comment");
const postService = require("../services/postService");

const createComment = async (comment) => {
  const newComment = await Comment.create({
    content: comment.content,
    user: comment.user,
    post: comment.post,
  });
  const post = await postService.getPost(newComment.post);
  post.comments.push(newComment);
  await post.save();
  return newComment;
};

const getComment = async (commentId) => {
  const comment = await Comment.findById(commentId);
  return comment;
};
module.exports = { createComment, getComment };

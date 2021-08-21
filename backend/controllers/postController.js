const postService = require("../services/postService");

const create = async (req, res, next) => {
  try {
    const post = await postService.createPost(req.body);
    console.log(post);
    res.send(post);
  } catch (error) {
    next(error);
  }
};

const findPost = async (req, res, next) => {
  try {
    const post = await postService.getPost(req.params.id);
    console.log(post);
    res.send(post);
  } catch (error) {
    next(error);
  }
};
module.exports = { create, findPost };

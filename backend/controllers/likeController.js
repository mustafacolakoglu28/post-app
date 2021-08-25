const likeService = require("../services/likeService");

const create = async (req, res, next) => {
  try {
    const like = await likeService.createLike(req.body);
    console.log(like);
    res.send(like);
  } catch (error) {
    next(error);
  }
};

const findLike = async (req, res, next) => {
  try {
    const like = await likeService.getLike(req.params.id);
    console.log(like);
    res.send(like);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, findLike };

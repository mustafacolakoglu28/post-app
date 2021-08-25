const commentService = require("../services/commentService");

const create = async (req, res, next) => {
  try {
    const comment = await commentService.createComment(req.body);
    console.log(comment);
    res.send(comment);
  } catch (error) {
    next(error);
  }
};

const findComment = async (req, res, next) => {
  try {
    const comment = await commentService.getComment(req.params.id);
    console.log(comment);
    res.send(comment);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, findComment };

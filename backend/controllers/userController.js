const userService = require("../services/userService");

const create = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    console.log(user);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

const findUser = async (req, res, next) => {
  try {
    const user = await userService.getUser(req.params.id);
    console.log(user);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, findUser };

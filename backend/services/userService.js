const User = require("../models/User");

const createUser = async (user) => {
  const newUser = await User.create({
    name: user.name,
    surname: user.surname,
    password: user.password,
  });
  return user;
};

const getUser = async (userId) => {
  const user = await User.findById(userId);
  return user;
};

module.exports = { createUser, getUser };

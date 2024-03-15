const { User } = require("../models");
const tokens = require("../config/tokens");

async function register(userData) {
  const usernameDuplicate = await User.findOne({
    where: { username: userData.username },
  });
  if (usernameDuplicate) throw new Error("Username already exists");

  const newUser = await User.create(userData);
  if (!newUser) throw new Error("User not created");
  return newUser;
}

async function login(username, password) {
  const user = await User.findOne({
    where: { username },
  });
  if (!user) throw new Error("User not found");

  const isValidPassword = await user.validatePassword(password);
  if (!isValidPassword) throw new Error("Invalid password");

  const { isAdmin } = user.dataValues;
  const payload = { username, isAdmin };

  const token = tokens.generateToken(payload);
  return { token, user: payload };
}

module.exports = { register, login };

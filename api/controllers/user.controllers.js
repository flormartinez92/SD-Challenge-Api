const { register, login } = require("../services/user.services");

exports.register = async (req, res) => {
  const userData = req.body;
  try {
    const user = await register(userData);
    res.status(201).send(user);
  } catch (error) {
    switch (error.message) {
      case "Username already exists":
        res.status(409).send(error.message);
        break;
      case "User not created":
        res.status(400).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await login(username, password);
    res.cookie("token", user.token);
    res.status(200).send(user.user);
  } catch (error) {
    switch (error.message) {
      case "User not found":
        res.status(404).send(error.message);
        break;
      case "Invalid password":
        res.status(401).send(error.message);
        break;
      default:
        res.status(500).send("Internal Server Error");
        break;
    }
  }
};

exports.profile = async (req, res) => {
  res.send(req.user);
};

exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.sendStatus(200);
};

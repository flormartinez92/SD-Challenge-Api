const { validateToken } = require("../config/tokens");

const validateUser = (req, res, next) => {
  const { token } = req.cookies;

  try {
    if (!token) return res.status(401).send("Missing authentication token");

    const { user } = validateToken(token);
    if (!user) return res.status(401).send("Invalid authentication token");

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
};

module.exports = { validateUser };

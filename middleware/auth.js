const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get token from header
  const header = req.headers.authorization;
  // Check if not header
  if (!header) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify header
  try {
    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

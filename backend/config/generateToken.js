const jwt = require("jsonwebtoken");
const generateToken = (id) => {
  return jwt.sign({ id }, "sid", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;

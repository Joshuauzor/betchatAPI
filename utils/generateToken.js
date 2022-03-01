const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

let generateAccessToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_TOKEN);
}


module.exports = { generateAccessToken };
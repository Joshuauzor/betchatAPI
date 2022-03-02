const dotenv = require("dotenv").config();
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const UserM = require("../models/users.model");
const bcrypt = require("bcryptjs");
const moment = require("moment"); // require
const generateToken = require('../utils/generateToken');

module.exports = class Auth {
    /**
     * 
     * @param {object} req 
     * @param {string} res 
     */
    static async signup(req, res) {

    }
}
const dotenv = require("dotenv").config();
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const UserM = require("../models/users.model");
const moment = require("moment"); // require
const generateToken = require('../utils/generateToken');


module.exports = class Auth {
    /**
     * 
     * @param {object} req 
     * @param {string} res 
    //  */
    static async signup(req, res) {
        let user = await UserM.createUser(req.body);
        res.data(user);
    }

    /**
     * 
     * @param {object} req 
     * @param {string} res 
     */

    static async signin(req, res) {
        let user = await UserM.verifyEmail(req.body);
        user.token = generateToken.generateAccessToken(user);
        res.data(user)
    }

}
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
        const userDetails = {
            firstName: req.body.firstName,
            lastName: req.body.firstName,
            email: req.body.email,
            address: req.body.address,
            interests: req.body.interests,
        }
        const password = await bcrypt.hash(req.body.passwrod, 8);
        await UserM.create({...userDetails, password });
        return res.data('User created successfully');
    }

}
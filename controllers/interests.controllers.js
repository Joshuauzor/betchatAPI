const dotenv = require("dotenv").config();
const InterestM = require("../models/interest.model");
const moment = require("moment"); // require
const { Op } = require("sequelize");
const _ = require('lodash');

module.exports = class Interest {
    /**
     * 
     * @param {*} req object
     * @param {*} res string
     * @returns 
     */
    static async createInterest(req, res) {
        await InterestM.create({...req.body });
        return res.data('Interest created');
    }

    /**
     * 
     * @param {*} req object
     * @param {*} res object
     * @returns 
     */

    static async getInterest(req, res) {
        const interest = await InterestM.findAndCountAll();
        res.data(interest);
    }
}
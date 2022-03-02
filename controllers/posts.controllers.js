const dotenv = require("dotenv").config();
const PostM = require("../models/posts.model");
const moment = require("moment"); // require
const { Op } = require("sequelize");
const _ = require('lodash');

module.exports = class Posts {
    /**
     * 
     * @param {*} req object
     * @param {*} res string
     * @returns 
     */
    static async createPost(req, res) {
        const post = _.assign(req.body, { userId: req.user.uuid });
        await PostM.create(post);
        return res.data('Post created');
    }

    /**
     * 
     * @param {*} req object
     * @param {*} res string
     * @returns 
     */

    static async getPosts(req, res) {
        const posts = await PostM.findAndCountAll({
            where: {
                userId: {
                    [Op.not]: req.user.uuid
                }
            }
        });
        res.data(posts);
    }
}
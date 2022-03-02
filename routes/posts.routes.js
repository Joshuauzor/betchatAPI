const router = require('express').Router();
const $post = require('../controllers/posts.controllers');
const validator = require('../utils/validator');
const schema = require('../utils/schema')
const token = require('../utils/verifyToken');
const $ = require('express-async-handler')

router.route('/post/create')
    .post(token.verifyToken, validator(schema.postSchema), $($post.createPost));

router.route('/post/getall')
    .get(token.verifyToken, $($post.getPosts));

module.exports = router;
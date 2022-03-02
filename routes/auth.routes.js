const router = require('express').Router();
const $auth = require('../controllers/auth.controllers');
const validator = require('../utils/validator');
const schema = require('../utils/schema')
const token = require('../utils/verifyToken');
const $ = require('express-async-handler')

router.route('/auth/signup')
    .post(validator(schema.registerSchema), $($auth.signup));

router.route('/auth/signin')
    .post(validator(schema.loginSchema), $($auth.signin));

module.exports = router;
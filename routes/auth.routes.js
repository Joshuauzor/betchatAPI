const router = require('express').Router();
const $auth = require('../controllers/auth.controllers');
const validator = require('../utils/validator');
const schema = require('../utils/schema')
const token = require('../utils/verifyToken');


// @desc login for agent 
router.route('/signup')
    .post(validator(schema.loginSchema), $auth.signup)

module.exports = router;
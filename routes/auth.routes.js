const router = require('express').Router();
const $auth = require('../controllers/auth.controllers');
const validator = require('../utils/validator');
const schema = require('../utils/schema')
const token = require('../utils/verifyToken');


router.route('/auth/signup')
    .post(validator(schema.registerSchema), $auth.signup)

module.exports = router;
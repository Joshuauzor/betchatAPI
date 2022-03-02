const router = require('express').Router();
const $interest = require('../controllers/interests.controllers');
const validator = require('../utils/validator');
const schema = require('../utils/schema')
const token = require('../utils/verifyToken');
const $ = require('express-async-handler')

router.route('/interest/create')
    .post(token.verifyToken, validator(schema.interestSchema), $($interest.createInterest));

router.route('/interest/getall')
    .get(token.verifyToken, $($interest.getInterest));

module.exports = router;
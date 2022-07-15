const express = require('express');
const router = express.Router();
const {addEvent} = require('../controllers/events.js');
router.route('/events/add').post(addEvent);

module.exports = router;

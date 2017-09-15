const express = require('express');

const router = express.Router();

router.use('/packages', require('./routes/packages.routes'));

module.exports = router;
const express = require('express');
const packagesController = require('../controllers/packages.controller');
const router = express.Router();

router.route('/list')
    .get(packagesController.list);
router.route('/delete/:id')
    .get(packagesController.deleted);

module.exports = router;
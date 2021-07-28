const express = require('express');
const { show } = require('../app/controllers/NewsController');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

// newsController.index
router.use('/:slug', show);
router.use('/', newsController.index);
//hàm trả lại ra index
module.exports = router;

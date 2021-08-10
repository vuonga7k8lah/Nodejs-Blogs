const express = require('express');
const { show,create,store } = require('../app/controllers/CoursesController');
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController');


router.get('/create', create);
router.post('/store', store);
router.get('/:slug', show);
//hàm trả lại ra index
module.exports = router;

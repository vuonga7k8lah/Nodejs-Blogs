const Course = require('../models/CourseModel');
class SiteController {
  // [GET] home
  index(req, res) {
    Course.find({}, function (err, courses) {
      if (!err) {
        res.json(courses);
      } else {
        res.status(400).json({ error: 'error' });
      }
    });
    //res.render('home');
  }
  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}
//tra ra lai
module.exports = new SiteController();

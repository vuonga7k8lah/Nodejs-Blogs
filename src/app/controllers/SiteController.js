const Course = require('../models/CourseModel');
class SiteController {
  // [GET] home
  index(req, res,next) {
    Course.find({}).then(course=>{
      course = course.map(courses=>courses.toObject());
      res.render('home',{course})
    }).catch(next);
    // Course.find({}).then(course=>
    //   {
    //     console.log(course)
    //     course = course.map(courses=>courses.toObject());
    //     res.render('home',{course})
    //   }).catch(next);
    };
  //[GET] /search
  search(req, res) {
    res.render('search');
  };
}
//tra ra lai
module.exports = new SiteController();

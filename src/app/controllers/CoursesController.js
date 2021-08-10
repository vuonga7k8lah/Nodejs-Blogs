const Course = require('../models/CourseModel');
class CoursesController {
    //[GET] /courses/slugs
    show(req, res,next) {
        Course.findOne({"slug": req.params.slug}).then(
                course=>{
                    res.render('courses/course',course.toObject());
                }
        ).catch(next);
    }
   //[GET] /courses/create
    create(req, res,next) {
        res.render('courses/create');
    }

     //[POST] /courses/store
     store(req, res,next) {
        //res.json(req.body);
        const course = new Course(req.body);
        course.save().then(
            ()=>res.redirect('/')
        ).catch(next);
    }
  }
  //tra ra lai
  module.exports = new CoursesController();
  
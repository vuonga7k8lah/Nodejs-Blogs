class NewsController {
  // [GET] /news
  index(req, res) {
    res.render('new');
  }
  //[GET] /news/slugs
  show(req, res) {
    res.send('xxxxx');
  }
}
//tra ra lai
module.exports = new NewsController();

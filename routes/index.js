var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'A peekboo into my family!!' });
});

/* GET ABOUT page */
router.get('/about', function(req, res, next) {
  res.render('about');
});
/* Get Mohan page */
router.get('/mohan', function(req,res,next)
{
  res.render('mohan');
});
/* Get Purvi  page */
router.get('/purvi', function(req,res,next)
{
  res.render('purvi');
});
/* Get Dhruva page */
router.get('/dhruva', function(req,res,next)
{
  res.render('dhruva');
});
/* Get Khushi  page */
router.get('/khushi', function(req,res,next)
{
  res.render('khushi');
});
/* Get Kitty page */
router.get('/rose', function(req,res,next)
{
  res.render('rose');
});
module.exports = router;

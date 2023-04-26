var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.render('quiz', { title: 'Quiz' });
});
router.get('/', function(req,res, next){
  res.render('error', {title: 'Not Registered', message: 'User not registered!'})
});

module.exports = router;

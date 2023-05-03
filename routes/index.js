var express = require('express');
var router = express.Router();

var addUser = require('../helpers/add-user')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz Login' });
});
router.post('/login', (req,res)=>{
  console.log(req.body)
  addUser.addInfo(req.body).then((response)=>{
    if(response.status){
      if(response.class==10)
      res.render('quiz10', { title: 'Class 10 Quiz' });
      else if(response.class==9)
      res.render('quiz9', { title: 'Class 9 Quiz' });
      else if(response.class==8)
      res.render('quiz8', { title: 'Class 8 Quiz' });
      else if(response.class==7)
      res.render('quiz7', { title: 'Class 7 Quiz' });
      else if(response.class==6)
      res.render('quiz6', { title: 'Class 6 Quiz' });
      else if(response.class==5)
      res.render('quiz5', { title: 'Class 5 Quiz' });
    }else{
      res.render('error', {title: 'Unable to Sign Up', message: "Already attempted!!", details: "Only one attempt is allowed per user."})
    }
  })
})





  // res.render('quiz')
  

  // MongoClient.connect("mongodb://localhost:27017/sample",function(err,client){
  //   console.log('Test point')
  //   console.log('Database Connected');
  //   if (err)
  //     console.log('error')
  //    else 
  //     client.db('sample').collection('user').insertOne(req.body)
  // })
  


module.exports = router;

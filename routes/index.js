var express = require('express');
var router = express.Router();

var addUser = require('../helpers/add-user')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz Login' });
});
router.post('/quiz', (req,res)=>{
  console.log(req.body)
  addUser.addInfo(req.body,(result)=>{
    
  })
  // MongoClient.connect("mongodb://localhost:27017/sample",function(err,client){
  //   console.log('Test point')
  //   console.log('Database Connected');
  //   if (err)
  //     console.log('error')
  //    else 
  //     client.db('sample').collection('user').insertOne(req.body)
  // })
  
})
module.exports = router;

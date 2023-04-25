var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz Login' });
});
router.post('/register', (req,res)=>{
  console.log(req.body)
  
  MongoClient.connect("mongodb://localhost:27017/sample",function(err,client){
    console.log('Test point')
    console.log('Database Connected');
    if (err)
      console.log('error')
     else 
      client.db('sample').collection('user').insertOne(req.body)
  })
  res.send('Got IT');
  res.end();
})
module.exports = router;

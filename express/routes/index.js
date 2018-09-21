var express = require('express');
var router = express.Router();
var shiwu=require('../data/shiwu')
var jujia=require('../data/jujia')
var WYYX=require('../data/WYYX')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/shiwu",function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.json(shiwu);
});
router.get("/jujia",function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.json(jujia);
});
router.get("/WYYX",function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.json(WYYX);
});



module.exports = router;

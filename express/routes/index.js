var express = require('express');
var router = express.Router();

var index=require('../data/index')
var shiWu = require('../data/shiWu')
var juJia = require('../data/juJia')
var WYYX = require('../data/WYYX')
var limitTime = require("../data/limitTime");
var newPro = require("../data/newPro");
var juJia = require("../data/juJia");

// 解决跨域
router.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});

router.get("/api/juJia", (req, res) => {
  res.json(juJia)
}),
router.get("/api/limitTime", (req, res) => {
  res.json(limitTime)
}),
router.get("/api/newPro", (req, res) => {
  res.json(newPro)
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get("/shiWu", function (req, res, next) {
  res.json(shiWu);
});
router.get("/juJia", function (req, res, next) {
  res.json(juJia);
});
router.get("/WYYX", function (req, res, next) {
  res.json(WYYX);
});
// 商品详情
router.get("/api/productgoods", function (req, res, next) {
    let tempQuery = req.query;
    let productgoods = { products:null };
    // console.log(tempQuery);
    for(let jj in juJia){
        if(juJia[jj].menuname==tempQuery.fenleimenu){
          for(let iss in juJia[jj].allSort){
              if((juJia[jj].allSort[iss].id)==tempQuery.xiaofenlei){
                for(let isss in juJia[jj].allSort[iss].products){
                    if(juJia[jj].allSort[iss].products[isss].index==tempQuery.shangpinId){
                        productgoods.products = juJia[jj].allSort[iss].products[isss];
                    }
                }
              }
          }
        }
    }
    res.json(productgoods);
});
router.get("/index",function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.json(index);
});


module.exports = router;
var express = require('express');
var router = express.Router();
var limitTime = require("../data/limitTime");
var newPro = require("../data/newPro");

    router.get("/api/limitTime",(req,res)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.json(limitTime)
    }),
    router.get("/api/newPro",(req,res)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.json(newPro)
    })
module.exports = router;

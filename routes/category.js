var express = require('express');
var router = express.Router();
var categoryDao=require("../models/categoryDao");
/* GET category listing. */
router.post('/add', function(req, res, next) {
  var data=[req.body.name,req.body.categoryId];
  categoryDao.add(data,function(err,result){
  	var o={};
  	o.result=err==null;
  	o.msg=o.result?"增加成功":"增加失败";
  	o.data='';
  	res.json(o);
  })
  next();
});

module.exports = router;
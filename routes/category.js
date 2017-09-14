var express = require('express');
var router = express.Router();
var categoryDao=require("../models/categoryDao");
/* GET category listing. */
router.post('/add', function(req, res) {
  var data=[req.body.name,req.body.categoryId];
  categoryDao.add(data,function(err,result){
  	var o={};
  	o.result=err==null;
  	o.msg=o.result?"增加成功":"增加失败";
  	o.data={data:result};
  	res.json(o);
  })
  
});

router.get('/list/:categoryId',function(req,res){
	var data=[req.params.categoryId];
	categoryDao.query(data,function(err,result){
		console.log(err);
		var o={};
		o.result=err==null;
	  	o.msg=o.result?"查询成功":"查询失败";
	  	o.data={data:result};
	  	res.json(o);
	})
});

router.post('/update',function(req,res){
	var data=[req.body.name,req.body.categoryId,req.body.id];
	categoryDao.update(data,function(err,result){
		var o={};
		o.result=err==null;
	  	o.msg=o.result?"修改成功":"修改失败";
	  	o.data={data:result};
	  	res.json(o);
	})
});

router.post('/del/:id',function(req,res){
	var data=[req.params.id];
	categoryDao.del(data,function(err,result){
		var o={};
		o.result=err==null;
	  	o.msg=o.result?"删除成功":"删除失败";
	  	o.data={data:result};
	  	res.json(o);
	})
});

module.exports = router;
var express = require('express');
var router = express.Router();
var adminDao=require("../models/adminDao");

router.post("./add",function(req,resp,next){    // 添加管理员
	var data=[req.body.account,req.body.password,req.authority];
	adminDao.add(data,function(err,result){
		console.log(err,result);
		var o={};
		o.result=err==null;
		o.massage=o.result?"添加管理员成功":"添加失败";	
		console.log(o);
		resp.json(o);
	});
	next();
});

router.post("./update",function(req,resp,next){    //修改管理员
	var data=[req.body.account,req.body.password,req.body.authority,req.body.id];
	adminDao.update(data,function(err,result){
		var o={};
		o.result=err=null;
		o.massage=o.result?"更改管理员成功":"更改失败";
		resp.json(o);
	});
	next();
});

router.post("./del",function(req,resq,next){   //删除管理员
	var data=[req.body.id];
	adminDao.del(data,function(err,result){
		var o={};
		o.result=err==null;
		o.massage=o.result?"删除成功":"删除失败";
		o.data=result;
		resq.json(o);
	});
	next();
});

router.get("./list",function(req,resp,next){  // 查询管理员表
	adminDao.query(function(err,result){
		var o={};
		o.result=err==null;
		o.massage=o.result?"查询管理员成功":"查询失败";	
		o.data=result;
		resp.json(o);
	});
	next();
});

router.get("./isexist",function(req,resp,next){
	var data=[req.body.account];
	adminDao.isexist(data,function(err,result){
		var o={};
		o.result=err==null;
		o.massage=o.result=""?"成功，可以使用":"账号已重复";
		o.data=result;
	});
});

/* GET users listing.
router.get('/add', function(req, res, next) {
  res.send('respond with a resource');
});
 */
module.exports = router;

/**if exists (select * from syscolumns where name='colname1' and id=object_id('数据库名.Owner.表名'))
　　　　print '存在'
　　else
　　　　print '不存在'
 * **/
/**/
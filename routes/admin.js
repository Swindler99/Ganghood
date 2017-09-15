var express = require('express');
var router = express.Router();
var adminDao=require("../models/adminDao");

router.post("/login",function(req,resp){
	var params=[req.body.account,req.body.password];
	adminDao.queryAdm(params, function(err,result){
		var o={};		
		o.result=!(result=='');
		if(err){
			o.msg="服务器错误！";
		}else{
			if(o.result){
				o.msg="登录成功";
			}
			else {
				o.msg="登陆失败";					
			}
		}
		res.json(o);
	});	
});
router.post("/add",function(req,resp){    // 添加管理员
	var data=[req.body.account,req.body.password];
	adminDao.add(data,function(err,result){
		var o={};
		o.result=err==null;
		o.massage=o.result?"添加管理员成功":"添加失败";	
		o.data={data:result};
		resp.json(o);
	});
});

router.post("/update",function(req,resp){    //修改管理员
	var data=[req.body.account,req.body.password,req.body.id];
	adminDao.update(data,function(err,result){
		var o={};
		o.result=err=null;
		o.msg=o.result?"更改管理员成功":"更改失败";
		o.data={data:result};
		resp.json(o);
	});
});

router.post("/del/:id",function(req,resp){   //删除管理员
	var data=[req.params.id];
	adminDao.del(data,function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"删除成功":"删除失败";
		o.data={data:result};
		resp.json(o);
	});
});

router.get("/list",function(req,resp){  // 查询管理员表
	adminDao.query(function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"查询管理员成功":"查询失败";	
		o.data={data:result};
		resp.json(o);
	});
});

router.get("/isexist/:account",function(req,resp){
	var data=[req.params.account];
	adminDao.isexist(data,function(err,result){
		var o={};
		o.result=result=='';
		o.msg=o.result?"可以使用!":"账号已重复";
		o.data={data:result};
		resp.json(o);
	});
});

module.exports = router;

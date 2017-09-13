var express = require('express');
var router = express.Router();
var usersDao=require("../models/usersDao.js");
var defriendUsersDao=require("../models/defriendUsersDao");
var hideUserDao=require("../models/hideUserDao")
router.post('/add',function(req,res){
	var params=[req.body.name,req.body.password,req.body.address,req.body.account,req.body.sex,req.body.birthdate];
	usersDao.addUser(params,function(err,result){
		console.log(err,result);
		var o={};
		o.result=err==null;
		o.msg=o.result?"增加用户成功！":"增加用户失败！";
		res.json(o);
	});
});
router.post('/list',function(req,res){
	usersDao.queryUser(function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"查询用户成功！":"查询用户失败！";
		o.data=result;
		res.json(o);
	});
});
router.post('/del/:id',function(req,res){
	console.log(req);
	var userID=req.params.id;
	usersDao.delUser(userID,function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"删除用户成功！":"删除用户失败！";
		res.json(o);
	});
});
router.post('/updateInfo',function(req,res){
	var params=[req.body.name,req.body.sex,req.body.avatar,req.body.address,req.body.birthdate];
	var id=req.body.id;
	usersDao.updateUser(params,id,function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"更新用户成功！":"更新用户失败！";
		res.json(o);
	});
});
router.post('/defriend/:id',function(req,res){
	var userID=req.params.id;
	//console.log(userID);
	defriendUsersDao.defriendUser(userID,function(err,result){
		var o={};
		//o.data=result;
		o.result=err==null;
		o.msg=o.result?"取消拉黑成功！":"取消拉黑失败！";
		res.json(o);
		//console.log(err);
	});
});
router.post('/updateInteg/:id',function(req,res){
	var userID=req.params.id;
	var params=req.body.integral;
	usersDao.updateUserInteg(userID,params,function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"更新积分成功！":"更新积分失败！";
		res.json(o);
	});
});
router.post('/updateExp/:id',function(req,res){
	var userID=req.params.id;
	var params=req.body.exprience;
	usersDao.updateUserExprience(userID,params,function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"更新经验成功！":"更新经验失败！";
		res.json(o);
	});
});
router.post('/updatePra/:id',function(req,res){
	var userID=req.params.id;
	var params=req.body.praiseTime;
	usersDao.updateUserPraiseTime(userID,params,function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"更新赞数成功！":"更新赞数失败！";
		res.json(o);
	});
});
router.post('/updateRep/:id',function(req,res){
	var userID=req.params.id;
	var params=req.body.reportTime;
	usersDao.updateUserReportTime(userID,params,function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"更新被举报次数成功！":"更新被举报次数失败！";
		res.json(o);
	});
});
router.post('/updateDel/:id',function(req,res){
	var userID=req.params.id;
	var params=req.body.deletedTime;
	usersDao.updateUserDeletedTime(userID,params,function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"更新被举报次数成功！":"更新被举报次数失败！";
		res.json(o);
	});
});
router.post('/hide/:id',function(req,res){
	var userID=req.params.id;
	//console.log(userID);
	hideUserDao.hideUser(userID,function(err,result){
		var o={};
		//o.data=result;
		o.result=err==null;
		o.msg=o.result?"匿名成功！":"匿名失败！";
		res.json(o);
		//console.log(err);
	});
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

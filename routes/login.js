var express = require('express');
var router = express.Router();
var admLogin = require("../models/loginDao");
/* GET login page. */
router.post('/', function(req, res, next) {
	var params=[req.body.account,req.body.password];
	console.log(params);
	admLogin.queryAdm(params, function(err,result){
		console.log("err"+err,result);
		var o={};		
		o.result=!(result=='');
		//console.log("o.result="+o.result);
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

module.exports = router;

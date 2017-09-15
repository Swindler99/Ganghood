var express=require('express');

var router=express.Router();
var answerDao=require("../models/answerDao");

//增加答案
router.post('/add', function(req,res){
    var data=[req.body.content,req.body.anonymous,req.body.questionId,req.body.userId];
    answerDao.add(data,function(err,result){
    	var o={};
    	o.result=err==null;
		o.msg=o.result?"增加答案成功!":"增加答案失败!";
		o.data={data:result};
		res.json(o);	
    })
});

//删除答案
router.post('/del/:id', function(req,res) {
	var data=[req.params.id];
    answerDao.del(data,function(err,result){
    	var o={};
    	o.result=err==null;
		o.msg=o.result?"删除答案成功!":"删除答案失败!";
		o.data={data:result};
		res.json(o);	
    })
});

//查看答案列表
router.get('/list/:questionId', function(req,res) {
	var data=[req.params.questionId];
    answerDao.list(data,function(err,result){
    	var o={};
    	o.result=err==null;
		o.msg=o.result?"查询答案成功!":"查询答案失败!";
		o.data={data:result};
		res.json(o);	
    })
});
module.exports=router;
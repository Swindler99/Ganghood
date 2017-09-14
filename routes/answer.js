var express=require('express');

var router=express.Router();
var questionDao=require("../models/answerDao");

//增加答案
router.post('/add', function(req,res,next) {
    var data=[req.body.content,req.body.reportTime,req.body.praiseTime,req.body.best，req.body.hide，req.body.treadTime，req.body.time，req.body.addContent，req.body.questionId，req.body.userId，req.body.superaddition];
    console.log(data);
    answerDao.add(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"增加答案成功!":"增加答案失败!";
		o.data={data:result};
		res.json(o);	
    })
    next();
});
//删除答案
router.post('/del/:id', function(req, res,next) {
	var data=[req.body.id];
    console.log(data);
    answerDao.delete(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"删除答案成功!":"删除答案失败!";
		o.data={data:result};
		res.json(o);	
    })
    next();
});
//追加答案
router.post('/add2', function(req,res,next) {
    var data={
    		req.body.id,
    		req.body.addContent
    }
    console.log(data);
    answerDao.update(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"追加答案成功!":"追加答案失败!";
		o.data={data:result};
		res.json(o);
    })
    next();
});
//查看答案列表
router.get('/list', function(req, res,next) {
	var data=[req.params.questionId];
    console.log(data);
    answerDao.select*from(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"查询答案成功!":"查询答案失败!";
		o.data={data:result};
		res.json(o);	
    })
    next();
});
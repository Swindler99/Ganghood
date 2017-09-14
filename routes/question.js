var express=require('express');

var router=express.Router();
var questionDao=require("../models/questionDao");

//增加问题
router.post('/add', function(req,res,next) {
    var data=[req.body.title,req.body.content,req.body.top,req.body.reportTime，req.body.collectedTime，req.body.urgent，req.body.score，req.body.anonymous，req.body.time，req.body.addContent，req.body.userId，req.body.attention，req.body.category];
    console.log(data);
    questionDao.add(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"增加问题成功!":"增加问题失败!";
		o.data={data:result};
		res.json(o);	
    })
    next();
});
//删除问题
router.post('/del/:id', function(req, res,next) {
	var data=[req.body.id];
    console.log(data);
    questionDao.delete(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"删除问题成功!":"删除问题失败!";
		o.data={data:result};
		res.json(o);
    })
    next();
});
//追加问题
router.post('/add2', function(req,res,next) {
    var data={
    		req.body.id,
    		req.body.addContent
    }
    console.log(data);
    questionDao.update(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"追加问题成功!":"追加问题失败!";
		o.data={data:result};
		res.json(o);
    })
    next();
});
//查看问题
router.get('/view/:id', function(req, res,next) {
	var data=[req.params.id];
    console.log(data);
    questionDao.select*from(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"查询问题成功!":"查询问题失败!";
		o.data={data:result};
		res.json(o);	
    })
    next();
});
module.exports=router;
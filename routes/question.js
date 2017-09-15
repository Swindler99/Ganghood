var express=require('express');
var router=express.Router();
var questionDao=require("../models/questionDao");

//增加问题
router.post('/add', function(req,res) {
    var data=[req.body.title,req.body.content,req.body.urgent,req.body.score,req.body.anonymous,req.body.userId,req.body.category];
    questionDao.add(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"增加问题成功!":"增加问题失败!";
		o.data={data:result};
		res.json(o);	
    })
});
//删除问题
router.post('/del/:id', function(req, res) {
	var data=[req.params.id];
    questionDao.delete(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"删除问题成功!":"删除问题失败!";
		o.data={data:result};
		res.json(o);
    })
});
//追加问题
router.post('/add2', function(req,res) {
    var data=[req.body.id,req.body.addContent];
    questionDao.update(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"追加问题成功!":"追加问题失败!";
		o.data={data:result};
		res.json(o);
    })
});
//查看问题
router.get('/view/:id', function(req, res) {
	var data=[req.params.id];
    questionDao.select*from(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"查询问题成功!":"查询问题失败!";
		o.data={data:result};
		res.json(o);	
    })
});
module.exports=router;
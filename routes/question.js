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
    questionDao.del(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"删除问题成功!":"删除问题失败!";
		o.data={data:result};
		res.json(o);
    })
});
//补充问题
router.post('/sup', function(req,res) {
    var data=[req.body.id,req.body.addContent];
    questionDao.supplement(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"补充问题成功!":"补充问题失败!";
		o.data={data:result};
		res.json(o);
    })
});
//查看问题详情
router.get('/view/:id', function(req, res) {
	var data=[req.params.id];
    questionDao.view(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"查询问题成功!":"查询问题失败!";
		o.data={data:result};
		res.json(o);	
    })
});
//查询用户提问列表
router.get('/userList/:userId', function(req, res) {
	var data=[req.params.userId];
    questionDao.userQuery(data,function(err,result){
    	o.result=err==null;
		o.msg=o.result?"查询成功!":"查询失败!";
		o.data={data:result};
		res.json(o);	
    })
});
//查询关注度问题列表
router.get("/attList",function(req,res){
	questionDao.attQuery(function(err,result){
		o.result=err==null;
		o.msg=o.result?"查询成功!":"查询失败!";
		o.data={data:result};
		res.json(o);
	})
});
//按类别查询问题列表
router.get('/cateList/{category}',function(req,res){
	var data=[req.params.category];
	questionDao.cateQuery(data,function(err,result){
		o.result=err==null;
		o.msg=o.result?"查询成功!":"查询失败!";
		o.data={data:result};
		res.json(o);
	})
})
module.exports=router;
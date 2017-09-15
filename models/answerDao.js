var pool=require("./dbConnection");
var answerdao ={
	//增加答案
	add: function(data,callback) {
		var sql="insert into question(content,reportTime,praiseTime,best,anonymous,treadTime,time,questionId,userId) values(?,0,0,2,?,0,now(),?,?)";
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接失败!")
			}else{
				connection.query(sql,data,function(err,result){
					callback(err,result);
				})
			}
		})	
	},
	//删除答案
	del：function(data,callback){
		var sql="delete from answer where id=? ";
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接失败!")
			}else{
				connection.query(sql,data,function(err,result){
					callback(err,result);
				})
			}
		});	
	},
	//查看答案列表
	list：function(data,callback){
		var sql="select*from answer where questionId =? ";
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接失败!")
			}else{
				connection.query(sql,data,function(err,result){
					callback(err,result);
				})
			}
		});	
	},
	//查看用户回答列表
	userList:function(data,callback){
		var sql="select a.*,q.* from answer as a join question as q on a.questionId =q.id where a.userId=?";
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接失败!")
			}else{
				connection.query(sql,data,function(err,result){
					callback(err,result);
				})
			}
		});
	}
};
module.exports=answerdao;
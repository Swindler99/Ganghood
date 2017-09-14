var pool=require("./dbConnection");
var amswerdao ={
		//增加答案
		add: function(data,callback) {
			var sql="insert into question(content,reportTime,praiseTime,best,hide,treadTime,time,addContent,questionId,userId,superaddition) value(?,?,?,?,?,?,?,?,?,?,?)";
			var sqlParams=[data.content,data.reportTime,data.praiseTime,data.best,data.hide,data.treadTime,data.time,data.addContent,data.questionId,data.userId,data.superaddition];
			pool.getConnection(function(err,connection){
			if(err){
				console.log("连接失败!")
			}else{
				connection.query(sql,sqlParams,function(err,result){
					callback(err,result);
				})
			}
		})	
		},
		//删除答案
  del：function(data,callback){
			var sql="delete from answer (id) where answer.id=? ";
			var sqlParams=[data.id];
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接失败!")
			}else{
				connection.query(sql,sqlParams,function(err,result){
					callback(err,result);
				})
			}
		})	
		},
		//追加回答
		add2: function(data,callback) {
			var sql="update amswer set addContent=? where answer.id=?"
            var sqlParams=[data.id];
			var sqlParams=[data.addContent];
			pool.getConnection(function(err,connection){
			if(err){
				console.log("连接失败!")
			}else{
				connection.query(sql,sqlParams,function(err,result){
					callback(err,result);
				})
			}
		})	
		},
	//查看答案列表
		list：function(data,callback){
			var sql="select*from answer where questionId=? ";
			var sqlParams=[data.questionId];
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接失败!")
			}else{
				connection.query(sql,sqlParams,function(err,result){
					callback(err,result);
				})
			}
		})	
		},
		
		//置顶问题
	/*	top：function(data,callback){
			var sql="update question set id= from id=? ";
			var sqlParams=[data.id];
		pool.getConnection(function(err,connection){
			if(err){
				console.log("置顶失败!")
			}else{
				connection.query(sql,sqlParams,function(err,result){
					if(err){
						callback(err.message);
					}else{
						callback(result);
					}
				})
			}
		})	
		},
		*/
	

	}
module.exports=answerdao;
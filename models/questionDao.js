var pool=require("./dbConnection");
var questiondao ={
	//增加问题
	add: function(data,callback) {
		var sql="insert into question(title,content,top,reportTime,collectedTime,urgent,score,anonymous,time,userId,attention,category) value(?,?,2,0,0,?,?,?,now(),?,2,?)";
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
	//删除问题
	del：function(data,callback){
		var sql="delete from question where id=? ";
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
	//追加问题
	add2: function(data,callback) {
		var sql="update question set addContent=? where id=?"
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
	//查看问题	
	view：function(data,callback){
		var sql="SELECT q.*,c.name AS categoryName FROM question AS q JOIN category AS c ON q.category=c.id WHERE q.id=?";
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
	}
module.exports=questiondao;
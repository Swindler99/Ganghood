var pool=require("./dbConnection");
var questiondao ={
		//增加问题
		add: function(data,callback) {
			var sql="insert into question( title，content，top，reportTime，collectedTime，urgent，score，anonymous，time，addContent，userId，attention，category) value(?,?,2,?,?,2,?,2,?,?,?,?,?)";
			var sqlParams=[data.title,data.content,data.urgent,data.score,data.anonymous,data.category,data.userid];
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
		//删除问题
  del：function(data,callback){
			var sql="delete from question (id) where question.id=? ";
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
		//追加问题
		add2: function(data,callback) {
			var sql="update question set addContent=? where question.id=?"
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
	//查看问题	

		view：function(data,callback){
			var sql="select*from question where id=? ";
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
module.exports=questiondao;
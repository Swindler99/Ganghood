var pool=require("./dbConnection");
var async=require("async");
var questiondao ={
	//增加问题
	add:function(data,callback) {
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
	del:function(data,callback){
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
	//补充问题
	supplement:function(data,callback) {
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
	view:function(data,callback){
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
	//用户发布问题列表
	userQuery:function(data,callback){
		var sql="select * from question where userId=?";
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
	//首页问题列表
	attQuery:function(callback){
		var sql="select * from question where attention=1";
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接失败!")
			}else{
				connection.query(sql,function(err,result){
					callback(err,result);
				})
			}
		})
	},
	//按分类查询问题列表
	cateQuery:function(data,callback){
		var sql="select * from question where category=?";
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
	//置顶问题
	top:function(data,callback){
		async.waterfall([
		    function(done){
		    	var sql="select * from question where id=?";
		    	pool.getConnection(function(err,connection){
					if(err){
						console.log("连接失败!")
					}else{
						connection.query(sql,data,function(err,result){
							done(err,result[0].top);
						})
					}
				});
		    },function(onearg,done){
		    	if(onearg==1){
		    		onearg=2;
		    	}else if(onearg==2){
		    		onearg=1;
		    	}
		    	var sql="update question set top=? where id=?";
		    	pool.getConnection(function(err,connection){
					if(err){
						console.log("连接失败!")
					}else{
						connection.query(sql,[onearg,data[0]],function(err,result){
							done(err,result);
						})
					}
				});
		    }       
		],function(err,result){
			callback(err,result);
		});
	},
	report:function(data,callback){
		var sql="update question set reportTime=reportTime+1 where id=?";
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
}
module.exports=questiondao;
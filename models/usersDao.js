var pool=require("./dbConnection.js");
module.exports={
		addUser:function(params,callback){
			pool.getConnection(function(err,connection){
				connection.query("insert into user " +
					"(name,password,address,account,sex,birthdate,avatar,hide,experience,integral,reportTime,deletedTime,praiseTime,defriend) " +
					"values(?,?,?,?,?,?,0,2,0,0,0,0,0,2)",params,function(err,result)
					{			
						callback(err,result);
					});
				connection.release();
			});
		},
		queryUser:function(page,params,callback)
		{
			var sql="select * from user where 1=1 ";
			var sqlTatal="select count(*) as total from user where 1=1 ";
			if(params[0])
				{
					sql+="and sex="+"'"+params[0]+"'";
					sqlTatal+="and sex="+"'"+params[0]+"'";
				}
			if(params[1]){
				sql+="and name="+"'"+params[1]+"'";
				sqlTatal+="and name="+"'"+params[1]+"'";
			}
			if(params[2])
				{
					sql+="and birthdate >="+"'"+params[2]+"'";
					sqlTatal+="and birthdate >="+"'"+params[2]+"'";
				}
			if(params[3])
				{
					sql+="and birthdate <="+"'"+params[3]+"'";
					sqlTatal+="and birthdate <="+"'"+params[3]+"'";
				}
			if(page){
				sql+=" limit "+(page-1)*10+",10 ";
			}
			console.log(sql);
			console.log(sqlTatal);
		
			/*正确查询条件
			 * pool.getConnection(function(err,connection){
						connection.query(sql,function(err,result){
							callback(err,result);
						});
				connection.release();
			});*/
			var r={};
			pool.getConnection(function(err,connection){
				connection.beginTransaction(function(err){
				
					connection.query(sql,function(err,result){
						if(err){
							connection.rollback(function(){
								throw err;
							});
						}
						r.res1=result;
						connection.query(sqlTatal,function(err,result){
							if(err){
								connection.rollback(function(){
								throw err;
								});	
							}
							r.res2=result;
							console.log(result);
							callback(err,r);
						});
						connection.commit(function(err){
							if(err){
								connection.rollback(function(){
									throw err;
								});
							}
							connection.release();
						});
					});
				});
			});
			
		},
		delUser:function(userID,callback)
		{
			pool.getConnection(function(err,connection){
				connection.query("delete from user where id ="+userID,function(err,result){
					callback(err,result);
				});
				connection.release();
			});
		},
		updateUser:function(params,userID,callback)
		{
			pool.getConnection(function(err,connection){
				connection.query("update user set name=?,sex=?,avatar=?,address=?,birthdate=? where id="+userID,params,function(err,result){
					callback(err,result);
				});
				connection.release();
			});
		},
		updateUserInteg:function(userID,params,callback)
		{
			pool.getConnection(function(err,connection){
				connection.query("update user set integral=? where id="+userID,params,function(err,result){
					callback(err,result);
				});
				connection.release();
			});
		},
		updateUserExprience:function(userID,params,callback)
		{
			pool.getConnection(function(err,connection){
				connection.query("update user set experience=experience+? where id="+userID,params,function(err,result){
					callback(err,result);
				});
				connection.release();
			});
		},
		updateUserPraiseTime:function(userID,params,callback)
		{
			pool.getConnection(function(err,connection){
				connection.query("update user set praiseTime=+praiseTime? where id="+userID,params,function(err,result){
					callback(err,result);
				});
				connection.release();
			});
		},
		updateUserReportTime:function(userID,params,callback)
		{
			pool.getConnection(function(err,connection){
				connection.query("update user set reportTime=? where id="+userID,params,function(err,result){
					callback(err,result);
				});
				connection.release();
			});
		},
		updateUserDeletedTime:function(userID,params,callback)
		{
			pool.getConnection(function(err,connection){
				connection.query("update user set deletedTime=? where id="+userID,params,function(err,result){
					callback(err,result);
				});
				connection.release();
			});
		},
		isexistUser:function(params,callback)
		{
			pool.getConnection(function(err,connection){
				connection.query("select * from user where account="+params,function(err,result){
					callback(err,result);
				});
				connection.release();
			});
		},
		
		
		
		
}
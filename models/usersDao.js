var pool=require("./dbConnection.js");
module.exports={
		addUser:function(params,callback){
			pool.getConnection(function(err,connection){
				connection.query("insert into user " +
					"(name,password,address,account,sex,birthdate,avatar,hide,experience,integral,reportTime,deletedTime,praiseTime,defriend) " +
					"values(?,?,?,?,?,?,0,2,0,0,0,0,0,2)",params,function(err,result)
					{
						//if(err)
							//{
							 // throw err;
							//}
						//else{
						callback(err,result);
						//}
					});
				connection.release();
			});
		},
		queryUser:function(callback)
		{
			pool.getConnection(function(err,connection){
				connection.query("select * from user",function(err,result){
					callback(err,result);
				});
				connection.release();
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
		
		
		
		
}
var pool=require("./dbConnection.js");
var async=require("async");
module.exports={
		defriendUser:function(userID,callback){
			pool.getConnection(function(err,connection){
				connection.beginTransaction(function(err){
					if(err){throw err;}
					connection.query("select defriend from user where id="+userID,function(err,result){
						if(err){
							connection.rollback(function(){
								throw err;
							});
						}
						var num=result[0].defriend;
						console.log(num);
						if(num==2)
							{
								connection.query("update user set defriend=1 where id="+userID,function(err,result){
									if(err){
										connection.rollback(function(){
										throw err;
										});
									}
								});
							}
						else{
							connection.query("update user set defriend=2 where id="+userID,function(err,result){
								if(err){
									connection.rollback(function(){
										throw err;
									});
								}
								
							});
						}
						connection.commit(function(err){
							if(err){
								connection.rollback(function(){
									throw err;
								});
							}
							console.log('success!');
							connection.release();
						});
					});
				});
			});
			
		}
}

	
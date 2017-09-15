var pool=require("./dbConnection");
var adminDao={
		//查询数据 列表
		query:function(callback){
			var sql="select*from administrator ";
			pool.getConnection(function(err,connection){
				if(err){
					console.log("查询失败");
				}else{
					connection.query(sql,function(err,result){
						callback(err,result);
					});
				}
			});
		},
		//增加数据
		add:function(data,callback){
			var sql="insert into administrator(account,password,authority)value(?,?,2)";
			pool.getConnection(function(err,connection){
				if(err){
					console.log("连接失败");
				}else{
					connection.query(sql,data,function(err,result){
						callback(err,result);
					});
				}
			});
		},
		//更改数据
		update:function(data,callback){
			var sql="update administrator set account=?,password=? where id=?";
			pool.getConnection(function(err,connection){
				if(err){
					console.log("更新失败");
				}else{
					connection.query(sql,data,function(err,result){
						callback(err,result);
					});
				}
			});
		},
		//删除数据
		del:function(data,callback){
			var sql="delete from administrator where id=?";
			pool.getConnection(function(err,connection){
				if(err){
					console.log("删除失败");
				}else{
					connection.query(sql,data,function(err,result){
						callback(err,result);
					});
				}
			});
		},
		//账号是否重复
		isexist:function(data,callback){
			var sql="select * from administrator where account=?";
			pool.getConnection(function(err,connection){
				if(err){
					console.log("登录失败")
				}else{
					connection.query(sql,data,function(err,result){
						callback(err,result);
					});
				}
			});
			
		},
		queryAdm:function(params,callback){
			var querySql="select account from administrator where account=? and password=?"
			pool.getConnection(function(err,connection){
				if(err) {
					console.log("连接失败！");
				}
				else{
					connection.query(querySql,params,function(err,result){
						callback(err,result);
					});
				}				
			});
		}
}

module.exports=adminDao;
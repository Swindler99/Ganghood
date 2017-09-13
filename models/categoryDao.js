var pool=require("./dbConnction");

module.exports={
	add:function(data,callback){
		var sql="alert into category(name,categoryId) values(?,?)";
		pool.getConnection(function(err,connection){
			if(err) {
				console.log("连接失败！");
			} else {
				connection.query(sql, data, function(err, result) {
					callback(err,result);
				})
			}
		})
	},
	del:function(data,callback){
		var sql="delete from category where id=?";
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接失败！");
			}else{
				connection.query(sql,data,function(err,result){
					callback(err,result);
				})
			}
		})
	},
	update:function(data,callback){
		var sql="update category set name=? categoryId=? where id=?";
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接失败！");
			}else{
				connection.query(sql,data,function(err,result){
					callback(err,result);
				})
			}
		})
	},
	query:function(data,callback){
		var sql="select c1.id,c1.name,c2.name as category from category c1 join category c2 where c1.categoryId = c2.id";
	}
}

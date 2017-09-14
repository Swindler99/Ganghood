var pool=require("./dbConnection");

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
		var sql="select c1.id,c1.name,c2.name as category from category c1 left join category c2 on c1.categoryId = c2.id where 1=1 ";
		if(data[0]){
			if(data[0]==0){
				sql+="and c1.categoryId is null";
			}else{
				sql+="and c1.categoryId="+data[0];
			}
		};
		pool.getConnection(function(err,connection){
			if(err){
				console.log("连接失败！");
			}else{
				connection.query(sql,function(err,result){
					callback(err,result);
				})
			}
		})
	}
}

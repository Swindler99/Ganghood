var pool=require("./dbConnction");

module.exports={
	add:function(data,callback){
		var sql="alert into category(name,categoryId) values(?,?)";
		pool.getConnection(function(err,connection){
			if(err) {
				console.log("连接失败！")
			} else {
				connection.query(sql, data, function(err, result) {
					callback(err,result);
				})
			}
		})
	},
	del:function(data,callback){
		var sql="delect "
	}
}

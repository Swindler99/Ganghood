var dbConnection = require("./dbConnection");
//connection.connect();
module.exports={
		queryAdm:function(params,callback){
			var querySql="select account from administrator where account=? and password=?"
			dbConnection.getConnection(function(err,connection){
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
//module.exports=admLogin;

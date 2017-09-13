var mysql=require("mysql");
var pool=mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'ganghood'
});

module.exports=pool;

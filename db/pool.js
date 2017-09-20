var mysql = require('mysql');
var pool = global.pool;
if(!pool){
    pool = mysql.createPool({
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:'root',
        database:'student'
    });
    global.pool = pool;   
}
module.exports = pool;


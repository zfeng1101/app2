//当前代码必须在db.js之后执行
var pool = require('./pool');

//
function findAll(handler){
    pool.getConnection(function(err,connection){
            if(err){
                throw err;
            }else{
                var sql = 'select * from student';
                connection.query(sql,function(err,results){
                    if(err){
                        throw err;
                    }else{
                        handler.call(this,results);
                    }
                    //回收
                    connection.release();
                });
            }
        });
}

//删除
function deleteById(id,handler){
    pool.getConnection(function(err,connection){
            if(err){
                throw err;
            }else{
                var sql = 'delete from student where id in ("+id.join()+")';
                connection.query(sql,[id],function(err,results){
                    if(err){
                        throw err;
                    }else{
                        handler.call(this,results);
                    }
                    connection.release();
                });
            }
        });
}

//通过id查
function findById(id,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'select * from student where id = ?';

            connection.query(sql,[id],function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results);
                }
                connection.release();
            });
        }
    });
}




//暴露接口
module.exports = {
    findAll:findAll,
    deleteById:deleteById,
    findById:findById
}

var express = require('express');
var studentRouter = express.Router();
var studentDB = require('../db/studentDB');
studentRouter.get('/findAll',function(req,resp){
	studentDB.findAll(function(results){
		resp.json(results);		
	});
});
studentRouter.post('/login',function(req,resp){
	resp.send('登录成功');
});
module.exports = studentRouter;
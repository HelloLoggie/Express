var express = require( 'express');
var app = express();

//针对根url（/）（应用程序的主页）的请求，对于其他所有的路径，将以Not found进行响应
//req和res与Node提供的对象完全相同
/*app.get('/',function(req,res){
    res.send('hello world!');
});*/
// app.use('/static',express.static('E:\\NodeJs服务器渲染\\express-helloWorld\\public'));
//app.use(express.static('E:\\NodeJs服务器渲染\\express-helloWorld\\public'));

app.use(express.static('./static-resource'));

var myLogger = function(req,res,next){
    console.log('LOGGED');
    next()
}
app.use(myLogger)

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}
app.use(requestTime)

app.get('/',function(req,res){
    var responseText = 'hello world<br/>'
    responseText += '<small>Requested at :'+ req.requestTime +'</small>'
    res.send(responseText)
})

//app.use('/static',express.static('E:\\NodeJs服务器渲染\\express-helloWorld\\public'));
/*
app.get('/accident.html',function(req,res){
    res.sendFile('E:/NodeJs服务器渲染/express-helloWorld/accident.html');
});

app.post('/',function(req,res){
    res.send('Got a post request')
});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});
*/

app.listen(3000,function(){
    console.log('example app is listening on port 3000!');
});
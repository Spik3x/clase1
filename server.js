var express = require("express");
var app=express();
var path= require("path");

app.get("/empresa",function(req,res){
    res.sendFile(
        path.join(
            __dirname, "/src/views/empresa.html"
        )
    );
});

app.get("/verempresa",function(req,res){
    res.sendFile(
        path.join(
            __dirname, "/src/views/verempresa.html"
        )
    );
});

app.get("/",function(req,res){
    res.sendFile(
        path.join(
            __dirname, "/src/views/index.html"
        )
    );
});

app.listen(3000, function(){
    console.log("");
});



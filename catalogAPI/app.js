var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("It works!");
})

app.listen(3000);

console.log("Server Started on port 3000")
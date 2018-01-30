const express = require("express");
const app = express();

var port = process.env.PORT || 3000;

app.get("/", (req, resp) => {
	resp.end("Hi Welcome to my Heroku.");
})

app.listen(port,(err)=>{
	if(err){
		console.log(err);
		return false;
	}
	console.log("Port is runnig");
})
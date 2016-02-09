//Main Config file for server
"use strict";

//main server dependencies and config
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

//use files in public
app.use(express.static(path.join(__dirname, '/public')));

app.get("/", (req, res)=>
{
	 // res.sendfile('public/index.html').end();
	 res.send("hay");
	 res.end();
});

//catch all
// app.get("/*", (req, res)=>
// {
// 	res.status(200)
// })

//listen for requests
app.listen(PORT, ()=>
{
	console.log(`App listening on port: ${PORT}`);
})


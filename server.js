//Main Config file for server
"use strict";

//main server dependencies and config
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
 // connecting with mongo
	const mongojs = require("mongojs");
	const db = mongojs("todoList");
	const bodyParser = require("body-parser");



//use files in public
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());

//index route
app.get("/", (req, res)=>
{
	 //gets index file
	 res.end();
});

//api route for getting tasks
app.get("/api/tasks", (req, res)=>
{
	console.log("I received a get request");
	//have server interact with mongo, find data from contactList db and collection
		//docs means it will respond with the documents from db (e.g. the contacts)
	db.collection("todos").find(function(err,todos){
		res.send(todos);
	})
});

//api route for getting members
app.get("/api/members", (req, res)=>
{
	console.log("I received a get request");
	//have server interact with mongo, find data from contactList db and collection
		//docs means it will respond with the documents from db (e.g. the contacts)
	db.collection("members").find(function(err,members){
		res.send(members);
	})
});

//api route for ading tasks
app.post("/api/tasks", (req, res)=>
{
	console.log("I received a post request");
	console.log("req ", req.body);
	db.collection("todos").insert(req.body,function(err,doc){
			//in addition to posting, send data back to ctrlr on callback
			res.json(doc);
	});
});

//api route for ading members
app.post("/api/members", (req, res)=>
{
	console.log("I received a post request");
	console.log("req ", req.body);
	db.collection("members").insert(req.body,function(err,doc){
			//in addition to posting, send data back to ctrlr on callback
			res.json(doc);
	});
});



//catch all
app.get("/*", (req, res)=>
{
	res.status(404).send("These arent the droids(pages) you're lookin for! Check the url and try again");
	res.end();
})

//listen for requests
app.listen(PORT, ()=>
{
	console.log(`App listening on port: ${PORT}`);
})


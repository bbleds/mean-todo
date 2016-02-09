//Main Config file for server
"use strict";

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;


app.get("/*", (req, res)=>
{
	res.status(200).send("<h1>Oops! The page you requested can't be found, try refreshing entering it again!")
})

//listen for requests
app.listen(PORT, ()=>
{
	console.log(`App listening on port: ${PORT}`);
})

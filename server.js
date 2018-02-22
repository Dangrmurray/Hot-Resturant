var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Dummy Data
var reservations = [
	{
		name: "Doge",
		phone: 34234234234,
		email: "doge@email.org",
		unique_id: 123
	},
	{
		name: "Hello",
		phone: 34234234,
		email: "hello@hi.com",
		unique_id: 321
	}
];

// ROUTES
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res){
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res){
	res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all current reservations & waitlist
app.get("/api/tables", function(req, res){
	var chosen = req.params.reservations;

	console.log(chosen);

	return res.json(reservations);
});

// Creates new reserverations
app.post("/api/reserve", function(req, res){
	var newres = req.body;

	console.log(newres);	
	reservations.push(newres);

	res.json(newres);
});

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});





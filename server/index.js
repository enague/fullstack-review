const express = require('express');
let app = express();
var bodyParser = require('body-parser');
const github= require('../helpers/github.js');
const db = require('../database/index.js')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  github.getReposByUsername(req.body.term)
  	.then(function(body) {
  		db.save(JSON.parse(body));
		  // save the repo information in the database

  	})
	.catch( function(err) {
		console.log(err);
	})
  
  
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


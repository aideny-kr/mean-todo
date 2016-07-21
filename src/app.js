'use strict';

var express = require('express');

var app = express();

// use static
app.use('/', express.static(__dirname + 'public'));

// setting up the router
var router = express.Router();

router.get('/todos', function(req, res) {
  res.json({ todos: []});
});

// TODO: Add POST

// TODO: Add PUT

// TODO: Add DELETE

app.use('/api', router);

app.listen(3000, function() {
  console.log("The server is running on 3000");
});

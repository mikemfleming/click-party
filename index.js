var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var path = require('path');

var main = path.join(__dirname, '/click-party.html')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/Public'));

app.get('/', function(request, response) {
	console.log('all up in your get ~~~~~~~~~')
  response.sendFile(main);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
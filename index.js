var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/Public'));

app.get('/', function(request, response) {
  response.sendFile('click-party.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
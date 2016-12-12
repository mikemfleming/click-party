var express = require('express');
var app = express();
var path = require('path');

var main = path.join(__dirname, '/click-party.html')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

app.get('/', function(request, response) {
  response.sendFile(main);
});

app.listen(app.get('port'), function() {
  console.log('Running on ', app.get('port'));
});
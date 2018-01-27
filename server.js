const express = require('express');
const app = express();

app.get('/', function(req, res)  {
  res.sendFile(__dirname + '/index.html');
});

app.get('/user/:name', function(req, res)  {
  res.sendFile(__dirname + '/user.html');
});

app.use(express.static('public'));

let port = 3000;
app.listen(port, function() {
  console.log(`app listening on port: ${port}`);
});

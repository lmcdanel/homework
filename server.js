const express = require('express');
const app = express();

app.get('/', function(req, res)  {
  res.sendFile(__dirname + '/index.html');
});

app.get('/user/:id', function(req, res)  {

  let message;

  if (req.params.id == '1') {
    message = "lindsey";
  }
  else if (req.params.id == '2') {
    message = "chris";
  }
  else {
    message = "unknown user";
  }


  res.json( {message: `user is ${message}`} );
});

app.use(express.static('public'));

let port = 3000;
app.listen(port, function() {
  console.log(`app listening on port: ${port}`);
});

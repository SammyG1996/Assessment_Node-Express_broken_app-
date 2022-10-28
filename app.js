const express = require('express');
var app = express();
const middleware = require('./middleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/', middleware.getDataFromGitHub, function(req, res, next) {
      return res.send(JSON.stringify(req.params.out));
});



app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: {message, status}
  });
});

app.listen(3000);

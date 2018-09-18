var express = require('express');
var app = express();

app.use(express.static('.'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});

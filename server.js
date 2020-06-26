const express = require("express");
var cors = require("cors");

var app = express();

app.use(cors()); // this is for disabiling cors Error(the video player doesnot run on the same port as the server)

app.use(express.static("videos"));

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

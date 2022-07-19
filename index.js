"use strict";
var express = require("express");
var app = express();
const fs = require("fs");
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(bodyParser.json());
app.use(cors())
app.get("/", function (req, res) {
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);

    let student = JSON.parse(data);
    res.send(student);
  });
});

app.get("/", function (req, res) {
  res.send("");
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});

const express = require("express");
const App = express.App();

App.get("/home", function (req, res) {
    res.send(" home page");
  });
  
  App.get("/service", function (req, res) {
    res.send("our service");
  });

  App.get("/contact", function (req, res) {
    res.send("Contact us ");
  });

  
  module.exports = App;

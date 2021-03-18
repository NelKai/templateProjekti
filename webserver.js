
var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(request, response) {

    response.render("pages/index");
});

app.get("/planeetat", function(request, response) {

    var data = require("./planeetat.json");
    
    response.render("pages/data", data);
});

app.listen(3000, function() {

    console.log("Kuunnellaan porttia 3000!");
});


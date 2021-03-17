
var express = require("express");
var app = express();
app.set("view engine", "ejs");

/*
var request = require("request");
var http = require("http");
var data;

request(
        "https://test.spaceflightnewsapi.net/api/v2/articles",
        { json: true },
        (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            
            console.log("Haetaan tietoja...");
            
            data = body;
            
console.log(data);


            for (var i = 0; i < data.length; i++) {
                console.log(data[i].title);
            }

            

        }
    );

*/

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


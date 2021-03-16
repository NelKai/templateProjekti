
var express = require("express");
var app = express();
app.set("view engine", "ejs");


app.get("/", function(request, response) {

    response.render("pages/index");
});

app.get("/artikkelit", function(request, response) {

    response.render("pages/data");
});

app.listen(3000, function() {

    console.log("Kuunnellaan porttia 3000!");
});









/* AJAX yritys
<%

        // Linkki api:in : https://any-api.com/nytimes_com/most_popular_api/docs/_mostviewed_section_time_period_json/GET_mostviewed_section_time_period_json
    
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/{section}/{time-period}.json", true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var xmlText = xhr.responseXML;
                console.log(xhr.responseXML);

                var otsikot = xmlText.getElementsByTagName("title");
                var pvm = xmlText.getElementsByTagName("published_date");

                var artikkelit;
                
                %>

                <ul>

                    <% for (var i = 0; i < otsikot.length; i++) {
                        artikkelit = {  otsikko:otsikot[i].childNodes[0].nodeValue,
                                        julkaisupvm:pvm[i].childNodes[0].nodeValue  };  %>
                    <li><%= artikkelit.otsikko %></li>
                    
                    <%
                    } %>
                
                </ul>

            <%
            } 
        }
    %>
    */
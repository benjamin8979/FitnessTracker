// A static server using Node and Express
const express = require("express");
const app = express();

// Make all the files in 'public' available on the Web
app.use(express.static("public"));

// When there us nothing following the slash in the url, return the main page of the app
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


app.use(express.json());

// Where server receives and responds to POST requests
app.post('*', function(req, res, next) {
    console.log("Server received a post request at", req.url);
    res.send("I got your POST request");
});

// Listen for requests
const listener = app.listen(3000, () => {
    console.log("The static server is listening on port " + listener.address().port);
})

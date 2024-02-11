// A server that uses a database
const express = require("express");
const app = express();

//database operations
const dbo = require('./databaseOps');

app.use(express.json());

// Make all the files in 'public' available on the Web
app.use(express.static("public"));

// When there us nothing following the slash in the url, return the main page of the app
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});




// Where server receives and responds to POST requests
app.post('/store', function(req, res, next) {
    console.log("Server received a poost request at", req.url);
    console.log("Body: ", req.body);
    res.send({
        message: "I received your POST request at /store"
    });
    let activity = req.body.activity;
    let date = req.body.date;
    date = parseDate(date);
    date = Date.parse(date);
    let amount = 0;
    if (typeof req.body.scalar == "string") {
        amount = req.body.scalar;
    }
    else {
        amount = -1;
    }
    dbo.storeDB(activity,date,amount).catch(
        function(error) {
            console.log("error: ", error);
        }
    );
});

function parseDate(date) {
    let parsed = date.split(/\D/);
    return new Date(parsed[0], --parsed[1], parsed[2]);
}

// Listen for requests
const listener = app.listen(3000, () => {
    console.log("The static server is listening on port " + listener.address().port);
})

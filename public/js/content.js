import barchart from "./barchart.js";

// Add Activity buttons

let newActivityButton = document.getElementById("button-1");
newActivityButton.addEventListener("click", buttonAction);

function buttonAction() {
    let pressed = document.getElementById("new-activity");
    pressed.style.display = "none";
    let text = document.getElementById("submit-p");
    text.style.display = "none";
    let choices = document.getElementById("hidden");
    choices.style.display = "flex";
}

let newActivityButton2 = document.getElementById("button-2");
newActivityButton2.addEventListener("click", buttonAction2);

function buttonAction2() {
    let pressed = document.getElementById("new-activity-2");
    pressed.style.display = "none";
    let text = document.getElementById("submit-p-2");
    text.style.display = "none";
    let choices = document.getElementById("hidden-2");
    choices.style.display = "flex";
}

// Select Action Buttons

let walkButton = document.getElementById("walk");
walkButton.addEventListener("click", walkAction);

function walkAction() {
    let activityBox = document.getElementById("drop-btn");
    activityBox.textContent = "Walk";
    let unitBox = document.getElementById("unit");
    unitBox.textContent = "km";
}

let runButton = document.getElementById("run");
runButton.addEventListener("click", runAction);

function runAction() {
    let activityBox = document.getElementById("drop-btn");
    activityBox.textContent = "Run";
    let unitBox = document.getElementById("unit");
    unitBox.textContent = "km";
}

let swimButton = document.getElementById("swim");
swimButton.addEventListener("click", swimAction);

function swimAction() {
    let activityBox = document.getElementById("drop-btn");
    activityBox.textContent = "Swim";
    let unitBox = document.getElementById("unit");
    unitBox.textContent = "laps";
}

let bikeButton = document.getElementById("bike");
bikeButton.addEventListener("click", bikeAction);

function bikeAction() {
    let activityBox = document.getElementById("drop-btn");
    activityBox.textContent = "Bike";
    let unitBox = document.getElementById("unit");
    unitBox.textContent = "km";
}

let yogaButton = document.getElementById("yoga");
yogaButton.addEventListener("click", yogaAction);

function yogaAction() {
    let activityBox = document.getElementById("drop-btn");
    activityBox.textContent = "Yoga";
    let unitBox = document.getElementById("unit");
    unitBox.textContent = "minutes";
}

let soccerButton = document.getElementById("soccer");
soccerButton.addEventListener("click", soccerAction);

function soccerAction() {
    let activityBox = document.getElementById("drop-btn");
    activityBox.textContent = "Soccer";
    let unitBox = document.getElementById("unit");
    unitBox.textContent = "minutes";
}

let bballButton = document.getElementById("bball");
bballButton.addEventListener("click", bballAction);

function bballAction() {
    let activityBox = document.getElementById("drop-btn");
    activityBox.textContent = "Basketball";
    let unitBox = document.getElementById("unit");
    unitBox.textContent = "minutes";
}

let walkButton2 = document.getElementById("walk-2");
walkButton2.addEventListener("click", walkAction2);

function walkAction2() {
    let activityBox = document.getElementById("drop-btn-2");
    activityBox.textContent = "Walk";
}

let runButton2 = document.getElementById("run-2");
runButton2.addEventListener("click", runAction2);

function runAction2() {
    let activityBox = document.getElementById("drop-btn-2");
    activityBox.textContent = "Run";
}

let swimButton2 = document.getElementById("swim-2");
swimButton2.addEventListener("click", swimAction2);

function swimAction2() {
    let activityBox = document.getElementById("drop-btn-2");
    activityBox.textContent = "Swim";
}

let bikeButton2 = document.getElementById("bike-2");
bikeButton2.addEventListener("click", bikeAction2);

function bikeAction2() {
    let activityBox = document.getElementById("drop-btn-2");
    activityBox.textContent = "Bike";
}

let yogaButton2 = document.getElementById("yoga-2");
yogaButton2.addEventListener("click", yogaAction2);

function yogaAction2() {
    let activityBox = document.getElementById("drop-btn-2");
    activityBox.textContent = "Yoga";
}

let soccerButton2 = document.getElementById("soccer-2");
soccerButton2.addEventListener("click", soccerAction2);

function soccerAction2() {
    let activityBox = document.getElementById("drop-btn-2");
    activityBox.textContent = "Soccer";
}

let bballButton2 = document.getElementById("bball-2");
bballButton2.addEventListener("click", bballAction2);

function bballAction2() {
    let activityBox = document.getElementById("drop-btn-2");
    activityBox.textContent = "Basketball";
}

// Chart drop down buttons

let chartWalkButton = document.getElementById("chart-walk");
chartWalkButton.addEventListener("click", chartWalkAction);

function chartWalkAction() {
    let activityBox = document.getElementById("chart-dropbtn");
    activityBox.textContent = "Walk";
}

let chartRunButton = document.getElementById("chart-run");
chartRunButton.addEventListener("click", chartRunAction);

function chartRunAction() {
    let activityBox = document.getElementById("chart-dropbtn");
    activityBox.textContent = "Run";
}

let chartSwimButton = document.getElementById("chart-swim");
chartSwimButton.addEventListener("click", chartSwimAction);

function chartSwimAction() {
    let activityBox = document.getElementById("chart-dropbtn");
    activityBox.textContent = "Swim";
}

let chartBikeButton = document.getElementById("chart-bike");
chartBikeButton.addEventListener("click", chartBikeAction);

function chartBikeAction() {
    let activityBox = document.getElementById("chart-dropbtn");
    activityBox.textContent = "Bike";
}

let chartYogaButton = document.getElementById("chart-yoga");
chartYogaButton.addEventListener("click", chartYogaAction);

function chartYogaAction() {
    let activityBox = document.getElementById("chart-dropbtn");
    activityBox.textContent = "Yoga";
}

let chartSoccerButton = document.getElementById("chart-soccer");
chartSoccerButton.addEventListener("click", chartSoccerAction);

function chartSoccerAction() {
    let activityBox = document.getElementById("chart-dropbtn");
    activityBox.textContent = "Soccer";
}

let chartBballButton = document.getElementById("chart-bball");
chartBballButton.addEventListener("click", chartBballAction);

function chartBballAction() {
    let activityBox = document.getElementById("chart-dropbtn");
    activityBox.textContent = "Basketball";
}


// Submit Buttons

// array of data to send to server

let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", submitAction);

function submitAction() {
    // frontend response
    let formContent = document.getElementById("hidden");
    formContent.style.display = "none";
    let newButton = document.getElementById("new-activity");
    newButton.style.display = "flex";
    let show = document.getElementById("submit-p");
    let newText = document.getElementById("content");
    let str = `${document.getElementById("drop-btn").textContent} for 
    ${document.getElementById("choose-time").value} 
    ${document.getElementById("unit").textContent}.`;
    newText.textContent = str;
    newText.style.fontWeight = "700";
    newText.style.fontSize = "16px";
    if (document.getElementById("drop-btn").textContent == '' || 
    document.getElementById("choose-time").value == '') {
        newText.textContent = "Error: blank section.";
        newText.style.fontSize = "18px";
    }
    else if (document.getElementById("choose-time").value < 0) {
        newText.textContent = "Error: invalid time/distance.";
        newText.style.fontSize = "18px";
    }
    show.style.display = "flex";
    // add info to array to send to server
    let data = {
        date: document.getElementById("choose-date").value,
        activity: document.getElementById("drop-btn").textContent,
        scalar: document.getElementById("choose-time").value,
        units: document.getElementById("unit").textContent
    }
    postData('/store', data);
}

let submitButton2 = document.getElementById("submit-btn-2");
submitButton2.addEventListener("click", submitAction2);

function submitAction2() {
    // frontend response
    let formContent = document.getElementById("hidden-2");
    formContent.style.display = "none";
    let newButton = document.getElementById("new-activity-2");
    newButton.style.display = "flex";
    let show = document.getElementById("submit-p-2");
    let newText = document.getElementById("session");
    let str = `${document.getElementById("drop-btn-2").textContent} on 
    ${document.getElementById("choose-future-date").value}`;
    newText.textContent = str;
    newText.style.fontWeight = "700";
    newText.style.fontSize = "16px";
    if (document.getElementById("drop-btn-2").textContent == '') {
        newText.textContent = "Error: blank section.";
        newText.style.fontSize = "18px";
    }
    show.style.display = "flex";
    // add info to array to send to server
    let data = {
        date: document.getElementById("choose-future-date").value,
        activity: document.getElementById("drop-btn-2").textContent,
    }
    postData('/store', data);
}

// View progress button

let firstChart = true;

let progressButton = document.getElementById("progress");
progressButton.addEventListener("click", progressButtonAction);

function progressButtonAction() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    let chartBox = document.getElementById("chart-box");
    chartBox.style.display = "block";
    const today = new Date().getTime();
    let dayLength = 8.64E7;
    let date  =  today - dayLength;
    let activity = "";
    let url = '/week?date=' + date + '&activity=' + activity;
    if (firstChart == true) {
        console.log("Creating chart");
        barchart.init('chart-anchor', 500, 300);
        firstChart = false;
    }
    getChart(url);
}

function getChart(url) {
    const req = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    console.log("sending get request to ", url);
    fetch(url, req).then(
        res => res.json()
    ).then(
        data => barchart.render(dataToChart(data), yAxis(data[0].activity), 'Day of the Week')
    ).catch(
        function(error) {
            console.log("Error: ", error);
        }
    )
}

function dataToChart(data) {
    let chartArr = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].amount > 0) {
            chartArr[i] = {'date': data[i].date, 'value': data[i].amount};
        }
    }
    return chartArr;
}

function yAxis(activity) {
    if (activity == "Walk") {
        return "Kilometers Walked";
    }
    else if (activity == "Run") {
        return "Kilometers Ran";
    }
    else if (activity == "Bike") {
        return "Kilometers Biked";
    }
    else if (activity == "Swim") {
        return "Kilometers Swam";
    }
    else if (activity == "Yoga") {
        return "Minutes of Yoga";
    }
    else if (activity == "Soccer") {
        return "Minutes of Soccer";
    }
    else if (activity == "Basketball") {
        return "Minutes of Basketball";
    }
}

// Close chart button

let closeButton = document.getElementById("close-chart");
closeButton.addEventListener("click", closeButtonAction);

function closeButtonAction() {
    let chart = document.getElementById("chart-box");
    chart.style.display = "none";
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

// Go button to view chart

let goButton = document.getElementById("go-button");
goButton.addEventListener("click", goButtonAction);

function goButtonAction() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    let chartBox = document.getElementById("chart-box");
    chartBox.style.display = "block";
    let date = document.getElementById("chart-date").value;
    date = parseDate(date);
    date = Date.parse(date);
    let activity = document.getElementById("chart-dropbtn").textContent;
    let url = '/week?date=' + date + '&activity=' + activity;
    getChart(url);
}

function parseDate(date) {
    let parsed = date.split(/\D/);
    return new Date(parsed[0], --parsed[1], parsed[2]);
}

// Send data to server
function postData(url, data) {
    const res = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    console.log("data received: ", res.body);
    console.log("sending post request...");
    fetch(url, res)
    .then(res => res.json())
    .then(data => console.log(data));

}
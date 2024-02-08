
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

// Submit Buttons

// array of data to send to server
let items = [];

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
    items.push(document.getElementById("choose-date").value);
    items.push(document.getElementById("drop-btn").textContent);
    items.push(document.getElementById("choose-time").value);
    items.push(document.getElementById("unit").textContent);
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
    items.push(document.getElementById("choose-future-date").value);
    items.push(document.getElementById("drop-btn-2").textContent);
}
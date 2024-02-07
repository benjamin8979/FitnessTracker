
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
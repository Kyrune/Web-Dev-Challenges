/*
DESCRIPTION:
Your job is to enable users to give a rating between 1 (bad) and 5 (great), 
and then display that rating in the form of an emoji. The users should give 
their ratings by pressing a key on their keyboards (the numbers 1 to 5). 
Here's the numbers' corresponding emojis:

5 = 😁
4 = 🙂
3 = 😐
2 = ☹️
1 = 🤬

event listeners, keyboard events, key codes, 
focus, focusout, DOM manipulation, tabindex

*/

const box = document.getElementById("box")
const text = document.getElementById("text")

box.addEventListener("focus", function(){
    text.textContent = "Type a number between 1 and 5"
})

box.addEventListener("focusout", function(){
    text.textContent = "Click here to give your rating!"
})


// Write your code here 👇

// box.addEventListener("keydown", function(event) {
//     // console.log("keydown: " + event.keyCode);
//     let key = event.keyCode;

//     if (key == 53) {
//         text.textContent = "😁";
//     } else if (key == 52) {
//         text.textContent = "🙂";
//     } else if (key == 51) {
//         text.textContent = "😐";
//     } else if (key == 50) {
//         text.textContent = "☹️";
//     } else if (key == 49) {
//         text.textContent = "🤬";
//     } else {
//         text.textContent = "Type a number between 1 and 5";
//     }
// });

// box.addEventListener("keydown", function(event) {
//     let key = event.code;
//     let addClass = text.classList.add("fadeIn");
//     let removeClass = setTimeout(function(){text.classList.remove("fadeIn");}, 3000);

//     if (key == "Digit5") {
//         addClass;
//         text.textContent = "😁";
//         removeClass;
//     } else if (key == "Digit4") {
//         addClass;
//         text.textContent = "🙂";
//         removeClass;
//     } else if (key == "Digit3") {
//         addClass;
//         text.textContent = "😐";
//         removeClass;
//     } else if (key == "Digit2") {
//         addClass;
//         text.textContent = "☹️";
//         removeClass;
//     } else if (key == "Digit1") {
//         addClass;
//         text.textContent = "🤬";
//         removeClass;
//     } else {
//         text.textContent = "Type a number between 1 and 5";
//     }
// });

const keyToEomji = {
    Digit5: "😁",
    Digit4: "🙂",
    Digit3: "😐",
    Digit2: "☹️",
    Digit1: "🤬"
};

box.addEventListener("keyup", function(event) {
    // console.log("event.code", keyToEomji[event.code]);
    text.textContent = keyToEomji[event.code];
});

/*

DETAILED INSTRUCTIONS
1. Listen for keyboard events when the box has focus
2. Figure out which key the user pressed
3. If it's between 1 and 5, display an emoji in the box!

STRETCH GOALS:
- Animate the emoji onto the screen! Why not go crazy with multiple emojis? 
- Reset the entire app when box doesn't have focus anymore
- Can you improve the overall design?

*/

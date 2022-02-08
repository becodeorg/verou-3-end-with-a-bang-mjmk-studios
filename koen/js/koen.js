// import necessary js files
import { rooms } from "./koen_arrays.js";

//capture command from text box
const readInput = (event) => {
    let command = document.getElementById("input").value;
    console.log(command);
    commandStart(command);
}
// if command is 'start'
const commandStart = (command) => {
    if (command == "start") {
        console.log('checkety check');
        let roomBox = document.getElementById("roomBox");
        let dashDash = document.createElement("p");
        dashDash.innerText = "----------------------------------------------------------";
        roomBox.append(dashDash);
    }
}
// submit button event listener
document.getElementById("submit").addEventListener("click", readInput);
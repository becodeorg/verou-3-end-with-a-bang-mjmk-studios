// import necessary js files
import { rooms } from "./koen_arrays.js";
// globals
let whatRoom;

//capture command from text box
const readInput = (event) => {
    let command = document.getElementById("input").value;
    console.log(command);
    commandStart(command);
}
// if command is 'start'
const commandStart = (command) => {
    if (command == "start") {
        whatRoom = rooms[0].room;
        console.log(whatRoom);
        let roomBox = document.getElementById("roomBox");
        let actionBox = document.getElementById("actionBox");
        let dashDash = document.createElement("p");
        dashDash.innerText = "----------------------------------------------------------";
        roomBox.insertBefore(dashDash, roomBox.firstChild);
        let firstHint = document.createElement("div");
        firstHint.className = "hint";
        firstHint.innerText = "Hint: Your quest is to leave the building and go home";
        let secondHint = document.createElement("div");
        secondHint.className = "hint";
        secondHint.innerHTML = "Hint: Words appearing in <span style='color: red;'>red</span>, can be interacted with.";
        roomBox.insertBefore(firstHint, roomBox.firstChild);
        roomBox.insertBefore(secondHint, roomBox.firstChild);
        let roomDes = document.createElement("div");
        roomDes.innerHTML = rooms[0].description;
        roomDes.style.color = "white";
        roomBox.insertBefore(roomDes, roomBox.firstChild);
        let thirdHint = document.createElement("div");
        thirdHint.className = "hint";
        thirdHint.innerHTML = "Hint: Maybe you could <span style='color: rgb(153, 153, 0);'>'examine'</span> <span style='color: red;'>Basile</span> or <span style='color: red;'>Bert</span>."
        roomBox.insertBefore(thirdHint, roomBox.firstChild);
        let directions = document.getElementById("directions");
        directions.innerHTML = "<span style='color: white;'>Possible directions are: </span><span style='color: rgb(153, 153, 0);'>" + rooms[0].directions + "</span>";
        let creatures = document.getElementById("creatures");
        creatures.innerHTML = "<span style='color: white;'>Creatures: </span><span style='color: purple;'>" + rooms[0].creatures + "</span>";
        return whatRoom;
    }
    if (whatRoom == rooms[0].room) {
        console.log('yeah');
        let roomBox = document.getElementById("roomBox");
        let actionBox = document.getElementById("actionBox");
        let dashDash = document.createElement("p");
        dashDash.innerText = "----------------------------------------------------------";
        roomBox.insertBefore(dashDash, roomBox.firstChild);
        let firstHint = document.createElement("div");
        firstHint.className = "hint";
        firstHint.innerText = "Hint: Your quest is to leave the building and go home";
        let secondHint = document.createElement("div");
        secondHint.className = "hint";
        secondHint.innerHTML = "Hint: Words appearing in <span style='color: red;'>red</span>, can be interacted with.";
        roomBox.insertBefore(firstHint, roomBox.firstChild);
        roomBox.insertBefore(secondHint, roomBox.firstChild);
        let roomDes = document.createElement("div");
        roomDes.innerHTML = rooms[0].description;
        roomDes.style.color = "white";
        roomBox.insertBefore(roomDes, roomBox.firstChild);
        let thirdHint = document.createElement("div");
        thirdHint.className = "hint";
        thirdHint.innerHTML = "Hint: Maybe you could <span style='color: rgb(153, 153, 0);'>'examine'</span> <span style='color: red;'>Basile</span> or <span style='color: red;'>Bert</span>."
        roomBox.insertBefore(thirdHint, roomBox.firstChild);
        let directions = document.getElementById("directions");
        directions.innerHTML = "<span style='color: white;'>Possible directions are: </span><span style='color: rgb(153, 153, 0);'>" + rooms[0].directions + "</span>";
        let creatures = document.getElementById("creatures");
        creatures.innerHTML = "<span style='color: white;'>Creatures: </span><span style='color: purple;'>" + rooms[0].creatures + "</span>";
        if (command == "Examine Basile") {
            console.log("coucou");
        }
    }
}
// submit button event listener
document.getElementById("submit").addEventListener("click", readInput);
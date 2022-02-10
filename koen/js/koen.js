// import necessary js files
import { rooms } from "./koen_arrays.js";
import { descriptions } from "./koen_descriptions.js"
// globals
let whatRoom;

//capture command from text box
const readInput = (event) => {
    let command = document.getElementById("input").value;
    console.log(command);
    commandStart(command);
    document.getElementById("input").value = " ";

}
// if command is 'start'
const commandStart = (command) => {
    if (command == "Start") {
        whatRoom = rooms[0].room;
        console.log(whatRoom);
        let roomBox = document.getElementById("roomBox");
        let actionBox = document.getElementById("actionBox");
        let dashDash = document.createElement("p");
        dashDash.innerText = "-";
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
        thirdHint.innerHTML = "Hint: Maybe you could <span style='color: rgb(153, 153, 0);'>'Examine'</span> <span style='color: red;'>Basile</span> or <span style='color: red;'>Bert</span>."
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
        dashDash.innerText = "-";
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
        // if Examine Basile
        if (command == "Examine Basile") {
            let roomBox = document.getElementById("roomBox");
            console.log(descriptions[0].creatures.Basile.description);
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let basileDes = document.createElement("div");
            basileDes.innerHTML = descriptions[0].creatures.Basile.description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(basileDes, roomBox.firstChild);
        }
        //if Examine Bert
        if (command == "Examine Bert") {
            let roomBox = document.getElementById("roomBox");
            console.log(descriptions[0].creatures.Bert.description);
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let bertDes = document.createElement("div");
            bertDes.innerHTML = descriptions[0].creatures.Bert.description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(bertDes, roomBox.firstChild);
        }
        // if west
        if (command == "West") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let westDes = document.createElement("div");
            westDes.innerHTML = descriptions[0].directions.west.description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(westDes, roomBox.firstChild);
        }
        // if Examine whiteboard
        if (command == "Examine whiteboard") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let whiteboardDes = document.createElement("div");
            whiteboardDes.innerHTML = descriptions[0].objects.whiteboard.description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(whiteboardDes, roomBox.firstChild);
        }
        // if Read whiteboard
        if (command == "Read whiteboard") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let whiteboardText = document.createElement("div");
            whiteboardText.innerHTML = descriptions[0].objects.whiteboard.text;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(whiteboardText, roomBox.firstChild);
        }
        // if Look
        if (command == "Look") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let roomDes = document.createElement("div");
            roomDes.innerHTML = rooms[0].description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(roomDes, roomBox.firstChild);
        }
        // if South
        if (command == "South") {
            console.log('ok');
            whatRoom = rooms[1].room;
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let roomDes = document.createElement("div");
            roomDes.innerHTML = rooms[1].description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(roomDes, roomBox.firstChild);
            let directions = document.getElementById("directions");
            directions.innerHTML = "<span style='color: white;'>Possible directions are: </span><span style='color: rgb(153, 153, 0);'>" + rooms[1].directions + "</span>";
            let creatures = document.getElementById("creatures");
            creatures.innerHTML = "<span style='color: white;'>Creatures: </span><span style='color: purple;'> none </span>";
            return whatRoom;
        }
        // if Ask Basile about pin code
        if (command == "Ask Basile about pin code") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let basileAsk = document.createElement("div");
            basileAsk.innerHTML = descriptions[0].creatures.Basile.ask;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(basileAsk, roomBox.firstChild);
        }
        // if Ask Bert about pin code
        if (command == "Ask Bert about pin code") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let bertAsk = document.createElement("div");
            bertAsk.innerHTML = descriptions[0].creatures.Bert.ask;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(bertAsk, roomBox.firstChild);
        }
    }
    if (whatRoom == rooms[1].room || command == "room2") {
        let roomBox = document.getElementById("roomBox");;
        let dash = document.createElement("div");
        dash.innerHTML = "-";
        let roomDes = document.createElement("div");
        roomDes.innerHTML = rooms[1].description;
        roomBox.insertBefore(dash, roomBox.firstChild);
        roomBox.insertBefore(roomDes, roomBox.firstChild);
        let directions = document.getElementById("directions");
        directions.innerHTML = "<span style='color: white;'>Possible directions are: </span><span style='color: rgb(153, 153, 0);'>" + rooms[1].directions + "</span>";
        let creatures = document.getElementById("creatures");
        creatures.innerHTML = "<span style='color: white;'>Creatures: </span><span style='color: purple;'> none </span>";
        // if Look
        if (command == "Look") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let roomDes = document.createElement("div");
            roomDes.innerHTML = rooms[1].description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(roomDes, roomBox.firstChild);
        }
        // if West
        if (command == "West") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let westDes = document.createElement("div");
            westDes.innerHTML = descriptions[0].directions.west.description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(westDes, roomBox.firstChild);
        }
        // if Examine tables
        if (command == "Examine tables") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let tablesDes = document.createElement("div");
            tablesDes.innerHTML = descriptions[0].objects.tables.description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(tablesDes, roomBox.firstChild);
        }
        // if Examine table1
        if (command == "Examine table1") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let table1Des = document.createElement("div");
            table1Des.innerHTML = descriptions[0].objects.table1.description,
                roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(table1Des, roomBox.firstChild);
        }
        // if Examine table2
        if (command == "Examine table2") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let table2Des = document.createElement("div");
            table2Des.innerHTML = descriptions[0].objects.table2.description,
                roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(table2Des, roomBox.firstChild);
        }
        // if Examine table3
        if (command == "Examine table3") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let table3Des = document.createElement("div");
            table3Des.innerHTML = descriptions[0].objects.table3.description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(table3Des, roomBox.firstChild);
        }
        // if Grab it
        if (command == "Grab it") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let itDes = document.createElement("div");
            itDes.innerHTML = descriptions[0].objects.it.description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(itDes, roomBox.firstChild);
        }
        // if norh
        if (command == "North") {
            whatRoom = rooms[0].room;
            let roomBox = document.getElementById("roomBox");
            let actionBox = document.getElementById("actionBox");
            let dashDash = document.createElement("p");
            dashDash.innerText = "-";
            roomBox.insertBefore(dashDash, roomBox.firstChild);
            let roomDes = document.createElement("div");
            roomDes.innerHTML = rooms[0].description;
            roomDes.style.color = "white";
            roomBox.insertBefore(roomDes, roomBox.firstChild);
            let directions = document.getElementById("directions");
            directions.innerHTML = "<span style='color: white;'>Possible directions are: </span><span style='color: rgb(153, 153, 0);'>" + rooms[0].directions + "</span>";
            let creatures = document.getElementById("creatures");
            creatures.innerHTML = "<span style='color: white;'>Creatures: </span><span style='color: purple;'>" + rooms[0].creatures + "</span>";
            return whatRoom;
        }
        // if East
        if (command == "East") {
            whatRoom = rooms[2].room;
            let roomBox = document.getElementById("roomBox");
            let actionBox = document.getElementById("actionBox");
            let dashDash = document.createElement("p");
            dashDash.innerText = "-";
            roomBox.insertBefore(dashDash, roomBox.firstChild);
            let roomDes = document.createElement("div");
            roomDes.innerHTML = rooms[2].description;
            roomBox.insertBefore(roomDes, roomBox.firstChild);
            let directions = document.getElementById("directions");
            directions.innerHTML = "<span style='color: white;'>Possible directions are: </span><span style='color: rgb(153, 153, 0);'>" + rooms[2].directions + "</span>";
            let creatures = document.getElementById("creatures");
            creatures.innerHTML = "<span style='color: white;'>Creatures: </span><span style='color: purple;'>" + rooms[2].creatures + "</span>";
            return whatRoom;
        }
    }
    if (whatRoom == rooms[2].room) {
        let roomBox = document.getElementById("roomBox");;
        let dash = document.createElement("div");
        dash.innerHTML = "-";
        let roomDes = document.createElement("div");
        roomDes.innerHTML = rooms[2].description;
        roomBox.insertBefore(dash, roomBox.firstChild);
        roomBox.insertBefore(roomDes, roomBox.firstChild);
        let directions = document.getElementById("directions");
        directions.innerHTML = "<span style='color: white;'>Possible directions are: </span><span style='color: rgb(153, 153, 0);'>" + rooms[2].directions + "</span>";
        let creatures = document.getElementById("creatures");
        creatures.innerHTML = "<span style='color: white;'>Creatures: </span><span style='color: purple;'>" + rooms[2].creatures + "</span>";
        // if Look
        if (command == "Look") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let roomDes = document.createElement("div");
            roomDes.innerHTML = rooms[2].description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(roomDes, roomBox.firstChild);
        }
        // if west
        if (command == "West") {
            whatRoom = rooms[1].room;
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let roomDes = document.createElement("div");
            roomDes.innerHTML = rooms[1].description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(roomDes, roomBox.firstChild);
            let directions = document.getElementById("directions");
            directions.innerHTML = "<span style='color: white;'>Possible directions are: </span><span style='color: rgb(153, 153, 0);'>" + rooms[1].directions + "</span>";
            let creatures = document.getElementById("creatures");
            creatures.innerHTML = "<span style='color: white;'>Creatures: </span><span style='color: purple;'> none </span>";
            return whatRoom;
        }
        //if Examine Erwin
        if (command == "Examine Erwin") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let erwinDes = document.createElement("div");
            erwinDes.innerHTML = descriptions[0].creatures.Erwin.description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(erwinDes, roomBox.firstChild);
        }
        //if Bother Erwin
        if (command == "Bother Erwin") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let erwinBother = document.createElement("div");
            erwinBother.innerHTML = descriptions[0].creatures.Erwin.bothered;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(erwinBother, roomBox.firstChild);
        }
        // if Examine door
        if (command == "Examine door") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let doorDes = document.createElement("div");
            doorDes.innerHTML = descriptions[0].objects.door.description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(doorDes, roomBox.firstChild);
        }
        // if Examine keypad
        if (command == "Examine keypad") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let keypadDes = document.createElement("div");
            keypadDes.innerHTML = descriptions[0].objects.keypad.description;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(keypadDes, roomBox.firstChild);
            let hint = document.createElement("div");
            hint.innerHTML = "<span style='color: green;'>Hint: To escape, you will have to 'Enter pin' followed by 4 digits. E.g. 'Enter pin 0000'</span>";
            roomBox.insertBefore(hint, roomBox.firstChild);
        }
        // if Ask Erwin about pin code
        if (command == "Ask Erwin about pin code") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let askErwin = document.createElement("div");
            askErwin.innerHTML = descriptions[0].creatures.Erwin.ask;
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(askErwin, roomBox.firstChild);
        }
        // if Enter pin 0000
        if (command == "Enter pin 0000") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let wrongPin = document.createElement("div");
            wrongPin.innerHTML = "Computer says NO. Nice try, smart ass."
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(wrongPin, roomBox.firstChild);
        }
        // if Enter pin 5746
        if (command == "Enter pin 5746") {
            let roomBox = document.getElementById("roomBox");;
            let dash = document.createElement("div");
            dash.innerHTML = "-";
            let correctPin = document.createElement("div");
            correctPin.className = "end";
            correctPin.innerHTML = "PING! The elevator doors open. </br> Congratulations, you escaped. </br> Just remember that your time on earth is short and fleating. </br> Have a nice day. </br> <span style='color: yellow';>THE END</span>";
            roomBox.insertBefore(dash, roomBox.firstChild);
            roomBox.insertBefore(correctPin, roomBox.firstChild);
        }
    }
    if (command == "?") {
        let roomBox = document.getElementById("roomBox");;
        let dash = document.createElement("div");
        dash.innerHTML = "-";
        let help = document.createElement("div");
        help.innerHTML = "<span style='color: rgb(153, 153, 0);'>Examine</span> let's you get a better look at things. </br><span style='color: rgb(153, 153, 0);'>Look</span> let's you see the room description again.</br><span style='color: rgb(153, 153, 0);'>North, East, South, West</span> let you navigate to a different room.</br><span style='color: rgb(153, 153, 0);'>Start</span> to start or reset the game.</br> There are several commands hidden away in the game itself.";
        roomBox.insertBefore(dash, roomBox.firstChild);
        roomBox.insertBefore(help, roomBox.firstChild);
    }
}
// submit button event listener
document.getElementById("submit").addEventListener("click", readInput);
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        readInput();
    }
})
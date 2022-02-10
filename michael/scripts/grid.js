const makeJSElementPlusImg = (attribute, parent) => {
    const x = document.createElement("div");
    x.setAttribute("id", attribute);
    const y = document.createElement("img");
    x.appendChild(y);
    parent.appendChild(x);
}

const makeJSElement = (attribute, parent) => {
    const x = document.createElement("div");
    x.setAttribute("id", attribute);
    parent.appendChild(x);
}




const getBody = document.querySelector("body");

makeJSElement ("container", getBody);

holdContainer = document.getElementById("container")

makeJSElementPlusImg ("WallpaperOne", holdContainer);
makeJSElementPlusImg ("WallpaperTwo", holdContainer);
makeJSElementPlusImg ("WallpaperThree", holdContainer);
makeJSElementPlusImg ("WallpaperFour", holdContainer);
makeJSElementPlusImg ("WallpaperFive", holdContainer);
makeJSElementPlusImg ("WallpaperSix", holdContainer);
makeJSElementPlusImg ("WallpaperSeven", holdContainer);
makeJSElementPlusImg ("WallpaperEight", holdContainer);

holdContainer.style.display = "grid";


for (let i = 0; i < 8; i++) {
    let x = document.querySelectorAll("img");
    console.log(x);
    x[i].setAttribute("src", "hello");
};

// sets the background color of all divs to red;
for (let i = 0; i < 8; i++) {
    let x = document.querySelectorAll("div");
    console.log(x);
    x[i].style.backgroundColor = "red";
};

const setElementClass = (element, cssClass) => {
    let x = document.querySelectorAll(element);
    console.log(x);
    for (let i = 0; i < x.length ; i++) {
    x[i].classList.add(cssClass); }
}

setElementClass ("div", "containerino");



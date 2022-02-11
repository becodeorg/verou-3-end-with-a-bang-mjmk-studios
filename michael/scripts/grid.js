const makeJSElementPlusImg = (attribute, parent) => {
    const x = document.createElement("div");
    x.setAttribute("id", attribute);
    const y = document.createElement("img");
    x.appendChild(y);
    parent.appendChild(x);
}
const setElementClass = (element, cssClass) => {
    let x = document.querySelectorAll(element);
    console.log(x);
    for (let i = 0; i < x.length ; i++) {
    x[i].classList.add(cssClass); }
}

const makeJSElement = (attribute, parent) => {
    const x = document.createElement("div");
    x.setAttribute("id", attribute);
    parent.appendChild(x);
}

const submitButton = document.getElementById("search-button");
const getBody = document.querySelector("body");

makeJSElement ("container", getBody);

const holdContainer = document.getElementById("container")

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

const getSearch = document.getElementById("search");
console.log(getSearch);

const getAnimeWallpaper = (event) => {
    event.preventDefault();
    let getAnime = getSearch.value.toLowerCase();
    getAnime = getAnime.replace(/\s+/g, "-");
    gimmeValue(getAnime);
  }
  

/* const styleNotifyFailure = (id, parameter0, parameter1, parameter2, parameter3, parameter4, parameter5, parameter6, parameter7) => {
 const x = document.getElementById(id);
 x.style.parameter0 = backgroundColor;
x.style.parameter1 = position;
x.style.parameter2 = bottom;
x.style.parameter3 = padding
x.style.parameter4 = borderRadius;
x.style.parameter5 = color;
x.style.parameter6 = boxShadow;
x.style.parameter7 = textShadow,
};
 */



submitButton.addEventListener('click', getAnimeWallpaper);
getSearch.addEventListener('keypress', function (e) {
  if (e.code === 'Enter') {
    getAnimeWallpaper(e);
  }
});

const takeSearch = document.getElementById("search");
makeJSElement("failureNotification", takeSearch);
      const notifyFailure = document.getElementById("failureNotification");
      notifyFailure.innerHTML = `Hi, We're sorry -- - -- but we don't have wallpapers for ${getAnime}; We don't have every manga around ;-(, try another.</>
<b> small tip: </b> Try to search for the full name of the manga. `;
notifyFailure.style.backgroundColor = "#5d5fef";
    notifyFailure.style.position = "absolute";
    notifyFailure.style.bottom = "40rem";
    notifyFailure.style.padding = "10rem 2rem 1rem 2rem";
    notifyFailure.style.borderRadius = "1rem";
    notifyFailure.style.color = "#a5a6f6";
    notifyFailure.style.boxShadow = "10px 5px 5px";
    notifyFailure.style.textShadow = "1px 0.5px white";
    notifyFailure.style.display = "none";


export {makeJSElement, makeJSElementPlusImg};
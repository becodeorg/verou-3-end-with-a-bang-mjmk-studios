import {
    makeJSElement,
    makeJSClassPlusImg,
    makeJSElementPlusImg,
    setElementClass,
} from "./base-functions.js";



const submitButton = document.getElementById("search-button");
const getBody = document.querySelector("body");

makeJSElement("container", getBody);

const holdContainer = document.getElementById("container")

makeJSClassPlusImg("WallpaperBaby", holdContainer);
makeJSClassPlusImg("WallpaperBaby", holdContainer);
makeJSClassPlusImg("WallpaperBaby", holdContainer);
makeJSClassPlusImg("WallpaperBaby", holdContainer);
makeJSClassPlusImg("WallpaperBaby", holdContainer);
makeJSClassPlusImg("WallpaperBaby", holdContainer);
makeJSClassPlusImg("WallpaperBaby", holdContainer);
makeJSClassPlusImg("WallpaperBaby", holdContainer);

holdContainer.style.display = "grid";
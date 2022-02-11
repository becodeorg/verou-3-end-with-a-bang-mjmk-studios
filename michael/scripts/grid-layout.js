
import {
    makeJSElement,
    makeJSClassPlusImg,
    makeJSElementPlusImg,
    setElementClass,
    makeJSIdClassPlusImg
} from "./base-functions.js";



const submitButton = document.getElementById("search-button");
const getBody = document.querySelector("body");

makeJSElement("container", getBody);

const holdContainer = document.getElementById("container")

makeJSIdClassPlusImg("wallPaperOne","wP", "WallpaperBaby","wPOne" ,holdContainer);
makeJSIdClassPlusImg("wallPaperTwo","wP", "WallpaperBaby","wPTwo" ,holdContainer);
makeJSIdClassPlusImg("wallPaperThree","wP", "WallpaperBaby","wPThree", holdContainer);
makeJSIdClassPlusImg("wallPaperFour","wP","WallpaperBaby","wPFour" ,holdContainer);
makeJSIdClassPlusImg("wallPaperFive","wP","WallpaperBaby","wPFive" ,holdContainer);
makeJSIdClassPlusImg("wallPaperSix","wP", "WallpaperBaby","wPSix" ,holdContainer);
makeJSIdClassPlusImg("wallPaperSeven","wP", "WallpaperBaby","wPSeven" ,holdContainer);
makeJSIdClassPlusImg("wallPaperEight","wP", "WallpaperBaby","wPEight" ,holdContainer);

holdContainer.style.display = "grid";

const getWps = document.querySelectorAll(".WallpaperBaby");
console.log (getWps);

let Wps0 = getWps[0];
console.log (Wps0);
Wps0.src = "https://wallpapercave.com/wp/jxcgxFu.jpg";

let Wps1 = getWps[1];
Wps1.src = "https://wallpapercave.com/wp/SVkG5hW.jpg"
let Wps2 = getWps[2];
Wps2.src = "https://wallpapercave.com/wp/OQE7psX.jpg"
let Wps3 = getWps[3];
Wps3.src = "https://wallpapercave.com/wp/6iTtKNA.jpg"
let Wps4 = getWps[4];
Wps4.src = "https://wallpapercave.com/wp/WoUBo1V.jpg"
let Wps5 = getWps[5];
Wps5.src = "https://wallpapercave.com/wp/gj0KhBI.jpg"
let Wps6 = getWps[6];
Wps6.src = "https://wallpapercave.com/wp/OAcLzIo.jpg"
let Wps7 = getWps[7];
Wps7.src = "https://wallpapercave.com/wp/rLgkUxI.jpg"


const getWallPapersArray = document.getElementsByClassName("wP");
console.log (getWallPapersArray);
          for (let i = 0; i < 8; i++ ) {
            let x = getWallPapersArray[i];
           x.style.paddingRight ="1rem";
           x.style.paddingLeft ="1rem";
           x.style.paddingTop ="1rem";
           x.style.paddingBottom ="1rem";
          }


let wp0 = document.getElementById("wallPaperOne");
console.log(wp0);

let Wp0 = document.getElementById("wPOne");
console.log (wPOne);
wp0.style.width="20rem";
console.log (Wp0);
wp0.style.height="20rem";
Wp0.style.width = "100%";
Wp0.style.height = "100%";

let wp1 = document.getElementById("wallPaperTwo");
console.log(wp0);

let Wp1 = document.getElementById("wPTwo");
console.log (wPOne);
wp1.style.width="20rem";
console.log (Wp0);
wp1.style.height="20rem";
Wp1.style.width = "100%";
Wp1.style.height = "100%";

let wp2 = document.getElementById("wallPaperThree");
console.log(wp2);

let Wp2 = document.getElementById("wPThree");
console.log (Wp2);
wp2.style.width="20rem";
wp2.style.height="20rem";
Wp2.style.width = "100%";
Wp2.style.height = "100%";

let wp3 = document.getElementById("wallPaperFour");
console.log(wp3);

let Wp3 = document.getElementById("wPFour");
console.log (Wp3);
wp3.style.width="20rem";
wp3.style.height="20rem";
Wp3.style.width = "100%";
Wp3.style.height = "100%";

let wp4 = document.getElementById("wallPaperFive");
console.log(wp4);

let Wp4 = document.getElementById("wPFive");
console.log (Wp4);
wp4.style.width="20rem";
wp4.style.height="20rem";
Wp4.style.width = "100%";
Wp4.style.height = "100%";

let wp5 = document.getElementById("wallPaperSix");
console.log(wp5);

let Wp5 = document.getElementById("wPSix");
console.log (Wp5);
wp5.style.width="20rem";
wp5.style.height="20rem";
Wp5.style.width = "100%";
Wp5.style.height = "100%";

let wp6 = document.getElementById("wallPaperSeven");
console.log(wp6);

let Wp6 = document.getElementById("wPSeven");
console.log (Wp6);
wp6.style.width="20rem";
wp6.style.height="20rem";
Wp6.style.width = "100%";
Wp6.style.height = "100%";

let wp7 = document.getElementById("wallPaperEight");
console.log(wp7);

let Wp7 = document.getElementById("wPEight");
console.log (Wp7);
wp7.style.width="20rem";
wp7.style.height="20rem";
Wp7.style.width = "100%";
Wp7.style.height = "100%";
import {
  makeJSElement,
  makeJSElementPlusImg,
  xyz
} from "./grid.js";


const getBody = document.querySelector("body");
console.log(getBody);

const createDiv = document.createElement("div");
createDiv.classList.add("API-container-one");
getBody.appendChild(createDiv);

console.log(createDiv);
let randomWall = "https://wallpapercave.com/wp/wp1809893.jpg";
/* createDiv.style.backgroundImage = "url(" + randomWall + ")"; */
createDiv.style.height = "400px";
createDiv.style.width = "200px";

const createFirstImg = document.createElement("img");
createFirstImg.classList.add("img-one");
createDiv.appendChild(createFirstImg);
createFirstImg.style.maxHeight = "100%";
createFirstImg.style.maxWidth = "100%";
createFirstImg.style.height = "400px";
createFirstImg.style.width = "200px";
/* createFirstImg.src = randomWall; */


const createDivUpperLeft = document.createElement("div");
createDivUpperLeft.classList.add("API-container-two");
getBody.appendChild(createDivUpperLeft);
createDivUpperLeft.style.backgroundImage = "url(" + randomWall + ")";
createDivUpperLeft.style.height = "100px"
createDivUpperLeft.style.width = "200px"



const getSearch = document.getElementById("search");
console.log(getSearch);



const submitButton = document.getElementById("search-button");
console.log(submitButton);


let finishedAnimeInput;
const getAnimeWallpaper = (event) => {
  event.preventDefault();
  let getAnime = getSearch.value.toLowerCase();
  getAnime = getAnime.replace(/\s+/g, "-");
  finishedAnimeInput = getAnime + "-wallpapers";
  callAnimeOutThere(finishedAnimeInput, getAnime);
  getAnimeRllyOutThere(finishedAnimeInput);
  gimmeValue(getAnime);
}


const gimmeValue = (getAnime) => {
  return getAnime;
}

submitButton.addEventListener('click', getAnimeWallpaper);
getSearch.addEventListener('keypress', function (e) {
  if (e.code === 'Enter') {
    getAnimeWallpaper(e);
  }
});

const callAnimeOutThere = (finishedAnimeInput, getAnime) => {



  fetch("https://yume-anime-wallpapers.p.rapidapi.com/manga_anime?slug=" + finishedAnimeInput, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "yume-anime-wallpapers.p.rapidapi.com",
        "x-rapidapi-key": "e1fc11060emsh56e7368925313f9p1174d1jsn3e6d83911114"
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].wallpapers);
      const randomWallpaper = data[0].wallpapers[Math.floor(Math.random() * data[0].wallpapers.length)];
      console.log(randomWallpaper);

      // hier nog iets doen met die data

    })
    .catch(err => {
      console.error(err);
      makeJSElement("failureNotification", getBody);
      const notifyFailure = document.getElementById("failureNotification");
      notifyFailure.innerHTML = `Hi, We're sorry -- - -- but we don't have wallpapers for ${getAnime}; We don't have every manga around ;-(, try another.</>
<b> small tip: </b> Try to search for the full name of the manga. `;
    });
};


/* callAnimeOutThere(); */

const getAnimeRllyOutThere = () => {

  fetch("https://yume-anime-wallpapers.p.rapidapi.com/manga_anime?slug=one-punch-man-wallpapers", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "yume-anime-wallpapers.p.rapidapi.com",
        "x-rapidapi-key": "e1fc11060emsh56e7368925313f9p1174d1jsn3e6d83911114"
      }
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const randomWallpaper = data[0].wallpapers[Math.floor(Math.random() * data[0].wallpapers.length)];
      console.log(randomWallpaper);


      for (let i = 0; i < 6; i++) {
        let fetchWallpaper = data[0].wallpapers[i];
        let x = document.getElementsByClassName("carouselItem");
        console.log(x);
        x[i].setAttribute("src", fetchWallpaper);
      };
    })
    .catch(err => {
      console.error(err);
    });
}

/* getAnimeRllyOutThere(); */


makeJSElement("container", getBody);

holdContainer = document.getElementById("container")

makeJSElementPlusImg("WallpaperOne", holdContainer);
makeJSElementPlusImg("WallpaperTwo", holdContainer);
makeJSElementPlusImg("WallpaperThree", holdContainer);
makeJSElementPlusImg("WallpaperFour", holdContainer);
makeJSElementPlusImg("WallpaperFive", holdContainer);
makeJSElementPlusImg("WallpaperSix", holdContainer);
makeJSElementPlusImg("WallpaperSeven", holdContainer);
makeJSElementPlusImg("WallpaperEight", holdContainer);

holdContainer.style.display = "grid";



/* TODO: 
1. Add navigation links & buttons
1. make if statement so that if we don't have wallpapers, the site reacts.
2. add code to also fix for some cases where -wallpaper is appropriate
3. style */




/* fetch("https://yume-anime-wallpapers.p.rapidapi.com/manga_anime", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "yume-anime-wallpapers.p.rapidapi.com",
      "x-rapidapi-key": "e1fc11060emsh56e7368925313f9p1174d1jsn3e6d83911114"
    }
  })
  .then((response) => response.json())
  .then((data) => {
      console.log(data[1].slug);
      let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,
        ab, cd, ef, gh, ij, kl, mn, op,
        aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk, ll, mm, nn, oo, pp, qq, rr, ss, tt, uu, vv, ww, qqq, yy, zz;
      [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, s, t, u, v, w, x, y, z, ab, cd, ef, gh, ij, kl, mn, op,
        aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk, ll, mm, nn, oo, pp, qq, rr, ss, tt, uu, vv, ww, qqq, yy, zz
      ] = data;
      console.log(a);
      console.log(b.slug);
      let slugArray = data;
      for (let i = 0; i < slugArray.length; i++) {
        console.log(slugArray[i].slug);
      };
    });
    
*/



//TODO: add the additional values to the searched string



/* function wallpaperChanger(data, getAnime) {
  console.log(getAnime);
  if (data.indexOf(getAnime) !== -1) {
    console.log ("chicken");
  }
} */


// TODO: write a function that takes the data from the searchbar and puts it in the API
import {
  makeJSElement,
  makeJSClassPlusImg,
  makeJSElementPlusImg,
  setElementClass,
  makeJSIdClassPlusImg
} from "./base-functions.js";


const getBody = document.querySelector("body");
console.log(getBody);


const getSearch = document.getElementById("search");
console.log(getSearch);


const submitButton = document.getElementById("search-button");
console.log(submitButton);

makeJSElement("container", getBody);

const holdContainer = document.getElementById("container")

makeJSIdClassPlusImg("wallPaperOne", "wP", "WallpaperBaby", "wPOne", holdContainer);
makeJSIdClassPlusImg("wallPaperTwo", "wP", "WallpaperBaby", "wPTwo", holdContainer);
makeJSIdClassPlusImg("wallPaperThree", "wP", "WallpaperBaby", "wPThree", holdContainer);
makeJSIdClassPlusImg("wallPaperFour", "wP", "WallpaperBaby", "wPFour", holdContainer);
makeJSIdClassPlusImg("wallPaperFive", "wP", "WallpaperBaby", "wPFive", holdContainer);
makeJSIdClassPlusImg("wallPaperSix", "wP", "WallpaperBaby", "wPSix", holdContainer);
makeJSIdClassPlusImg("wallPaperSeven", "wP", "WallpaperBaby", "wPSeven", holdContainer);
makeJSIdClassPlusImg("wallPaperEight", "wP", "WallpaperBaby", "wPEight", holdContainer);

holdContainer.style.display = "inline-grid";





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

const searchDisplay = () => {
  let x = document.querySelector("#byeByeCarousel");
  x.style.display = "none";
  console.log(x);
}




submitButton.addEventListener('click', searchDisplay);
getSearch.addEventListener('keypress', function (e) {
  if (e.code === 'Enter') {
    searchDisplay(e);
  }
});





const callAnimeOutThere = (finishedAnimeInput, getAnime) => {



  fetch("https://yume-anime-wallpapers.p.rapidapi.com/manga_anime?slug=" + finishedAnimeInput, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "yume-anime-wallpapers.p.rapidapi.com",
        "x-rapidapi-key": "7c7087b974mshbf48bda2f96d4f1p19b22cjsnd56c104c91f2"
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].wallpapers);
      const randomWallpaper = data[0].wallpapers[Math.floor(Math.random() * data[0].wallpapers.length)];
      console.log(randomWallpaper);
      for (let i = 0; i < 8; i++) {
        let fetchWallpaper = data[0].wallpapers[i];
        let x = document.querySelectorAll(".WallpaperBaby");
        console.log(x);
        x[i].setAttribute("src", fetchWallpaper);

        const setWallPapers = () => {

          const getWallPapersArray = document.getElementsByClassName("wP");
          console.log(getWallPapersArray);
          for (let i = 0; i < 8; i++) {
            let x = getWallPapersArray[i];
            x.classList.add("wPBig");
          }

          let wp0 = document.getElementById("wallPaperOne");
          console.log(wp0);

          let Wp0 = document.getElementById("wPOne");
          console.log(wPOne);
          wp0.style.width = "20rem";
          console.log(Wp0);
          wp0.style.height = "20rem";
          Wp0.style.width = "100%";
          Wp0.style.height = "100%";

          let wp1 = document.getElementById("wallPaperTwo");
          console.log(wp0);

          let Wp1 = document.getElementById("wPTwo");
          console.log(wPOne);
          wp1.style.width = "20rem";
          console.log(Wp0);
          wp1.style.height = "20rem";
          Wp1.style.width = "100%";
          Wp1.style.height = "100%";

          let wp2 = document.getElementById("wallPaperThree");
          console.log(wp2);

          let Wp2 = document.getElementById("wPThree");
          console.log(Wp2);
          wp2.style.width = "20rem";
          wp2.style.height = "20rem";
          Wp2.style.width = "100%";
          Wp2.style.height = "100%";

          let wp3 = document.getElementById("wallPaperFour");
          console.log(wp3);

          let Wp3 = document.getElementById("wPFour");
          console.log(Wp3);
          wp3.style.width = "20rem";
          wp3.style.height = "20rem";
          Wp3.style.width = "100%";
          Wp3.style.height = "100%";

          let wp4 = document.getElementById("wallPaperFive");
          console.log(wp4);

          let Wp4 = document.getElementById("wPFive");
          console.log(Wp4);
          wp4.style.width = "20rem";
          wp4.style.height = "20rem";
          Wp4.style.width = "100%";
          Wp4.style.height = "100%";

          let wp5 = document.getElementById("wallPaperSix");
          console.log(wp5);

          let Wp5 = document.getElementById("wPSix");
          console.log(Wp5);
          wp5.style.width = "20rem";
          wp5.style.height = "20rem";
          Wp5.style.width = "100%";
          Wp5.style.height = "100%";

          let wp6 = document.getElementById("wallPaperSeven");
          console.log(wp6);

          let Wp6 = document.getElementById("wPSeven");
          console.log(Wp6);
          wp6.style.width = "20rem";
          wp6.style.height = "20rem";
          Wp6.style.width = "100%";
          Wp6.style.height = "100%";

          let wp7 = document.getElementById("wallPaperEight");
          console.log(wp7);

          let Wp7 = document.getElementById("wPEight");
          console.log(Wp7);
          wp7.style.width = "20rem";
          wp7.style.height = "20rem";
          Wp7.style.width = "100%";
          Wp7.style.height = "100%";
        }

        setWallPapers();





      };

      // hier nog iets doen met die data

    })
    .catch(err => {
      console.error(err);
      const takeSearch = document.getElementsByClassName("form-container");
      makeJSElement("failureNotification", takeSearch[0]);
      makeJSElement("failureNotification", getBody);
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
    });
};


const getAnimeRllyOutThere = () => {

  fetch("https://yume-anime-wallpapers.p.rapidapi.com/manga_anime?slug=one-punch-man-wallpapers", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "yume-anime-wallpapers.p.rapidapi.com",
        "x-rapidapi-key": "7c7087b974mshbf48bda2f96d4f1p19b22cjsnd56c104c91f2"
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






/* TODO: 
1a. fix searchbar/carousel overlap
1. fix + wallpaper addition, so that it also calls for that
2. style/ hover fx and such
3. get randomWp for carousel
*/




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
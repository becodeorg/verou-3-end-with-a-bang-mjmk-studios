import {
  makeJSElement,
  makeJSClassPlusImg,
  makeJSElementPlusImg,
  setElementClass,
  makeJSIdClassPlusImg
} from "./base-functions.js";



const getRandomSlug = (data) => {
  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 12)

    let slug = data[randomNumber].slug;


    giveCarousel(slug, i); // hier wordt bij elke loop de waarde bijgevoegd
    // push zet het in de array
  }
}


// op lijn 12 wordt er iets gereturned, daardoor wordt de waarde van lijn 32 vervangen door de "returned value""
// hierdoor kan de data overal aangesproken worden (destructuring)

const testCarousel = () => {


  fetch("https://yume-anime-wallpapers.p.rapidapi.com/popular", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "yume-anime-wallpapers.p.rapidapi.com",
        "x-rapidapi-key": "18d03a0ac2msh9bc6959786043d3p1eeb0ejsnb79ae61ffe30"
      }
    })
    .then((response) => response.json())
    .then((data) => {
      // this one is not closed

      getRandomSlug(data);
    })
    .catch(err => {
      console.error(err);
    });
}

// !!!! correct de data doorgeven
// een constante maken om de resultaten van een fie op te slaan -> met return

const giveCarousel = (slug, i) => { // we need to get the slug here! not the array
  const aPIUrl = "https://yume-anime-wallpapers.p.rapidapi.com/popular?slug=" + slug;
  console.log(aPIUrl);
  fetch(aPIUrl, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "yume-anime-wallpapers.p.rapidapi.com",
        "x-rapidapi-key": "18d03a0ac2msh9bc6959786043d3p1eeb0ejsnb79ae61ffe30"
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const randomNumberTwo = Math.floor(Math.random() * 15)
      let fetchWallpaper = data[0].wallpapers[randomNumberTwo];
      let x = document.querySelectorAll(".carouselItem");
      console.log(x);
      x[i].setAttribute("src", fetchWallpaper);

    })
    .catch(err => {
      console.error(err);
    });
}

testCarousel();


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






const getAnimeWallpaper = (event) => {
  event.preventDefault();
  let getAnime = getSearch.value.toLowerCase();
  let finishedAnimeInput;
  if (getAnime == "akatsuki") {
    finishedAnimeInput = "akatsuki-wallpaper-hd"
  } else if (getAnime == "mushishi") {
    finishedAnimeInput = "mushishi-wallpaper"
  } else if (getAnime == "detective conan") {
    finishedAnimeInput = "detective-conan-wallpaper"
  } else if (getAnime == "dragon ball z") {
    finishedAnimeInput = "dragon-ball-z-hd-wallpaper"
  } else if (getAnime == "naruto") {
    finishedAnimeInput = "naruto-hd-wallpaper"
  } else if (getAnime == "clannad after story") {
    finishedAnimeInput = "clannad-after-story-wallpaper"
  } else if (getAnime == "fairy tail") {
    finishedAnimeInput = "fairy-tail-wallpaper"
  } else {
    getAnime = getAnime.replace(/\s+/g, "-");
    finishedAnimeInput = getAnime + "-wallpapers";
  }
  console.log(finishedAnimeInput);
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
        "x-rapidapi-key": "18d03a0ac2msh9bc6959786043d3p1eeb0ejsnb79ae61ffe30"
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
          console.log(Wp0);
          Wp0.classList.add = "zoomIn";
          wp0.style.width = "20rem";
          console.log(Wp0);
          wp0.style.height = "20rem";
          Wp0.style.width = "100%";
          Wp0.style.height = "100%";

          let wp1 = document.getElementById("wallPaperTwo");

          console.log(wp0);

          let Wp1 = document.getElementById("wPTwo");
          Wp1.classList.add = "zoomIn";
          console.log(Wp1);
          wp1.style.width = "20rem";
          console.log(Wp0);
          wp1.style.height = "20rem";
          Wp1.style.width = "100%";
          Wp1.style.height = "100%";

          let wp2 = document.getElementById("wallPaperThree");
          console.log(wp2);

          let Wp2 = document.getElementById("wPThree");
          Wp2.classList.add = "zoomIn";
          console.log(Wp2);
          wp2.style.width = "20rem";
          wp2.style.height = "20rem";
          Wp2.style.width = "100%";
          Wp2.style.height = "100%";

          let wp3 = document.getElementById("wallPaperFour");
          console.log(wp3);

          let Wp3 = document.getElementById("wPFour");
          Wp3.classList.add = "zoomIn";
          console.log(Wp3);
          wp3.style.width = "20rem";
          wp3.style.height = "20rem";
          Wp3.style.width = "100%";
          Wp3.style.height = "100%";

          let wp4 = document.getElementById("wallPaperFive");
          console.log(wp4);

          let Wp4 = document.getElementById("wPFive");
          Wp4.classList.add = "zoomIn";
          console.log(Wp4);
          wp4.style.width = "20rem";
          wp4.style.height = "20rem";
          Wp4.style.width = "100%";
          Wp4.style.height = "100%";

          let wp5 = document.getElementById("wallPaperSix");
          console.log(wp5);

          let Wp5 = document.getElementById("wPSix");
          Wp5.classList.add = "zoomIn";
          console.log(Wp5);
          wp5.style.width = "20rem";
          wp5.style.height = "20rem";
          Wp5.style.width = "100%";
          Wp5.style.height = "100%";

          let wp6 = document.getElementById("wallPaperSeven");
          console.log(wp6);

          let Wp6 = document.getElementById("wPSeven");
          Wp6.classList.add = "zoomIn";
          console.log(Wp6);
          wp6.style.width = "20rem";
          wp6.style.height = "20rem";
          Wp6.style.width = "100%";
          Wp6.style.height = "100%";

          let wp7 = document.getElementById("wallPaperEight");
          console.log(wp7);

          let Wp7 = document.getElementById("wPEight");
          Wp7.classList.add = "zoomIn";
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
      notifyFailure.style.zIndex = "10";
    });
};


const getAnimeRllyOutThere = () => {

  fetch("https://yume-anime-wallpapers.p.rapidapi.com/manga_anime?slug=one-punch-man-wallpapers", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "yume-anime-wallpapers.p.rapidapi.com",
        "x-rapidapi-key": "18d03a0ac2msh9bc6959786043d3p1eeb0ejsnb79ae61ffe30"
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

/* testCarousel(); */




/* TODO: 
3. grid -> one even bigger screens, have them just form one single row.
4. clicking the wallpaper opens a tab with the url
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
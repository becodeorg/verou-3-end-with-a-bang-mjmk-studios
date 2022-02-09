const getBody = document.querySelector("body");
console.log(getBody);

const createDiv = document.createElement("div");
createDiv.classList.add("API-container");
getBody.appendChild(createDiv);
createDiv.style.width= "500px";
createDiv.style.height= "500px";
createDiv.style.backgroundColor= "red";
console.log(createDiv);




const getSearch = document.getElementById("search");
console.log (getSearch);



const submitButton = document.getElementById("search-button");
console.log (submitButton);


let getAnime;
const getAnimeWallpaper = (event) => {
    event.preventDefault();
    const getAnime = getSearch.value.toLowerCase();
    console.log (getAnime);
    return getAnime;
}

// getAnime is private to the event; need to return getAnime

 


const firstApiCall = async() => {

await fetch("https://yume-anime-wallpapers.p.rapidapi.com/manga_anime", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "yume-anime-wallpapers.p.rapidapi.com",
		"x-rapidapi-key": "e1fc11060emsh56e7368925313f9p1174d1jsn3e6d83911114"
	}
})
.then((response) => response.json())
.then ((data) => {
	console.log(data[1].slug);
 let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, 
  ab, cd, ef, gh, ij, kl, mn, op,
  aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk, ll, mm, nn, oo, pp, qq, rr, ss, tt, uu, vv, ww, qqq, yy, zz;
  [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, s, t, u, v, w, x, y, z, ab, cd, ef, gh, ij, kl, mn, op,
    aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk, ll, mm, nn, oo, pp, qq, rr, ss, tt, uu, vv, ww, qqq, yy, zz] = data;
  console.log(a);
  console.log(b.slug);
  let slugArray = data;
  for (let i = 0; i < slugArray.length; i++) {
    console.log(slugArray[i].slug)};


fetch("https://yume-anime-wallpapers.p.rapidapi.com/manga_anime?slug=" + getAnime, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "yume-anime-wallpapers.p.rapidapi.com",
		"x-rapidapi-key": "e1fc11060emsh56e7368925313f9p1174d1jsn3e6d83911114"
	}
})
.then((response) => response.json())
.then ((data) => {
console.log(data);
}
)
.catch(err => {
	console.error(err);
});
})
.catch(err => {
	console.error(err);
});
}
//TODO: add the additional values to the searched string



/* function wallpaperChanger(data, getAnime) {
  console.log(getAnime);
  if (data.indexOf(getAnime) !== -1) {
    console.log ("chicken");
  }
} */

submitButton.addEventListener('click', getAnimeWallpaper);
getSearch.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        getAnimeWallpaper(e);
    }
});
// TODO: write a function that takes the data from the searchbar and puts it in the API
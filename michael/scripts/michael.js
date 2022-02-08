const getBody = document.querySelector("body");
console.log(getBody);

const createDiv = document.createElement("div");
createDiv.classList.add("API-container");
getBody.appendChild(createDiv);

const getSearch = document.getElementById("search");
console.log (getSearch);



const submitButton = document.getElementById("search-button");
console.log (submitButton);



const getAnimeWallpaper = (event) => {
    event.preventDefault();
    const getAnime = getSearch.value;
    console.log (getAnime);
}
    
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://yume-anime-wallpapers.p.rapidapi.com/popular',
  params: {slug: 'attack-on-titan-hd-wallpapers'},
  headers: {
    'x-rapidapi-host': 'yume-anime-wallpapers.p.rapidapi.com',
    'x-rapidapi-key': '04501cdf0fmshdf715127297ee93p15b933jsnf2181477577f'
  }
};

// Make a request using the options entailed above
axios.request(options)

.then(function (response) {

// handle success
	console.log(response.data);
}).catch(function (error) {
  // handle error
	console.error(error);
})
.then (function () {
  // always executed
});


/* const wallpaperChanger = (data) => {
    const getAnime = data.userInput;
    console.log (getAnime);
} */

submitButton.addEventListener('click', getAnimeWallpaper);
getSearch.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        getAnimeWallpaper(e);
    }
});
// TODO: write a function that takes the data from the searchbar and puts it in the API
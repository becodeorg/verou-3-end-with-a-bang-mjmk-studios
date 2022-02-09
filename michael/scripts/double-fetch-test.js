const getSearch = document.getElementById("search");
console.log (getSearch);

const submitButton = document.getElementById("search-button");
console.log (submitButton);

let keyWord = "ukraine%20conflict"

let test = "one punch man";
test = test.replace(/\s+/g, '-');
console.log(test);


const getArticle = (event) => {
    event.preventDefault();
    const getArticleAPI = getSearch.value.toLowerCase();
    getArticleAPIOut(getArticleAPI)
}

getArticleAPIOut = (getArticleAPI) => {

console.log(getArticleAPI);
}

fetch("https://free-news.p.rapidapi.com/v1/search?q="+ keyWord + "&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-news.p.rapidapi.com",
		"x-rapidapi-key": "e5f78d64b4msh513b30390225e0dp180769jsn44a2c11b949f"
	}
})
.then(response => response.json ())
.then((data) => {

    getArticleAPIOut(getArticleAPI);
    console.log(data);
    let userInput = (data.articles[0].author);
    console.log(userInput);
    console.log(getArticleAPI);


   return fetch("https://free-news.p.rapidapi.com/v1/search?q="+ keyWord + "&lang=en&sources=" + userInput , {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-news.p.rapidapi.com",
            "x-rapidapi-key": "e5f78d64b4msh513b30390225e0dp180769jsn44a2c11b949f"
        }
    });
}).then(response => response.json ())
    .then((data) => {
        console.log(data);
})

.catch(err => {
	console.error(err);
});


// This is an API, now I need to use output from this API
// as a direction for further API commands.

/*

Anime API -> gets info from the api: namely it looks whether 
the input is present in the database, and then converts it into 
'readable' input for the consequent API

News API -> get #articles based on a keyword.
after you've gotten the articles, check the source of the article
then get it to display more articles of the same search term
of the same source.


*/

submitButton.addEventListener('click', getArticle);
getSearch.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        getArticle(e);
    }
});
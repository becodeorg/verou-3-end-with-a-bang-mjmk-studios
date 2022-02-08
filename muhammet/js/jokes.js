const excuseButton = document.getElementById("getExcuseBtn");
const excuseTitle = document.getElementsByClassName("modal-title")[0];
const excuseBody = document.getElementsByClassName("modal-body")[0];

const excuseCategories = ["office", "family", "children", "college", "party"];
let excuseCategory = "party";

const fetchExcuse = () => {
  excuseCategory = excuseCategories[Math.floor(Math.random() * 5)];

  fetch("https://excuser.herokuapp.com/v1/excuse/" + excuseCategory)
    .then((response) => response.json())
    .then((data) => {
      setCategoryAsTitle(data[0].category);
      setJoke(data[0].excuse);
      console.log(data[0].excuse);
    });
};

const setCategoryAsTitle = (excuse) => {
  excuse = excuse.charAt(0).toUpperCase() + excuse.slice(1);
  excuseTitle.textContent = excuse + " Joke";
};

const setJoke = (excuse) => {
  excuseBody.textContent = excuse;
};

excuseButton.addEventListener("click", fetchExcuse);

const fetchChuckNorris = fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.value);
  });

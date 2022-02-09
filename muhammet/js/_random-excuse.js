const excuseTitle = document.getElementsByClassName("modal-title")[0];
const excuseBody = document.getElementsByClassName("modal-body")[0];

const excuseCategories = ["office", "family", "children", "college", "party"];
let excuseCategory = "party";

const setCategoryAsTitle = (excuse) => {
  excuse = excuse.charAt(0).toUpperCase() + excuse.slice(1);
  excuseTitle.textContent = excuse + " Excuse";
};

const setJoke = (excuse) => {
  excuseBody.textContent = excuse;
};

const fetchExcuse = () => {
  excuseCategory = excuseCategories[Math.floor(Math.random() * 5)];

  fetch("https://excuser.herokuapp.com/v1/excuse/" + excuseCategory)
    .then((response) => response.json())
    .then((data) => {
      setCategoryAsTitle(data[0].category);
      setJoke(data[0].excuse);
    });
};

export default fetchExcuse;

const chuckBody = document.getElementsByClassName("modal-body")[1];

const showChuckNorrisJoke = (cnJoke) => {
  chuckBody.textContent = cnJoke;
};

const fetchChuckNorris = () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      showChuckNorrisJoke(data.value);
    });
};

export default fetchChuckNorris;

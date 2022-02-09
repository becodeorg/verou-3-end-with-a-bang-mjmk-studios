const uselessBody = document.getElementsByClassName("modal-body")[2];

const showUselessFact = (uselessFact) => {
  uselessBody.textContent = uselessFact;
};

const fetchUselessFact = () => {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((response) => response.json())
    .then((data) => {
      showUselessFact(data.text);
    });
};

export default fetchUselessFact;

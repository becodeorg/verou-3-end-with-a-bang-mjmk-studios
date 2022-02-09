import fetchExcuse from "./_random-excuse.js";
import fetchChuckNorris from "./_chuck-jokes.js";

const excuseButton = document.getElementById("getExcuseBtn");
const chuckButton = document.getElementById("chuckBtn");

excuseButton.addEventListener("click", fetchExcuse);
chuckButton.addEventListener("click", fetchChuckNorris);

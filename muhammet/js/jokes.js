import fetchExcuse from "./_random-excuse.js";
import fetchChuckNorris from "./_chuck-jokes.js";
import fetchUselessFact from "./_useless-fact.js";

const excuseButton = document.getElementById("getExcuseBtn");
const chuckButton = document.getElementById("chuckBtn");
const uselessButton = document.getElementById("uselessBtn");

excuseButton.addEventListener("click", fetchExcuse);
chuckButton.addEventListener("click", fetchChuckNorris);
uselessButton.addEventListener("click", fetchUselessFact);

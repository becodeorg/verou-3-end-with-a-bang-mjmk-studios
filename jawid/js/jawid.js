// create div function
const createDiv = (className) => {
  const newDiv = document.createElement("div");
  newDiv.className = className;
  return newDiv;
};
// create h1 function
const createH2 = (className, h2Content) => {
  const newH2 = document.createElement("h2");
  newH2.className = className;
  newH2.innerText = h2Content;
  return newH2;
};
// create paragraph function
const createP = (className, pContent) => {
  const newP = document.createElement("p");
  newP.className = className;
  newP.innerText = pContent;
  return newP;
};

const songs = [
  {
    songImg: "../images/te-nguyen-Wt7XT1R6sjU-unsplash.jpg",
    title: "dfsqf",
    singer: "fsqdfsd",
    description: "fdsqfdsfq",
  },
];

// create div function
const createDiv = (className) => {
  const newDiv = document.createElement("div");
  newDiv.className = className;
  return newDiv;
};
// create h1 function
const createH1 = (className, h1Content) => {
  const newH1 = document.createElement("h1");
  newH1.className = className;
  newH1.innerText = h1Content;
  return newH1;
};
// create paragraph function
const createP = (className, pContent) => {
  const newP = document.createElement("p");
  newP.className = className;
  newP.innerText = pContent;
  return newP;
};

// create main container

const container = createDiv("container");
document.body.append(container);

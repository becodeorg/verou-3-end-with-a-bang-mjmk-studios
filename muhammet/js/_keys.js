const keyboardBtns = document.getElementsByClassName("keyboard")[0].children;

const firstGroup = keyboardBtns[0];
const secondGroup = keyboardBtns[1];
const thirdGroup = keyboardBtns[2];
const fourthGroup = keyboardBtns[3];

const firstGroupTopRow = firstGroup.children[0];
const firstGroupBotRow = firstGroup.children[1];

const secondGroupTopRow = secondGroup.children[0];
const secondGroupBotRow = secondGroup.children[1];

const thirdGroupTopRow = thirdGroup.children[0];
const thirdGroupBotRow = thirdGroup.children[1];

const fourthGroupTopRow = fourthGroup.children[0];
const fourthGroupBotRow = fourthGroup.children[1];

const keyZ = firstGroupTopRow.children[0];
const keyE = firstGroupTopRow.children[1];
const keyQ = firstGroupBotRow.children[0];
const keyS = firstGroupBotRow.children[1];
const keyD = firstGroupBotRow.children[2];

const keyF = secondGroupBotRow.children[0];
const keyT = secondGroupTopRow.children[0];
const keyG = secondGroupBotRow.children[1];
const keyY = secondGroupTopRow.children[1];
const keyH = secondGroupBotRow.children[2];
const keyU = secondGroupTopRow.children[2];
const keyJ = secondGroupBotRow.children[3];

const keyK = thirdGroupBotRow.children[0];
const keyO = thirdGroupTopRow.children[0];
const keyL = thirdGroupBotRow.children[1];
const keyP = thirdGroupTopRow.children[1];
const keyM = thirdGroupBotRow.children[2];

const keyù = fourthGroupBotRow.children[0];
const key$ = fourthGroupTopRow.children[0];
const keyµ = fourthGroupBotRow.children[1];

export const turnGreenKey = (key) => {
  if (key === keyQ.textContent.toLowerCase()) {
    keyQ.classList.add("keyPressed");
  }
  if (key === keyS.textContent.toLowerCase()) {
    keyS.classList.add("keyPressed");
  }
  if (key === keyD.textContent.toLowerCase()) {
    keyD.classList.add("keyPressed");
  }
  if (key === keyZ.textContent.toLowerCase()) {
    keyZ.classList.add("keyPressed");
  }
  if (key === keyE.textContent.toLowerCase()) {
    keyE.classList.add("keyPressed");
  }
  if (key === keyF.textContent.toLowerCase()) {
    keyF.classList.add("keyPressed");
  }
  if (key === keyT.textContent.toLowerCase()) {
    keyT.classList.add("keyPressed");
  }
  if (key === keyG.textContent.toLowerCase()) {
    keyG.classList.add("keyPressed");
  }
  if (key === keyY.textContent.toLowerCase()) {
    keyY.classList.add("keyPressed");
  }
  if (key === keyH.textContent.toLowerCase()) {
    keyH.classList.add("keyPressed");
  }
  if (key === keyU.textContent.toLowerCase()) {
    keyU.classList.add("keyPressed");
  }
  if (key === keyJ.textContent.toLowerCase()) {
    keyJ.classList.add("keyPressed");
  }
  if (key === keyK.textContent.toLowerCase()) {
    keyK.classList.add("keyPressed");
  }
  if (key === keyO.textContent.toLowerCase()) {
    keyO.classList.add("keyPressed");
  }
  if (key === keyL.textContent.toLowerCase()) {
    keyL.classList.add("keyPressed");
  }
  if (key === keyP.textContent.toLowerCase()) {
    keyP.classList.add("keyPressed");
  }
  if (key === keyM.textContent.toLowerCase()) {
    keyM.classList.add("keyPressed");
  }
  if (key === keyù.textContent.toLowerCase()) {
    keyù.classList.add("keyPressed");
  }
  if (key === key$.textContent.toLowerCase()) {
    key$.classList.add("keyPressed");
  }
  if (key === keyµ.textContent.toLowerCase()) {
    keyµ.classList.add("keyPressed");
  }
};

export const turnKeyBackToOriginal = (key) => {
  if (key === keyQ.textContent.toLowerCase()) {
    keyQ.classList.remove("keyPressed");
  }
  if (key === keyS.textContent.toLowerCase()) {
    keyS.classList.remove("keyPressed");
  }
  if (key === keyD.textContent.toLowerCase()) {
    keyD.classList.remove("keyPressed");
  }
  if (key === keyZ.textContent.toLowerCase()) {
    keyZ.classList.remove("keyPressed");
  }
  if (key === keyE.textContent.toLowerCase()) {
    keyE.classList.remove("keyPressed");
  }
  if (key === keyF.textContent.toLowerCase()) {
    keyF.classList.remove("keyPressed");
  }
  if (key === keyT.textContent.toLowerCase()) {
    keyT.classList.remove("keyPressed");
  }
  if (key === keyG.textContent.toLowerCase()) {
    keyG.classList.remove("keyPressed");
  }
  if (key === keyY.textContent.toLowerCase()) {
    keyY.classList.remove("keyPressed");
  }
  if (key === keyH.textContent.toLowerCase()) {
    keyH.classList.remove("keyPressed");
  }
  if (key === keyU.textContent.toLowerCase()) {
    keyU.classList.remove("keyPressed");
  }
  if (key === keyJ.textContent.toLowerCase()) {
    keyJ.classList.remove("keyPressed");
  }
  if (key === keyK.textContent.toLowerCase()) {
    keyK.classList.remove("keyPressed");
  }
  if (key === keyO.textContent.toLowerCase()) {
    keyO.classList.remove("keyPressed");
  }
  if (key === keyL.textContent.toLowerCase()) {
    keyL.classList.remove("keyPressed");
  }
  if (key === keyP.textContent.toLowerCase()) {
    keyP.classList.remove("keyPressed");
  }
  if (key === keyM.textContent.toLowerCase()) {
    keyM.classList.remove("keyPressed");
  }
  if (key === keyù.textContent.toLowerCase()) {
    keyù.classList.remove("keyPressed");
  }
  if (key === key$.textContent.toLowerCase()) {
    key$.classList.remove("keyPressed");
  }
  if (key === keyµ.textContent.toLowerCase()) {
    keyµ.classList.remove("keyPressed");
  }
};

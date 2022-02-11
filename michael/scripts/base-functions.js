const makeJSElementPlusImg = (attribute, parent) => {
    const x = document.createElement("div");
    x.setAttribute("id", attribute);
    const y = document.createElement("img");
    x.appendChild(y);
    parent.appendChild(x);
}
const makeJSIdClassPlusImg = (attribute,o, z, m, parent) => {
    const x = document.createElement("div");
    x.setAttribute("id", attribute);
    x.setAttribute ("class", o);
    const y = document.createElement("img");
    y.setAttribute("class", z);
    y.setAttribute ("id", m);
    x.appendChild(y);
    parent.appendChild(x);
}
const setElementClass = (element, cssClass) => {
    let x = document.querySelectorAll(element);
    console.log(x);
    for (let i = 0; i < x.length ; i++) {
    x[i].classList.add(cssClass); }
}

const makeJSElement = (attribute, parent) => {
    const x = document.createElement("div");
    x.setAttribute("id", attribute);
    parent.appendChild(x);
}

const makeJSClassPlusImg = (attribute, parent) => {
    const x = document.createElement("div");
    const y = document.createElement("img");
    y.setAttribute("class", attribute);
    parent.appendChild(x);
    x.appendChild(y);
}

export {makeJSElement, makeJSElementPlusImg, setElementClass, makeJSClassPlusImg, makeJSIdClassPlusImg};
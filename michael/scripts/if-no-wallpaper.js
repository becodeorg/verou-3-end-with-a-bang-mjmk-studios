function gimmeValue(getAnime) {
    makeJSElement("failureNotification", getBody);
    const notifyFailure = document.getElementById("failureNotification");
    notifyFailure.innerHTML = `Hi, We're sorry -- - -- but we don't have wallpapers for ${getAnime}; We don't have every manga around ;-(, try another.</br>
<b> small tip: </b> Try to search for the full name of the manga. `;
    notifyFailure.style.backgroundColor = "#5d5fef";
    notifyFailure.style.position = "absolute";
    notifyFailure.style.bottom = "40rem";
    notifyFailure.style.padding = "10rem 2rem 1rem 2rem";
    notifyFailure.style.borderRadius = "1rem";
    notifyFailure.style.color = "#a5a6f6";
    notifyFailure.style.boxShadow = "10px 5px 5px";
    notifyFailure.style.textShadow = "1px 0.5px white";
    notifyFailure.style.display = "none";

}

gimmeValue();
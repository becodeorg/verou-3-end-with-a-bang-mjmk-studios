const coinSFX = () => {
  const coin = new Audio("./sfx/smb_coin.wav");
  coin.volume = 0.5;
  coin.play();
};

const delayUrlLoad = (url, ms) => {
  coinSFX();
  setTimeout(function () {
    window.location.href = url;
  }, ms);
};

$("body").hide();

$(document).ready(function () {
  $("body").fadeIn(2000, function () {
    $("body").show();
  });
});

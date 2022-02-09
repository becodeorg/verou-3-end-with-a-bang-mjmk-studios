const songList = [
  {
    img: "images/vidar-nordli-mathisen-CTlRgg7Gfmw-unsplash.jpg",
    name: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    music: "music/happy-song-907.mp3",
  },
  {
    img: "images/alexander-popov-hTv8aaPziOQ-unsplash.jpg",
    name: "Falling Down",
    artist: "Wid Cards",
    music: "music/happy-song-907.mp3",
  },
  {
    img: "images/ana-grave-gHcWaeldgtQ-unsplash.jpg",
    name: "Faded",
    artist: "Alan Walker",
    music: "music/watr-fluid-10149.mp3",
  },
  {
    img: "images/te-nguyen-Wt7XT1R6sjU-unsplash.jpg",
    name: "Rather Be",
    artist: "Clean Bandit",
    music: "music/the-introvert-michael-kobrin-10959.mp3",
  },
];

let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let prev_btn = document.querySelector(".prev-track");
let playPause_btn = document.querySelector(".playPause-track");
let next_btn = document.querySelector(".next-track");

const seek_slider = document.querySelector(".seek_slider");
seek_slider.addEventListener("change", seekTo);

const volume_slider = document.querySelector(".volume_slider");
volume_slider.addEventListener("change", setVolume);

let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const loadTrack = (track_index) => {
  clearInterval(updateTimer);
  reset();

  curr_track.src = songList[track_index].music;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + songList[track_index].img + ")";
  track_name.textContent = songList[track_index].name;
  track_artist.textContent = songList[track_index].artist;
  now_playing.textContent =
    "Playing music " + (track_index + 1) + " of " + songList.length;

  updateTimer = setInterval(setUpdate, 1000);

  curr_track.addEventListener("ended", nextTrack);
};
loadTrack(track_index);

function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

const randomTrack = () => {
  isRandom ? pauseRandom() : playRandom();
};
const randomSong = document.querySelector(".random-track");
randomSong.addEventListener("click", randomTrack);

const playRandom = () => {
  isRandom = true;
  randomIcon.classList.add("randomActive");
};
const pauseRandom = () => {
  isRandom = false;
  randomIcon.classList.remove("randomActive");
};
const repeatTrack = () => {
  let current_index = track_index;
  loadTrack(current_index);
  playTrack();
};
const repeatSong = document.querySelector(".repeat-track");
repeatSong.addEventListener("click", repeatTrack);

const playPauseTrack = () => {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
};
playPause_btn.addEventListener("click", playPauseTrack);

const playTrack = () => {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add("rotate");
  wave.classList.add("loader");
  playPause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
};
const pauseTrack = () => {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove("rotate");
  wave.classList.remove("loader");
  playPause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
};

function nextTrack() {
  if (track_index < songList.length - 1 && isRandom === false) {
    track_index += 1;
  } else if (track_index < songList.length - 1 && isRandom === true) {
    let random_index = Number.parseInt(Math.random() * songList.length);
    track_index = random_index;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}
next_btn.addEventListener("click", nextTrack);

function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = songList.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}
prev_btn.addEventListener("click", prevTrack);

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}
function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}
function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationMinutes;
  }
}

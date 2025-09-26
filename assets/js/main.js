// Modal
window.onload = () => {
  $("#onload").modal("show");
};

// Countdown
let endDateElm = "12 Februari 2024 00:00 AM";
let countDownItem = Array.from(document.querySelectorAll(".count_down"));

function countDown() {
  let endDate = new Date(endDateElm);
  let newDate = new Date();
  let dateDiff = (endDate - newDate) / 1000;
  if (dateDiff > 0) {
    let day = Math.floor(dateDiff / 3600 / 24);
    let hour = Math.floor(dateDiff / 3600) % 24;
    let min = Math.floor(dateDiff / 60) % 60;
    let sec = Math.floor(dateDiff % 60);
    countDownItem[0].textContent = day;
    countDownItem[1].textContent = hour;
    countDownItem[2].textContent = min;
    countDownItem[3].textContent = sec;
  } else {
    clearInterval(stop);
  }
}
let stop = setInterval(() => {
  countDown();
}, 1000);

// Music
let myAudio = document.getElementById("myAudio");
let isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
}

myAudio.onplaying = function () {
  isPlaying = true;
};
myAudio.onpause = function () {
  isPlaying = false;
};

// Button
var track = document.getElementById("myAudio");

var controlBtn = document.getElementById("play-pause");

function playPause() {
  if (track.paused) {
    track.play();
    // controlBtn.textContent = "Pause";
    controlBtn.className = "pause";
  } else {
    track.pause();
    // controlBtn.textContent = "Play";
    controlBtn.className = "play";
  }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function () {
  controlBtn.className = "play";
});

// Bank Number Copy Text
function myFunction() {
  // Get the text field
  let copyText = document.getElementById("myInput");
  let alert = document.getElementById("copyAlert");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  copyText = alert.innerHTML = "No Rekening berhasil disalin";
}

// Navlinks active
var navItems = document.querySelectorAll(".bottom-nav-link a i");

navItems.forEach(function (e, i) {
  e.addEventListener("click", function (e) {
    navItems.forEach(function (e2, i2) {
      e2.classList.remove("active");
    });
    this.classList.add("active");
  });
});

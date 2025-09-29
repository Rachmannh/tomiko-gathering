// Modal
window.onload = () => {
  $("#onload").modal("show");
};

// Countdown
// Target waktu acara
const targetDate = new Date("Oct 19, 2025 18:00:00 GMT+0700").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML =
      "<p>Acara sudah dimulai!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Update setiap detik
setInterval(updateCountdown, 1000);
updateCountdown();

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

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");
let popup = document.querySelector('.popup');
let close = document.querySelector('.close')

// Pause and play the video, and change the button text
function myFunction() {
//   if (video.paused) {
//     video.play();
//     btn.innerHTML = "Pause";
//   } else {
//     video.pause();
//     btn.innerHTML = "Play";
//   }
  popup.classList.add('active');
}

close.onclick = function() {
    popup.classList.remove('active');
}
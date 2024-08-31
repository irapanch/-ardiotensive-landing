document.querySelector("a").addEventListener("click", function () {
  var video = document.getElementById("myVideo");
  video.play();
});

function closeVideo() {
  var video = document.getElementById("myVideo");
  video.pause();
  video.style.display = "none";
  document.getElementById("closeButton").style.display = "none";
}

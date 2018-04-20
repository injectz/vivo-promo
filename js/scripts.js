
var popup = document.getElementById("video-popup");
var close = document.getElementById("close-popup");
var video = document.getElementById("video");
var open = document.getElementById("video-popup-open");

open.onclick = function() {
	popup.classList.remove('no-show');
}

close.onclick = function() {
	if(!video.paused)
		video.pause();
	popup.classList.add('no-show');
}

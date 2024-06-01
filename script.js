/* Edit this file */
// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const volume = player.querySelector('input[name="volume"]');
const playbackSpeed = player.querySelector('input[name="playbackRate"]');
const skipButtons = player.querySelectorAll('[data-skip]');
const backwardButton = player.querySelector('.backward');
const forwardButton = player.querySelector('.forward');

// Functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleVolume() {
  video.volume = volume.value;
}

function handlePlaybackSpeed() {
  video.playbackRate = playbackSpeed.value;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function backward() {
  video.currentTime -= 10;
}

function forward() {
  video.currentTime += 25;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
progress.addEventListener('click', scrub);
volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handlePlaybackSpeed);
skipButtons.forEach(button => button.addEventListener('click', skip));
backwardButton.addEventListener('click', backward);
forwardButton.addEventListener('click', forward);

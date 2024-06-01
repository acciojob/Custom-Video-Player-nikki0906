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
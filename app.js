function playSound(e) {
  const audio = document.querySelector(`audio[data-key=${e.code}]`);
  const key = document.querySelector(`.key[data-key=${e.code}]`);
  if (!audio) return; // stop the function from running if pressed key isn't attached to an audio element
  audio.currentTime = 0; // rewind audio to startpoint
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

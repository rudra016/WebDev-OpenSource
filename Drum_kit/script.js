function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function playSoundClick(key) {
  const value = key.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${value}"]`);
  if (audio) {
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', () => playSoundClick(key));
});

window.addEventListener('keydown', playSound);

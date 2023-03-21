const keys = document.querySelectorAll('.key');


const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.play();
  audio.currentTime = 0;
  key.classList.add('playing');
};

const removeClassName = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
  console.log(e);
};

keys.forEach((key) => key.addEventListener('transitionend', removeClassName));
window.addEventListener('keydown', playSound);


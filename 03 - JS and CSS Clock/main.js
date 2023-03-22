const handHour = document.querySelector('.hour-hand');
const handMin = document.querySelector('.minute-hand');
const handSec = document.querySelector('.second-hand');

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  handSec.style.transform = `rotate(${(seconds / 60) * 360 + 90}deg)`;
  handMin.style.transform = `rotate(${(minutes / 60) * 360 + 90}deg)`;
  handHour.style.transform = `rotate(${(hours / 12) * 360 + 90}deg)`;
};

setInterval(setDate, 1000);

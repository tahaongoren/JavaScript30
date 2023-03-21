const containers = document.querySelectorAll('.photo-container');

containers.forEach((container) => {
  container.addEventListener('click', () => {
    removeClass();
    container.classList.add('active');
  });
});

const removeClass = () => {
  containers.forEach((container) => {
    container.classList.remove('active');
  });
};

const image = document.querySelector('.rotate-on-click');
let rotated = false;

image.addEventListener('click', () => {
  if (!rotated) {
    image.style.transform = 'rotate(360deg)';
    rotated = true;
  }
});

const zoomImage = document.getElementById('zoom-image');

zoomImage.addEventListener('mouseover', () => {
  zoomImage.classList.add('zoomed');
});

zoomImage.addEventListener('mouseout', () => {
  zoomImage.classList.remove('zoomed');
});

zoomImage.addEventListener('click', () => {
  window.open(zoomImage.src, '_blank');
});

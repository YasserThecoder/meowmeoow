const petalContainer = document.querySelector('.petal-container');
const petalCount = 50; // Number of petals

for (let i = 0; i < petalCount; i++) {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
  petal.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall duration
  petal.style.animationDelay = Math.random() * 5 + 's'; // Random delay before falling
  petalContainer.appendChild(petal);
}

// Glitter effect when mouse moves
document.addEventListener('mousemove', (e) => {
  const glitter = document.createElement('div');
  glitter.classList.add('glitter');
  glitter.style.left = `${e.pageX}px`;
  glitter.style.top = `${e.pageY}px`;
  document.body.appendChild(glitter);
  setTimeout(() => {
    glitter.remove();
  }, 1500); // Remove glitter after animation
});

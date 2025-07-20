document.addEventListener('mousedown', () => window.close());
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.close();
  }
});

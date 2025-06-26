document.querySelectorAll('.before-after-slider').forEach(slider => {
  const range = slider.querySelector('input[type="range"]');
  const after = slider.querySelector('.after');
  range.addEventListener('input', e => {
    const pct = e.target.value;
    after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
  });
});

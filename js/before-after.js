/**
 * Clean and Stuff - Before & After Comparison Slider
 */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.ba-slider-box');
  const afterWrapper = document.querySelector('.ba-image-after-wrapper');
  const handle = document.querySelector('.ba-handle');
  const afterImg = afterWrapper ? afterWrapper.querySelector('.ba-image') : null;

  if (!container || !afterWrapper || !handle || !afterImg) return;

  let isDragging = false;

  function updateSliderWidth() {
    const containerWidth = container.offsetWidth;
    afterImg.style.width = `${containerWidth}px`;
    afterImg.style.maxWidth = `${containerWidth}px`;
  }

  function setSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let posX = x - rect.left;

    // Bounds limit 5% to 95%
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;

    const percentage = (posX / rect.width) * 100;
    afterWrapper.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPosition(clientX);
  }

  function onPointerStart(e) {
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPosition(clientX);
  }

  function onPointerEnd() {
    isDragging = false;
  }

  // Mouse & Touch events
  container.addEventListener('mousedown', onPointerStart);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerEnd);

  container.addEventListener('touchstart', onPointerStart, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerEnd);

  // Resize handler
  window.addEventListener('resize', updateSliderWidth);
  updateSliderWidth();
});

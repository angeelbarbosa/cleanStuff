/**
 * Clean and Stuff - Spaces We Clean Featured Portfolio Carousel
 * Handles center-aligned 3D/peek sliding, touch/mouse dragging, pagination dots, and arrow nav.
 */
document.addEventListener('DOMContentLoaded', () => {
  const stage = document.querySelector('.spaces-carousel-stage');
  const trackContainer = document.getElementById('spaces-track-container');
  const track = document.getElementById('spaces-track');
  const slides = document.querySelectorAll('.spaces-slide');
  const prevBtn = document.getElementById('spaces-prev-btn');
  const nextBtn = document.getElementById('spaces-next-btn');
  const dotsContainer = document.getElementById('spaces-dots-nav');
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.spaces-dot') : [];

  if (!stage || !track || !slides.length) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let autoPlayTimer = null;

  function updateCarousel(instant = false) {
    if (!trackContainer || !slides[currentIndex]) return;

    // Calculate center offset for the active slide
    const containerWidth = trackContainer.offsetWidth;
    const activeSlide = slides[currentIndex];
    const slideWidth = activeSlide.offsetWidth;
    const slideLeft = activeSlide.offsetLeft;

    // Center active slide: offset = (containerWidth / 2) - (slideLeft + slideWidth / 2)
    const targetOffset = (containerWidth / 2) - (slideLeft + (slideWidth / 2));
    currentTranslate = targetOffset;
    prevTranslate = targetOffset;

    track.style.transition = instant ? 'none' : 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    track.style.transform = `translateX(${targetOffset}px)`;

    // Update active class on slides
    slides.forEach((slide, idx) => {
      if (idx === currentIndex) {
        slide.classList.add('active');
        slide.setAttribute('aria-hidden', 'false');
      } else {
        slide.classList.remove('active');
        slide.setAttribute('aria-hidden', 'true');
      }
    });

    // Update dots
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function goToSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    updateCarousel();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Event Listeners for Nav Buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      resetAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      resetAutoplay();
    });
  }

  // Dot clicks
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToSlide(idx);
      resetAutoplay();
    });
  });

  // Slide clicks (clicking a peeked slide centers it)
  slides.forEach((slide, idx) => {
    slide.addEventListener('click', () => {
      if (idx !== currentIndex) {
        goToSlide(idx);
        resetAutoplay();
      }
    });
  });

  // Touch and Mouse Dragging
  function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  }

  function touchStart(e) {
    isDragging = true;
    startX = getPositionX(e);
    track.style.transition = 'none';
    clearInterval(autoPlayTimer);
  }

  function touchMove(e) {
    if (!isDragging) return;
    const currentX = getPositionX(e);
    const diff = currentX - startX;
    track.style.transform = `translateX(${prevTranslate + diff}px)`;
  }

  function touchEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    const currentX = e.type.includes('mouse') ? e.pageX : (e.changedTouches ? e.changedTouches[0].clientX : startX);
    const diff = currentX - startX;

    if (diff < -50) {
      nextSlide();
    } else if (diff > 50) {
      prevSlide();
    } else {
      updateCarousel();
    }
    resetAutoplay();
  }

  trackContainer.addEventListener('mousedown', touchStart);
  window.addEventListener('mousemove', touchMove);
  window.addEventListener('mouseup', touchEnd);

  trackContainer.addEventListener('touchstart', touchStart, { passive: true });
  trackContainer.addEventListener('touchmove', touchMove, { passive: true });
  trackContainer.addEventListener('touchend', touchEnd);

  // Keyboard navigation
  trackContainer.setAttribute('tabindex', '0');
  trackContainer.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      resetAutoplay();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      resetAutoplay();
    }
  });

  // Autoplay (3.5 seconds timing between each image)
  function startAutoplay() {
    autoPlayTimer = setInterval(nextSlide, 3500);
  }

  function resetAutoplay() {
    clearInterval(autoPlayTimer);
    startAutoplay();
  }

  stage.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
  stage.addEventListener('mouseleave', () => startAutoplay());

  // Window Resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateCarousel(true);
    }, 100);
  });

  // Initial calculation after images load
  updateCarousel(true);
  startAutoplay();
  window.addEventListener('load', () => updateCarousel(true));
});

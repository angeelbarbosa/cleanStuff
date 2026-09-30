/**
 * Clean and Stuff - Main Application Script
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Menu Toggle & Seamless Smooth Scrolling
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-menu');

  const closeMenu = () => {
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      if (mobileToggleBtn) {
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      }
    }
  };

  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      const expanded = navMenu.classList.contains('open');
      mobileToggleBtn.setAttribute('aria-expanded', expanded);
    });

    // Close menu when tapping outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggleBtn.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // Smooth scroll handler for all internal anchor links (nav links, buttons, mobile bottom bar)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        closeMenu();

        const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight - 12;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 2. Interactive Sub-Service Pills Switcher
  const subPills = document.querySelectorAll('.service-sub-pill');
  subPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const parentCard = pill.closest('.service-clean-card');
      if (!parentCard) return;

      const targetId = pill.dataset.target;
      const targetPanel = parentCard.querySelector(`#${targetId}`);

      // Deactivate siblings in this card
      parentCard.querySelectorAll('.service-sub-pill').forEach(p => p.classList.remove('active'));
      parentCard.querySelectorAll('.sub-service-content').forEach(c => c.classList.remove('active'));

      // Activate selected
      pill.classList.add('active');
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 2b. Expandable Full Checklist Drawers
  const checklistBtns = document.querySelectorAll('.checklist-toggle-btn');
  checklistBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('.sub-service-content') || btn.closest('.service-clean-card');
      if (!panel) return;

      const drawer = panel.querySelector('.checklist-drawer');
      if (drawer) {
        drawer.classList.toggle('open');
        const isOpen = drawer.classList.contains('open');
        const spanText = btn.querySelector('span');
        if (spanText) {
          const originalText = spanText.getAttribute('data-orig') || spanText.textContent;
          if (!spanText.getAttribute('data-orig')) {
            spanText.setAttribute('data-orig', originalText);
          }
          spanText.textContent = isOpen ? 'Hide Checklist' : originalText;
        }
        const svg = btn.querySelector('svg');
        if (svg) {
          svg.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      }
    });
  });

  // 2c. Interactive Why-Us Hotspot Detail Switcher
  const hotspotBtns = document.querySelectorAll('.why-hotspot-btn');
  const hotspotText = document.getElementById('why-hotspot-text');
  hotspotBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      hotspotBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (hotspotText) {
        const lang = localStorage.getItem('clean_stuff_lang') || 'en';
        const key = btn.dataset.detailKey;
        if (key && typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
          hotspotText.textContent = translations[lang][key];
        } else if (btn.dataset.detail) {
          hotspotText.textContent = btn.dataset.detail;
        }
      }
    });
  });

  // 2d. Mobile Slider Dot Synchronization
  const whySubSlider = document.getElementById('why-sub-slider');
  const sliderDots = document.querySelectorAll('#why-slider-dots .slider-dot');
  if (whySubSlider && sliderDots.length > 0) {
    whySubSlider.addEventListener('scroll', () => {
      const scrollLeft = whySubSlider.scrollLeft;
      const cardWidth = whySubSlider.querySelector('.bento-small-card')?.offsetWidth || 280;
      const activeIdx = Math.round(scrollLeft / (cardWidth + 16));
      sliderDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIdx);
      });
    }, { passive: true });

    sliderDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        const cards = whySubSlider.querySelectorAll('.bento-small-card');
        if (cards[idx]) {
          cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
      });
    });
  }

  // 2e. Mobile Services Slider Dot Synchronization
  const servicesSlider = document.getElementById('services-slider');
  const servicesSliderDots = document.querySelectorAll('#services-slider-dots .slider-dot');
  if (servicesSlider && servicesSliderDots.length > 0) {
    servicesSlider.addEventListener('scroll', () => {
      const scrollLeft = servicesSlider.scrollLeft;
      const cardWidth = servicesSlider.querySelector('.service-clean-card')?.offsetWidth || 300;
      const activeIdx = Math.round(scrollLeft / (cardWidth + 16));
      servicesSliderDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIdx);
      });
    }, { passive: true });

    servicesSliderDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        const cards = servicesSlider.querySelectorAll('.service-clean-card');
        if (cards[idx]) {
          cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
      });
    });
  }

  // 2f. Mobile Reviews Slider Dot Synchronization
  const reviewsSlider = document.getElementById('reviews-slider');
  const reviewsSliderDots = document.querySelectorAll('#reviews-slider-dots .slider-dot');
  if (reviewsSlider && reviewsSliderDots.length > 0) {
    reviewsSlider.addEventListener('scroll', () => {
      const scrollLeft = reviewsSlider.scrollLeft;
      const cardWidth = reviewsSlider.querySelector('.review-card')?.offsetWidth || 300;
      const activeIdx = Math.round(scrollLeft / (cardWidth + 16));
      reviewsSliderDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIdx);
      });
    }, { passive: true });

    reviewsSliderDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        const cards = reviewsSlider.querySelectorAll('.review-card');
        if (cards[idx]) {
          cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
      });
    });
  }

  // 2g. Custom Plan Frequency Tabs Interaction
  const planFreqTabs = document.querySelectorAll('.plan-freq-tab');
  planFreqTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      planFreqTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // 3. FAQ Accordion & Live Search
  const faqItems = document.querySelectorAll('.faq-item');
  const faqSearchInput = document.getElementById('faq-search-input');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // Close all others
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();

      faqItems.forEach(item => {
        const questionText = item.querySelector('.faq-question-btn')?.textContent.toLowerCase() || '';
        const answerText = item.querySelector('.faq-answer')?.textContent.toLowerCase() || '';

        if (questionText.includes(term) || answerText.includes(term)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // 4. Contact Form Handling (Direct SMS Text Dispatch -> 512-351-6477)
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect form values
      const name = document.getElementById('form-name')?.value.trim() || 'New Client';
      const phone = document.getElementById('form-phone')?.value.trim() || 'Not provided';
      const service = document.getElementById('form-service')?.value.trim() || 'Cleaning Service';
      const property = document.getElementById('form-property')?.value.trim() || 'Not specified';
      const notes = document.getElementById('form-notes')?.value.trim() || 'None';

      const smsBody = `Hi Clean and Stuff! I'd like a free estimate:\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Service: ${service}\n` +
        `• Location / Sq Ft: ${property}\n` +
        `• Notes: ${notes}`;

      // Cross-platform SMS URL format (iOS, Android, macOS Messages)
      const smsUrl = `sms:5123516477?&body=${encodeURIComponent(smsBody)}`;

      // Display friendly message banner
      formSuccess.style.display = 'flex';
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Automatically launch messaging app
      try {
        window.location.href = smsUrl;
      } catch (err) {
        console.log('Opened SMS link:', smsUrl);
      }

      // Reset form fields
      contactForm.reset();
    });
  }

  // 5. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('active'));
  }

  // 6. Navigation Active State on Scroll (ScrollSpy)
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  });
});

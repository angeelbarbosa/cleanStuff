/**
 * Clean and Stuff - Main Application Script
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Menu Toggle
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');

  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const expanded = navMenu.classList.contains('open');
      mobileToggleBtn.setAttribute('aria-expanded', expanded);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Services Hub Category Tabs
  const tabButtons = document.querySelectorAll('.services-nav-tabs .tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
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

  // 4. Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect form values
      const name = document.getElementById('form-name')?.value || '';
      const phone = document.getElementById('form-phone')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const service = document.getElementById('form-service')?.value || '';
      const property = document.getElementById('form-property')?.value || '';
      const notes = document.getElementById('form-notes')?.value || '';

      // Display immediate friendly confirmation
      formSuccess.style.display = 'block';
      contactForm.reset();

      // Smooth scroll to confirmation
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Create SMS prompt option
      console.log('Estimate Request Received:', { name, phone, email, service, property, notes });
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

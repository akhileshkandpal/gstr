// Activate feather icons
document.addEventListener('DOMContentLoaded', () => {
  feather.replace();

  // Mobile navigation toggle
  const mobileBtn = document.getElementById('mobile-menu');
  const mobileNav = document.getElementById('mobile-nav');
  mobileBtn.addEventListener('click', () => mobileNav.classList.toggle('hidden'));
  document.querySelectorAll('#mobile-nav .nav-link').forEach(link => link.addEventListener('click', () => mobileNav.classList.add('hidden')));

  // Active section highlight
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const id = entry.target.getAttribute('id');
        document.querySelectorAll(`nav a[href="#${id}"]`).forEach(el => el.classList.add('active'));
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });
  sections.forEach(sec => observer.observe(sec));

  // Scroll reveal
  const faders = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); fadeObserver.unobserve(e.target); } });
  }, { threshold: 0.2 });
  faders.forEach(f => fadeObserver.observe(f));

  // Back to top button
  const backTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) backTop.style.display = 'block'; else backTop.style.display = 'none';
  });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Pricing toggle
  const toggle = document.getElementById('price-toggle');
  const prices = document.querySelectorAll('.price');
  if (toggle) {
    toggle.addEventListener('change', () => {
      prices.forEach(p => {
        p.textContent = toggle.checked ? p.dataset.annual : p.dataset.month;
      });
    });
  }

  // Contact form
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) return;
      const data = new FormData(form);
      const result = document.getElementById('form-result');
      try {
        const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
        result.textContent = res.ok ? 'Thanks! I will get back soon.' : 'There was an issue. Please use WhatsApp.';
      } catch (err) {
        result.textContent = 'There was an issue. Please use WhatsApp.';
      }
      const name = data.get('name') || '';
      const service = data.get('service') || '';
      const waLink = document.getElementById('wa-link');
      waLink.href = `https://wa.me/919654114541?text=Hi%20Akhilesh,%20I%20am%20${encodeURIComponent(name)}%20and%20need%20help%20with%20${encodeURIComponent(service)}`;
      document.getElementById('wa-container').classList.remove('hidden');
      form.reset();
    });
  }

  // Modals
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.modal).classList.remove('hidden');
    });
  });
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.modal').classList.add('hidden'));
  });
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.add('hidden'); });
  });

  // WhatsApp click tracking
  document.querySelectorAll('[data-wa]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (typeof gtag === 'function') gtag('event', 'whatsapp', { event_category: 'engagement' });
    });
  });

  // Year update
  document.getElementById('year').textContent = new Date().getFullYear();
});

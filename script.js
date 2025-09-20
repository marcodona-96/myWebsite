// script.js - simple interactivity
document.addEventListener('DOMContentLoaded', () => {
  // set current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle for small screens
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // contact form handling (example: replace URL with your Formspree endpoint)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Invio in corso...';

    const data = new FormData(form);
    // Replace below URL with your form endpoint (Formspree, Netlify forms, etc.)
    const endpoint = 'https://formspree.io/f/YOUR_FORM_ID';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        status.textContent = 'Grazie! Messaggio inviato.';
      } else {
        const result = await res.json();
        status.textContent = result.error || 'Si è verificato un errore. Prova via email.';
      }
    } catch (err) {
      status.textContent = 'Errore di rete. Prova via email: your@email';
    }
  });
});

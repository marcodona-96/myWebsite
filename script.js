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

  // contact form handling with Formsubmit
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Invio in corso...';

    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/donamarco15@gmail.com", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (res.ok) {
        form.reset();
        status.textContent = 'Grazie! Messaggio inviato ✅';
      } else {
        status.textContent = 'Si è verificato un errore. Prova di nuovo.';
      }
    } catch (err) {
      status.textContent = 'Errore di rete. Prova via email: donamarco15@gmail.com';
    }
  });
});

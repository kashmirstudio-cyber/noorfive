{
  // Mobile menu
  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Current year in footer
  for (const el of document.querySelectorAll('.year')) el.textContent = new Date().getFullYear();

  // Contact form: opens the visitor's email app with the message filled in
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const name = (d.get('name') || '').toString().trim();
      const email = (d.get('email') || '').toString().trim();
      const topic = (d.get('topic') || '').toString();
      const msg = (d.get('message') || '').toString().trim();
      const out = document.getElementById('form-msg');
      if (!name || !email || !msg) {
        out.textContent = 'Please fill in your name, email and message.';
        return;
      }
      const subject = encodeURIComponent('[Noor 5] ' + topic + ' from ' + name);
      const body = encodeURIComponent(msg + '\n\n— ' + name + ' (' + email + ')');
      window.location.href = 'mailto:noornoorfive@gmail.com?subject=' + subject + '&body=' + body;
      out.textContent = 'Your email app should open with the message ready to send. If it does not, email us directly at noornoorfive@gmail.com.';
    });
  }
}

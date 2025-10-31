// ===== Scroll suave do menu =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os botões e links que vão ter o efeito
  const botoes = document.querySelectorAll('button, .btn, nav a, navlink');

  botoes.forEach(botao => {
    // Transição suave para o efeito
    botao.style.transition = 'transform 0.5s ease, box-shadow 0.4s ease';

    // Quando o mouse entra
    botao.addEventListener('mouseenter', () => {
      botao.style.transform = 'scale(1.2)'; // aumenta mais
      botao.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.25)'; // sombra suave
    });

    // Quando o mouse sai
    botao.addEventListener('mouseleave', () => {
      botao.style.transform = 'scale(1)';
      botao.style.boxShadow = 'none';
    });
  });
});
// ===== Modal =====
function openModal(title, body) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').textContent = body;
  const m = document.getElementById('modal');
  m.classList.add('open');
  m.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const m = document.getElementById('modal');
  m.classList.remove('open');
  m.setAttribute('aria-hidden', 'true');
}

// ===== Formulário de contato =====
function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const msg = document.getElementById('msg').value.trim();
  const subject = encodeURIComponent('Contato do portfólio — ' + name);
  const body = encodeURIComponent(msg + '\n\n--\nEnviado pelo portfólio');
  window.location.href = 'mailto:leo.oliveira01@fatec.sp.gov.br?subject=' + subject + '&body=' + body;
}

// ===== Alternar tema =====
const themeToggle = document.getElementById('themeToggle');
function applyTheme(t) {
  if (t === 'light') {
    document.documentElement.style.setProperty('--bg', '#f6f9fc');
    document.documentElement.style.setProperty('--card', '#ffffff');
    document.documentElement.style.setProperty('--muted', '#55606a');
    document.documentElement.style.setProperty('--accent', '#6b21a8');
  } else {
    document.documentElement.style.setProperty('--bg', '#0f1724');
    document.documentElement.style.setProperty('--card', '#0b1220');
    document.documentElement.style.setProperty('--muted', '#9aa6b2');
    document.documentElement.style.setProperty('--accent', '#7c3aed');
  }
  localStorage.setItem('theme', t);
}
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = localStorage.getItem('theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}
(function () {
  const saved = localStorage.getItem('theme');
  if (saved) applyTheme(saved);
})();

// ===================== ANIMAÇÕES =====================

// 1️⃣ Fade-in mais animado
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.intro, .section, .proj, .contact-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px) scale(0.95)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0) scale(1)';
    }, 200 + (i * 150)); // efeito em cascata
  });
});

// 2️⃣ Botões com hover mais exagerado e animado
document.querySelectorAll('.btn').forEach(btn => {
  btn.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.15)';
    btn.style.boxShadow = '0px 8px 20px rgba(124, 58, 237, 0.6)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
    btn.style.boxShadow = 'none';
  });
});

// 3️⃣ Efeito máquina de escrever mais estiloso
const titleEl = document.querySelector('h1');
if (titleEl) {
  const text = titleEl.textContent;
  titleEl.textContent = '';
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      titleEl.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 70); // mais rápido
    } else {
      // brilha quando termina
      titleEl.style.transition = 'text-shadow 0.5s ease';
      titleEl.style.textShadow = '0 0 10px var(--accent), 0 0 20px var(--accent)';
      setTimeout(() => titleEl.style.textShadow = 'none', 800);
    }
  }
  typeWriter();
}
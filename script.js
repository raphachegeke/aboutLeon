const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const copyButton = document.getElementById('copyUid');
const toast = document.getElementById('toast');

copyButton.addEventListener('click', async () => {
  const uid = document.getElementById('pubgUid').textContent.trim();
  try {
    await navigator.clipboard.writeText(uid);
    toast.textContent = 'PUBG UID copied!';
  } catch {
    const temp = document.createElement('textarea');
    temp.value = uid;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    temp.remove();
    toast.textContent = 'PUBG UID copied!';
  }
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2200);
});

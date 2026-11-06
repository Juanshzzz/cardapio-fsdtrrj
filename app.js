// Cardigital SH — Runtime estático v1.0.0
document.addEventListener('DOMContentLoaded', () => {
  const links = Array.from(document.querySelectorAll('.cat-link'));
  links.forEach((link) => {
    link.addEventListener('click', () => {
      links.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

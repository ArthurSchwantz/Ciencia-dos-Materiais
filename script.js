document.addEventListener('DOMContentLoaded', () => {
  const links = [...document.querySelectorAll('.nav a')];

  const updateActiveLink = () => {
    const sections = links
      .map((link) => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    let currentId = sections[0]?.id;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentId = section.id;
        break;
      }
    }

    links.forEach((link) => {
      const active = link.getAttribute('href') === `#${currentId}`;
      link.style.color = active ? '#e5edf8' : '#9db0d1';
      link.style.background = active ? 'rgba(148, 163, 184, 0.08)' : 'transparent';
    });
  };

  updateActiveLink();
  window.addEventListener('scroll', updateActiveLink, { passive: true });
});

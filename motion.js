(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const panel = document.querySelector('.hero-panel');
  const focusTiles = [...(panel?.querySelectorAll('.focus') ?? [])];
  const descriptions = [
    'SCCM/MECM-to-Intune migration: planning, design, deployment, testing, and monitoring, with cloud-native policy and compliance management.',
    'Zero-touch Windows deployment with consistent profiles, policies, and a smooth first-day experience.',
    'Governed browser policies that balance enterprise security, compatibility, and productive work.',
    'Practical automation and reporting that turn endpoint data into clear, actionable insight.'
  ];

  let detail;
  if (panel && focusTiles.length) {
    detail = document.createElement('div');
    detail.className = 'panel-detail';
    detail.setAttribute('aria-live', 'polite');
    detail.innerHTML = '<span>01 — MICROSOFT INTUNE</span><p></p>';
    detail.querySelector('p').textContent = descriptions[0];
    panel.querySelector('.panel-bottom')?.before(detail);
    const panelBottom = panel.querySelector('.panel-bottom');
    if (panelBottom) panelBottom.textContent = 'SELECT A FOCUS AREA TO EXPLORE';

    const activate = (tile, index) => {
      focusTiles.forEach((item) => {
        const selected = item === tile;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      const code = tile.querySelector('.tile-code')?.textContent?.trim() ?? '';
      const title = tile.querySelector('strong')?.textContent?.replace(/\s+/g, ' ').trim() ?? '';
      detail.classList.add('is-changing');
      window.setTimeout(() => {
        detail.querySelector('span').textContent = `${code} — ${title.toUpperCase()}`;
        detail.querySelector('p').textContent = descriptions[index];
        detail.classList.remove('is-changing');
      }, reducedMotion ? 0 : 140);
    };

    focusTiles.forEach((tile, index) => {
      tile.setAttribute('role', 'button');
      tile.setAttribute('tabindex', '0');
      tile.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
      tile.classList.toggle('is-active', index === 0);
      tile.addEventListener('click', () => activate(tile, index));
      tile.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        activate(tile, index);
      });
    });
  }

  if (!reducedMotion && panel && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    panel.addEventListener('pointermove', (event) => {
      const bounds = panel.getBoundingClientRect();
      const rotateY = ((event.clientX - bounds.left) / bounds.width - .5) * 4;
      const rotateX = ((event.clientY - bounds.top) / bounds.height - .5) * -4;
      panel.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    panel.addEventListener('pointerleave', () => { panel.style.transform = ''; });
  }

  if (reducedMotion) return;
  document.body.classList.add('motion-ready');
  const groups = [
    ['.section-heading', 'from-left'], ['.expert-card', ''], ['.job-meta', 'from-right'], ['.responsibility-group', ''], ['.migration-focus', ''],
    ['.cert', ''], ['.fundamentals', 'from-left'], ['.education', 'from-right'],
    ['.contact', ''], ['footer', '']
  ];

  groups.forEach(([selector, direction]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add('reveal');
      if (direction) element.classList.add(direction);
      element.style.setProperty('--delay', `${Math.min(index % 4, 3) * 90}ms`);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  }, { threshold: .14, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
})();

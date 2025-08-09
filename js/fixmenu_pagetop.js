document.addEventListener('DOMContentLoaded', () => {
  const offsetTop = 350;
  const hysteresis = 50; // 元コードの(350 - 50)の差

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > offsetTop) {
      document.body.classList.add('is-fixed-pagetop');
    } else if (scrollTop < offsetTop - hysteresis) {
      document.body.classList.remove('is-fixed-pagetop');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const offsetTop = 1650;
  const hysteresis = 50;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > offsetTop) {
      document.body.classList.add('is-fixed-request');
    } else if (scrollTop < offsetTop - hysteresis) {
      document.body.classList.remove('is-fixed-request');
    }
  });
});


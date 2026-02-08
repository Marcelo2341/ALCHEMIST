document.addEventListener('DOMContentLoaded', () => {
  // Мобильное меню
  const toggle = document.getElementById('navbar-toggle');
  const mobileMenu = document.getElementById('navbar-mobile');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    document.querySelectorAll('.navbar-mobile a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        toggle.classList.remove('active');
      });
    });
  }

  // Плавная прокрутка якорей
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Эффект скролла навбара
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Анимации появления
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
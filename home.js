document.getElementById('burger').addEventListener('click', function() {
  document.getElementById('mobileMenu').classList.toggle('active');
});

document.getElementById('closeMenu').addEventListener('click', function() {
  document.getElementById('mobileMenu').classList.remove('active');
});
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // When the page is scrolled down by at least half of the viewport height
      if (scrollY > viewportHeight / 2) {
          header.classList.add('slide-up');
      } else {
          header.classList.remove('slide-up');
      }
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
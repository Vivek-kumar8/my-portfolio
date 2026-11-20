// Portfolio filter: use the button's data-filter class, not its label text,
// so changing a project description cannot break filtering.
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('is-checked'));
    button.classList.add('is-checked');

    const filterValue = button.getAttribute('data-filter'); // "*", ".web", ".app" or ".graphic"
    portfolioItems.forEach(item => {
      if (filterValue === '*' || item.classList.contains(filterValue.slice(1))) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Mobile menu: the CSS shows nav only when it has the "active" class,
// but no script ever added it, so the menu could never open on mobile.
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('nav');
if (mobileToggle && nav) {
  mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}

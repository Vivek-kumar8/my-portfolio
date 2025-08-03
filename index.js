
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button style
      filterButtons.forEach(btn => btn.classList.remove('is-checked'));
      button.classList.add('is-checked');

      const filterValue = button.textContent.trim().toLowerCase(); // "Web Design", "App Development", etc.

      portfolioItems.forEach(item => {
        const categoryText = item.querySelector('.portfolio-overlay p')?.textContent.trim().toLowerCase();

        if (filterValue === 'all' || categoryText === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  
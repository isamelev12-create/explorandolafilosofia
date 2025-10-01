document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.rating');
    const rating = parseFloat(container.dataset.rating);
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let html = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        html += '★';
      } else if (i === fullStars + 1 && halfStar) {
        html += '⯨';
      } else {
        html += '☆';
      }
    }
    container.innerHTML = html;
  });
  
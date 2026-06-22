document.addEventListener('DOMContentLoaded', function () {
  const productModal = new bootstrap.Modal(document.getElementById('productModal'));
  const modalImage = document.getElementById('productModalImage');
  const modalTitle = document.getElementById('productModalTitle');
  const modalDescription = document.getElementById('productModalDescription');

  const productCards = Array.from(document.querySelectorAll('.card-pai .card, .card-destaque .card'));
  const uniqueCards = Array.from(new Set(productCards));

  uniqueCards.forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function () {
      const image = this.querySelector('img.card-img-top');
      const title = this.querySelector('.card-title');
      const description = this.querySelector('.card-text');

      modalImage.src = image ? image.src : '';
      modalTitle.textContent = title ? title.textContent : 'Produto';
      modalDescription.textContent = description ? description.textContent : '';

      productModal.show();
    });
  });

  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('productSearch');

  function searchCards(query) {
    const searchTerm = query.trim().toLowerCase();
    uniqueCards.forEach((card) => {
      const title = card.querySelector('.card-title');
      const description = card.querySelector('.card-text');
      const cardText = [title?.textContent, description?.textContent].filter(Boolean).join(' ').toLowerCase();
      card.style.display = !searchTerm || cardText.includes(searchTerm) ? '' : 'none';
    });
  }

  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      searchCards(searchInput.value);
    });

    searchInput.addEventListener('input', function () {
      searchCards(this.value);
    });
  }

  const destaqueTrack = document.querySelector('.destaque-track');
  const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');

  if (destaqueTrack && leftArrow && rightArrow) {
    const cardWidth = destaqueTrack.querySelector('.card') ? destaqueTrack.querySelector('.card').offsetWidth : 320;
    const gap = 16;
    const scrollAmount = cardWidth + gap;

    leftArrow.addEventListener('click', () => {
      destaqueTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
      destaqueTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
});
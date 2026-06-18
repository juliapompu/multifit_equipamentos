document.addEventListener('DOMContentLoaded', function () {
  const productModal = new bootstrap.Modal(document.getElementById('productModal'));
  const modalImage = document.getElementById('productModalImage');
  const modalTitle = document.getElementById('productModalTitle');
  const modalDescription = document.getElementById('productModalDescription');

  document.querySelectorAll('.card-pai .card > .card').forEach((card) => {
    card.addEventListener('click', function () {
      const image = this.querySelector('img.card-img-top');
      const title = this.querySelector('.card-title');
      const description = this.querySelector('.card-text');

      modalImage.src = image.src;
      modalTitle.textContent = title ? title.textContent : 'Produto';
      modalDescription.textContent = description ? description.textContent : '';

      productModal.show();
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const openModalButtons = document.querySelectorAll('.modal-btn-open');
  const closeModalButtons = document.querySelectorAll('.modal-btn-close');
  const backdrop = document.querySelector('.backdrop');

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      backdrop.classList.remove('is-hidden');
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      backdrop.classList.add('is-hidden');
    });
  });

  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
      backdrop.classList.add('is-hidden');
    }
  });
});

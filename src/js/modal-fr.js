(() => {
  const refs = {
    openModalBtnFR: document.querySelector('[data-modal-open-fr]'),
    closeModalBtnFR: document.querySelector('[data-modal-close-fr]'),
    modalFR: document.querySelector('[data-modal-fr]'),
  };

  refs.openModalBtnFR.addEventListener('click', toggleModal);
  refs.closeModalBtnFR.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalFR.classList.toggle('is-hidden');
  }
})();
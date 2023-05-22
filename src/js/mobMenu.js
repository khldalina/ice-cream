(() => {
  const refs = {
    openMobMenuBtn: document.querySelector('[data-mobMenu-open]'),
    closeMobMenuBtn: document.querySelector('[data-mobMenu-close]'),
    mobMenu: document.querySelector('[data-mobMenu]'),
  };

  refs.openMobMenuBtn.addEventListener('click', toggleMobMenu);
  refs.closeMobMenuBtn.addEventListener('click', toggleMobMenu);

  function toggleMobMenu() {
    refs.mobMenu.classList.toggle('is-hidden');
  }
})();
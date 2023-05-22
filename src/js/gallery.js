(() => {
  const refs = {
    closeSliderBtn: document.querySelector('[data-slider-close]'),
    gallerySlider: document.querySelector('[data-slider]'),
  };

  let slides = document.getElementsByClassName('open-slider');
  for (let slide of slides) {
    slide.addEventListener('click', toggleSlider);
  }

  refs.closeSliderBtn.addEventListener('click', toggleSlider);

  function toggleSlider() {
    document.body.classList.toggle('slider-open');
    refs.gallerySlider.classList.toggle('slider-hidden');
  }
})();

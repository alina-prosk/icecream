(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeAnchorLink: document.querySelector('[data-anchor-close]'),
    modal: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
  };
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closeAnchorLink.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-mob');
    refs.body.classList.toggle('no-scroll');
  }
})();

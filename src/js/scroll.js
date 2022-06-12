var link = $('hero__link');

link.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollBottom: 0 }, '300');
});

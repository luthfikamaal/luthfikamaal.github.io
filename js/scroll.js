$(document).ready(function () {
  $('.card-footer').addClass('bg-white');
  $(document).scroll(function () {
    var nav = $('.bg-main');
    var navbar = $('.navbar');
    var navTitle = $('.navbar-brand');
    var navLink = $('.nav-link');
    if ($(this).scrollTop() > nav.height() / 5) {
      navbar.addClass('bg-primary shadow-sm');
      navTitle.addClass('text-white');
      navLink.addClass('text-white');
    } else {
      navbar.removeClass('bg-primary shadow-sm');
      navTitle.removeClass('text-white');
      navLink.removeClass('text-white');
    }
  });
});

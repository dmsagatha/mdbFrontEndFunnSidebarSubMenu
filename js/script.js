$(document).ready(function () {
  var fixHeight = function () {
    $('.navbar-nav').css('max-height', document.documentElement.clientHeight - 150);
  };

  // Inicialmente
  fixHeight();

  // Cuando el usuario cambia de vertical a horizontal y viceversa
  $(window).resize(function () { 
    fixHeight();
  });
  
  // Cuando el usuario da clic en el Menu Mobile
  $('.navbar .navbar-toggler').on('click', function() {
    fixHeight();
  });

  $('.trigger').on('click', function() {
    $('.sideMenu').toggleClass('open');
  });
});
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

// Additional Scripts
$(function(){
  
  const $selection = $('div.selection');

  // Projects
  $marketing_projects = $('div.marketing-projects');
  $programming_projects = $('div.programming-projects').hide();
  $design_projects = $('div.design-projects').hide();

  $selection.click(function(){
    if($(this).hasClass('marketing-selection')) {
      $('*').removeClass('selection-active');
      $(this).addClass('selection-active');
      $marketing_projects.fadeIn();
      $programming_projects.hide();
      $design_projects.hide();
    }
    if($(this).hasClass('programming-selection')) {
      $('*').removeClass('selection-active');
      $(this).addClass('selection-active');
      $marketing_projects.hide();
      $programming_projects.fadeIn();
      $design_projects.hide();
    }
    if($(this).hasClass('design-selection')) {
      $('*').removeClass('selection-active');
      $(this).addClass('selection-active');
      $marketing_projects.hide();
      $programming_projects.hide();
      $design_projects.fadeIn();
    }
  });

  // Mobile Nav
  const $nav_toggler = $('button.navbar-toggler');
  const $nav_close = $('img.nav-close').hide();

  $nav_toggler.click(function(){
    $nav_close.toggle();
  });
  $nav_close.click(function(){
    $('div.navbar-collapse').removeClass('show');
    $nav_close.toggle();
  });
});
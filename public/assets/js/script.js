//Affix the navbar
$(function() {
  var navbar = $('#navbar');
  var miniLogo = $('#mini-logo');

  navbar.affix({
    offset: {
      top: $('#header-nav').offset().top,
    }
  });

  navbar.on('affixed.bs.affix', function(){
    miniLogo
      .removeClass('mini-logo')
      .addClass('mini-logo-show animate');
  });

  navbar.on('affixed-top.bs.affix', function(){
    miniLogo
      .removeClass('mini-logo-show animate')
      .addClass('mini-logo');
  });
});

//Smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  g  }
  });
});

/*function toggleNav(){
  var x = $(".nav");
    if (x.className === "nav") {
        x.className += " responsive-nav";
    } else {
        x.className = "nav";
    }
}*/

$('.nav-icon').on("click", function(){
  $('#header-nav').addClass("responsive-header-nav")
                  .removeClass("header-nav");
  $('.nav li').addClass('responsive-li click-listener');
  $('#navbar ul').addClass('responsive-ul');
  $('#navbar').addClass('responsive-nav');
  //$('body').addClass('responsive-overflow');
  $('#mini-logo').removeClass('mini-logo')
                 .addClass('mini-logo-show animate');

  $('.nav .responsive-li.click-listener a').on("click", function(){
    $('#header-nav').removeClass("responsive-header-nav")
                    .addClass('header-nav');
    $('.nav li').removeClass('responsive-li click-listener');
    $('#navbar ul').removeClass('responsive-ul');
    $('#navbar').removeClass('responsive-nav');
    //$('body').removeClass('responsive-overflow');
    $('#mini-logo').removeClass('mini-logo-show animate')
                   .addClass('mini-logo');
  });
});

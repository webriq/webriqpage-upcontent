$(function() {
  cbpBGSlideshow.init();

  var d = document, s = d.createElement('script');

  s.src = '//templateportfolio.disqus.com/embed.js';

  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);

});

$(document).ready(function(){

  // Add parallax effect to background image
  $('#cbp-bislideshow li').parallax("0%", 0.2);
    
  $('.olx-carousel').olxCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'

  });

})

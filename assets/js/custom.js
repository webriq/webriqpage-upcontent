$(function() {
  cbpBGSlideshow.init();

  var d = document, s = d.createElement('script');

  s.src = '//templateportfolio.disqus.com/embed.js';

  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);

});

$(document).ready(function(){

  $('.olx-carousel').olxCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10
  });

})

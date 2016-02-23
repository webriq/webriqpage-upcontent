$(function() {
  cbpBGSlideshow.init();

  $('.stats-bar').appear();
    $('.stats-bar').on('appear', function() {
    var fx = function fx() {
    $(".stat-number").each(function (i, el) {
        var data = parseInt(this.dataset.n, 10);
        var props = {
            "from": {
                "count": 0
            },
                "to": {
                "count": data
            }
        };
        $(props.from).animate(props.to, {
            duration: 1000 * 1,
            step: function (now, fx) {
                $(el).text(Math.ceil(now));
            },
            complete:function() {
                if (el.dataset.sym !== undefined) {
                  el.textContent = el.textContent.concat(el.dataset.sym)
                }
            }
        });
    });
    };
    
    var reset = function reset() {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() > 90) {
            $(this).off("scroll");
          fx()
        }
    };
    
    $(window).on("scroll", reset);
});

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

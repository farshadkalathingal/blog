/* Owl Carousal */

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  })
/** Smooth Scroll */
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
  });


  /** Navbar Scroll */
  $(function() {
    $(document).scroll(function() {
          var $nav = $("nav");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

/**Wow Animation */
$( ".wow" ).addClass( "zoomIn" );
var wow = new WOW(
{
boxClass:     'wow',      // animated element css class (default is wow)
animateClass: 'animated', // animation css class (default is animated)
offset:       0,          // distance to the element when triggering the animation (default is 0)
mobile:       true,       // trigger animations on mobile devices (default is true)
live:         true,       // act on asynchronously loaded content (default is true)
callback:     function(box) {
// the callback is fired every time an animation is started
// the argument that is passed in is the DOM node being animated
},
scrollContainer: null // optional scroll container selector, otherwise use window
}
);
wow.init();


/** Hero-section animatio */

$('.hero-image').mousemove(function(e){
  var moveX = (e.pageX * -1 / 15);
  var moveY = (e.pageY * -1 / 15);
  $(this).css('background-position', moveX + 'px ' + moveY + 'px ');
})

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
           $('.head').addClass('sticky');
        } else {
           $('.head').removeClass('sticky');
        }
    });
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
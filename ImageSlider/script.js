// Variables:
var nItems = 0;
var iCurrentSlide = 1;
var iNextSlide = 2;
var iSlideInterval = 3; // in seconds
var looper = null;

$(document).ready(function () {
  // Show the first slide and start the slide show:
  $('.carousel > #item1').show();
  startSlider();

  // Make the slide show stop on slide hover:
  $('.carousel > div').hover(
    function() {
      // onmouseover
      window.clearInterval(looper);
      document.getElementById('status-indicator').innerText = 'stopped';
    },
    function() {
      // onmouseout
      startSlider();
      document.getElementById('status-indicator').innerText = 'started';
    });

});


function startSlider() {
  nItems = $('.carousel > div').size();

  looper = setInterval(function() {
    if(iNextSlide > nItems) {
      iCurrentSlide = 1;
      iNextSlide = 1;
    }

    $('.carousel > div').hide();
    $('.carousel > #item' + iNextSlide).show();

    iCurrentSlide = iNextSlide;
    iNextSlide++;
  }, iSlideInterval * 1000);
}

function showSlide(isPrev) {
  window.clearInterval(looper);

  var iNewSlide = 0;

  if(isPrev) {
    // Show previous slide:
    iNewSlide = --iCurrentSlide;
  }
  else {
    // Show next slide:
    iNewSlide = ++iCurrentSlide;
  }

  if(iNewSlide > nItems)
    iNewSlide = 1;
  else if(iNewSlide < 1)
    iNewSlide = nItems;

  $('.carousel > div').hide();
  $('.carousel > #item' + iNewSlide).show();

  iCurrentSlide = iNewSlide;
  iNextSlide = iNewSlide + 1;

  startSlider();
}

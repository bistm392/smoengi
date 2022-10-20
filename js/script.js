$(function() {
  // Owl Carousel
  var owl = $(".home-demo .owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 31.75,
    loop: true,
    dots:false,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>'
    ],
    nav: true,
    responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2,
    },

    1024: {
      items: 3
    },

    1366: {
      items: 4
    }
  }
  });
});

$(function() {
  // Owl Carousel
  var owl = $(".bundle-slider .owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    dots:false,
  });
});

$(function() {
  // Owl Carousel
  var owl = $(".testimonils-demo .owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 31.75,
    loop: true,
    dots:false,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>'
    ],
    nav: true,
    responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2,
    },

    1024: {
      items: 3
    },

    1366: {
      items: 3
    }
  }
  });
});
$(function() {
  // Owl Carousel
  var owl = $(".testimonils-product-demo .owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 31.75,
    loop: true,
    dots:false,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>'
    ],
    nav: false,
    responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2,
    },

    1024: {
      items: 3
    },

    1366: {
      items: 3
    }
  }
  });
});
$('.thumbnail').on('click', function() {
  var clicked = $(this);
  var newSelection = clicked.data('big');
  var $img = $('.primary').css("background-image","url(" + newSelection + ")");
  clicked.parent().find('.thumbnail').removeClass('selected');
  clicked.addClass('selected');
  $('.primary').empty().append($img.hide().fadeIn('slow'));
});
$('.slider-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: false,
  speed: 1000,
  asNavFor: '.slider-thumb',
    arrows: true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
});
$('.slider-thumb').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  asNavFor: '.slider-content',
  dots: false,
  centerMode: false,
  focusOnSelect: true
});
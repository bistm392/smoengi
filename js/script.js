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

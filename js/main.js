

// header active

var header = document.getElementById("header");
var btns = header.getElementsByClassName("nav-link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", " ");
    this.className += " active";
  });
};
// search show hide for large

var form1 = document.querySelector('#large-sc form');
var formBtn1 = document.querySelector('.searchBtn1');

formBtn1.addEventListener('click', function () {
  form1.classList.add('see');
});

function removefunction1() {
  form1.classList.remove('see');
};

// search show hide for mobile

var form = document.querySelector('#mobile-search form');
var formBtn = document.querySelector('.searchBtn');

formBtn.addEventListener('click', function () {
  form.classList.add('see');
});

function removefunction() {
  form.classList.remove('see');
};

// side-menu js
var sideShow = document.querySelector('#side-show');
var sideMenu = document.querySelector('#side-menu');
var main = document.querySelector('#main');
var body = document.querySelector('body')

sideShow.addEventListener("click", function () {
  sideMenu.classList.add("side-menu-active");
  main.classList.add("main");
  body.style.position = "relative";
  body.style.overflow = "hidden";
});

var clear1 = document.querySelector('.clear1');

clear1.addEventListener('click', function () {
  sideMenu.classList.remove("side-menu-active");
  main.classList.remove("main");
  body.style.position = "relative";
  body.style.overflowY = "scroll";
});


(function ($) {

  // preloader

  $(window).on("load", function () {
    $("#preloader").css('display', "none");

  })

  // mobile sub menu

  $('.mobile-menu li .addSub1').click(function () {
    $('.mobile-menu .item1').toggleClass("show1");
    $('.mobile-menu li a .span1').toggleClass("rotate1");
  });
  $('.mobile-menu li .addSub2').click(function () {
    $('.mobile-menu .item2').toggleClass("show2");
    $('.mobile-menu li a .span2').toggleClass("rotate2");
  });
  $('.mobile-menu li .addSub3').click(function () {
    $('.mobile-menu .item3').toggleClass("show3");
    $('.mobile-menu li a .span3').toggleClass("rotate3");
  });

  // header dropdown sub-item

  $('.drop-menu #show-sub1').click(function () {
    $('.sub-item1').toggleClass("show");
  });
  $('.drop-menu #show-sub2').click(function () {
    $('.sub-item2').toggleClass("show");
  });


  // mibile menu
  $('#menu-btn').click(function () {
    $("#mobile-menu-bg").addClass('show-me');
    $('body').css("position", "relative");
    $('body').css("overflow", "hidden");
  });
  $('#hide-me').click(function () {
    $("#mobile-menu-bg").removeClass('show-me');
    $('body').css("overflow", "scroll");
  });


  // fixed nav
  $(window).scroll(function () {
    var navScroll = $(window).scrollTop();
    if (navScroll >= 80) {
      $("#header").addClass("nav-fixed");
    } else {
      $("#header").removeClass("nav-fixed");
    }
  });

  // head search
  $(window).scroll(function () {
    var navScroll = $(window).scrollTop();
    if (navScroll >= 80) {
      $("#form-change").addClass("change")
    } else {
      $("#form-change").removeClass("change");
    }
  });

  $(document).ready(function () {
    // counter slider
    $('.counter-slide').slick({
      prevArrow: '<div class="prevarrow arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>',
      nextArrow: '<div class="nextarrow arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>',
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false
        }
      }]

    });
    
    // counter
    $('.counter').counterUp();
  });

  // Banner Slider 
  function mainSlider() {
    var bannerSlider = $('.slider-active')
    bannerSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    bannerSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    bannerSlider.slick({
      autoplay: true,
      autoplaySpeed: 7000,
      dots: false,
      fade: true,
      prevArrow: '<div class="prevarrow arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>',
      nextArrow: '<div class="nextarrow arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>',
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $($this).data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    };

  }
  mainSlider();

  // venobox
  $(document).ready(function () {
    $('.venobox').venobox();
  });

  // blog slider
  $('.blog-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }

    ]
  });

  //   brand slider
  $('.brand-slide').slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows:false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // back to top btn script start
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    var topBtn = document.getElementById("b-to-t");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  // back to top script end

  // about.html page script

  $('.about-us-slide2').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    dots: true
  });

  $('.brand-slide2').slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows:false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // FAQ.html page......................................
  // accordion..................
  var item = document.getElementsByClassName("accordion-item");
  var acc = document.getElementsByClassName("accordion-q-btn");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("accActive");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";

      }
    });
  }

  // blog.html page sidebar
  // side-menu js
  $('.rightSidebar').theiaStickySidebar({
    'additionalMarginTop': 85
  });
  
}(jQuery));




// MENU HEADER JS
// window.onscroll = function() {onScroll()};

// var header = document.getElementById("header");
// var tops = header.offsetTop;

//  for sticky header
// function onScroll() {
//   if (window.pageYOffset > tops) {
// 	header.classList.add("sticky");
//   }
//   else {
// 	header.classList.remove("sticky");
//   }
// }

// //  resposive menu
//  function myFunction() {
//   var x = document.getElementById("menu");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }



//  To set video on about-us section
$('.aboutus-section a').fancybox({
  caption : function( instance, item ) {
    return $(this).find('img').html();
  }
});

$('.gallery-section a').fancybox({
  caption : function( instance, item ) {
    return $(this).find('img').html();
  }
});





$("#show-step-two").hide();
$("#show-step-three").hide();
$("#show-step-four").hide();
// Book Appointment
$("#step-one").on("click", function(){
  $(".book-desc").removeClass("active");
    $(this).parent().addClass("active");
    $("#show-step-one").show();
    $("#show-step-two").hide();
    $("#show-step-three").hide();
    $("#show-step-four").hide();
});
$("#step-two").on("click", function(){
    $(".book-desc").removeClass("active");
    $(this).parent().addClass("active");
    $("#show-step-two").show();
    $("#show-step-one").hide();
    $("#show-step-three").hide();
    $("#show-step-four").hide();
});
$("#step-three").on("click", function(){
  $(".book-desc").removeClass("active");
    $(this).parent().addClass("active");
    $("#show-step-three").show();
    $("#show-step-two").hide();
    $("#show-step-one").hide();
    $("#show-step-four").hide();
});
$("#step-four").on("click", function(){
  $(".book-desc").removeClass("active");
    $(this).parent().addClass("active");
    $("#show-step-four").show();
    $("#show-step-two").hide();
    $("#show-step-three").hide();
    $("#show-step-one").hide();
});

// Accordian of FAQs Page 
if ($(".accordion").length > 0 ) {
  $(function() {
      var $accordions = $(".accordion").accordion({
          collapsible: true,
          active: false,
          icons: false
      }).on('click', function() {
          $accordions.not(this).accordion('activate', false);
      });
  });
};

// // Testimonial Slider
var swiper = new Swiper(".myTestimonial", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    grabCursor: true,
    init: true,
    direction: 'horizontal',
    preloadImages: true,
    // slidesPerView: 'auto',

    pagination: {
      el: ".swiper-pagination.testimonial-pagination",
      clickable: true,
    },
});


// Partner Logo Slider
var swiper = new Swiper(".myPartner", {
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    spaceBetween: 20,
    grabCursor: true,
    init: true,
    direction: 'horizontal',
    preloadImages: true,

    // slidesPerView: 'auto',

    pagination: {
      el: ".swiper-pagination.partner-pagination",
      clickable: true,
    },
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

   // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      100: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // // when window width is >= 1024px
      1024: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    },
  });

new WOW().init();
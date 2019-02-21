// ========== slider ===========================
$('.slider').slick({
    dots: false ,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          dots: true ,
          arrows: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      }
      ]
  });

// ================ slider dots text ============
$(document).ready(function(){
   $('.slick-dots li:first-child').append('<span class="dots-title_slider">Pink shoes</span> <br> <span class="dots-utitle_slider">Now at $149.99</span>')
   $('.slick-dots li:nth-child(2)').append('<span class="dots-title_slider">Anna Field</span> <br> <span class="dots-utitle_slider">Limited Edition</span>')
   $('.slick-dots li:last-child').append('<span class="dots-title_slider">Prada</span> <br> <span class="dots-utitle_slider">Winter is Comming</span>')
})

$(window).on('resize',function(){
    if(($('.slick-dots li:first-child span').length) == 0) {
      $('.slick-dots li:first-child').append('<span class="dots-title_slider">Pink shoes</span> <br> <span class="dots-utitle_slider">Now at $149.99</span>')
      $('.slick-dots li:nth-child(2)').append('<span class="dots-title_slider">Anna Field</span> <br> <span class="dots-utitle_slider">Limited Edition</span>')
      $('.slick-dots li:last-child').append('<span class="dots-title_slider">Prada</span> <br> <span class="dots-utitle_slider">Winter is Comming</span>')
    }
})
// ============== slider end ====================
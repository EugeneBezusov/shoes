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
        breakpoint: 961,
        settings: {
          dots: true ,
          arrows: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 571,
        settings: {
          dots: false ,
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
var products = JSON.parse(prod),
    allproducts = [];





$(document).ready(function(){
   $('.slick-dots li:first-child').append('<span class="dots-title_slider">Pink shoes</span> <br> <span class="dots-utitle_slider">Now at $149.99</span>')
   $('.slick-dots li:nth-child(2)').append('<span class="dots-title_slider">Anna Field</span> <br> <span class="dots-utitle_slider">Limited Edition</span>')
   $('.slick-dots li:last-child').append('<span class="dots-title_slider">Prada</span> <br> <span class="dots-utitle_slider">Winter is Comming</span>')
})


// FILTERS
$('.fs-shopby__dropdown.filter-price').on('click', function() {
  var prices = [];
  var sortedProductByPrice = [];
  
   $('.product_block').each(function(val, i) {
     var temp = $(this).find('.product_price').text();
     prices.push(temp);
     allproducts.push($(this));
   })
    prices.sort();

   for(var i=0; i<prices.length; i++) {
     for(var j=0; j<allproducts.length; j++) {
      if(allproducts[j].find('.product_price').text() == prices[i]) {
        sortedProductByPrice.push(allproducts[j]);
        allproducts.splice(j, 1);
      }
     }
   }
    outputSortedProds(sortedProductByPrice);
})

$('.fs-productSection__sortby').on('click', function() {
  var names = [];
  var sortedProductByAlphabet= [];
   $('.product_block').each(function(val, i) {
     var temp = $(this).find('.fs-shoes__name').text();
     names.push(temp);
     allproducts.push($(this));
   })
   names.sort();
   
   for(var i=0; i<names.length; i++) {
     for(var j=0; j<allproducts.length; j++) {
      if(allproducts[j].find('.fs-shoes__name').text() == names[i]) {
        sortedProductByAlphabet.push(allproducts[j]);
        allproducts.splice(j, 1);
      }
     }
   }
   outputSortedProds(sortedProductByAlphabet);
})

function outputSortedProds(sortedProduct) {
  $('.fs-products').html('');
  sortedProduct.forEach(element => {
    $('.fs-products').append(element);
  })
}


$(window).on('resize',function(e){
    if(($('.slick-dots li:first-child span').length) == 0) {
      $('.slick-dots li:first-child').append('<span class="dots-title_slider">Pink shoes</span> <br> <span class="dots-utitle_slider">Now at $149.99</span>')
      $('.slick-dots li:nth-child(2)').append('<span class="dots-title_slider">Anna Field</span> <br> <span class="dots-utitle_slider">Limited Edition</span>')
      $('.slick-dots li:last-child').append('<span class="dots-title_slider">Prada</span> <br> <span class="dots-utitle_slider">Winter is Comming</span>')
    } 
    if(e.target.innerWidth >= 769){
        $(".menunew").hide()
    }
})
// ============== slider end ====================
$(".fs-navigation__drop").on("click",function(){
    $(".menunew").slideToggle(1000)
})

$(".sort_block").on("click",function(){
  $(this).addClass("gray_click")
  $(".fs-products").show();
  $(".fs-products-line").hide()
  $(".sort_line").removeClass("gray_click")
})

$(".sort_line").on("click",function(){
    $(this).addClass("gray_click")
    $(".sort_block").removeClass("gray_click")
    $(".fs-products").hide();
    $(".fs-products-line").show()
})



// =========

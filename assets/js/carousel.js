$(document).ready(function () {
  var currentIndex = 0;
  var productItems = $('.product');
  var totalProducts = productItems.length;
  var containerWidth = $('.carousel-container').width();

  $('.next').click(function () {
    currentIndex = (currentIndex + 1) % totalProducts;
    updateCarousel();
  });

  $('.prev').click(function () {
    currentIndex = (currentIndex - 1 + totalProducts) % totalProducts;
    updateCarousel();
  });

  function updateCarousel() {
    var offset = currentIndex * -containerWidth;
    $('.carousel-container').css('transform', 'translateX(' + offset + 'px)');
  }
});

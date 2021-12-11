var definitionList = $('dl');

definitionList.on('init', function(){
  $('.slick-current', this).addClass('flip');
})

definitionList.slick({
  centerMode: true,
  arrows: false,
  centerPadding: '20px',
  slidesToShow: 3,
  responsive: [{
      breakpoint: 950,
      settings: {
        slidesToShow: 1,
        centerPadding: '10px'
      }
  }]
});

definitionList.on('beforeChange',function(){
  $('.slick-slide', this).removeClass('flip')
});

definitionList.on('click', '.slick-current', function(){
  $(this).toggleClass('flip')
});
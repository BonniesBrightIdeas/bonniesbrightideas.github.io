//case study toggle
$('.toggle').click(function(){
  $(this).find('.toggleContainer').toggleClass('active');
  $(this).siblings('.toggle').find('.toggleContainer').removeClass('active');
});
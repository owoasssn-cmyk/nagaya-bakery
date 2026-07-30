$('.faq-ttl').click(function(){
  $(this).next('.faq-content').slideToggle();
  $(this).toggleClass('is-active');
});
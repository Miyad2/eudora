$(document).ready(function(){

    // init Isotope
    var $grid = $('.grid').isotope({
      // options
    });
    // filter items on button click
    $('.btn').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    
    // 000000000000000000000000000000000000000000000000
    
    // $(window).scroll(function(){
    //   if($(this).scrollTop() > 100 ){
    //     $('.section.popup.active').fadeIn();
    //   }
    //   else{
    //     $('.section.popup.active').fadeOut();
    //   };
    // });
    // $('.scroll-top').click(function(){
    //  $('html,body').animate({
    //    scrollTop:0
    //  },2000);
    // });



    // ==============================
    

    // $(document).ready(function(){
      $('[data-fancybox="gallery]').fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	2000, 
        'speedOut'		:	200, 
        'overlayShow'	:	true,
        
      });
    // })

    AOS.init();


    });
    
// =======================================

 const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const body = document.body;
const position = body.clientHeight / 10;

 window.addEventListener ('scroll' , () => {
  let scrollY=window.scrollY;
  let popupFlag = sessionStorage.getItem('open')

  if(!popupFlag && position < scrollY){
    popup.classList.add('open')
    sessionStorage.setItem('open', true)
}
if(popup.classList.contains('open')){
  body.style.overflowY = 'hidden'
} else {
  body.style.overflowY = 'auto'
}

 } );
 close.addEventListener('click', ()=>{
  popup.classList.remove('open')
  body.style.overflowY = 'auto'
})

    


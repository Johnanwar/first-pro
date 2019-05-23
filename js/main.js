/* global , $ , console */

$(function(){
      
  $(".header" ,".bxslider").height ($(window).height());
    
  $(window).resize( function () {
  $(".header").height ($(window).height());                  
                      });
	  $(".header" ).height ($(window).height());
    

    $(".nav-items li a").click( function(){
    $(this).addClass("activee").parent().siblings().find("a").removeClass("activee")
                             });
  
      $('.nav-items li a ').click(function (e){
           e.preventDefault();                     
       $("html , body").animate({ scrollTop:$("#" + $(this).data("value")).offset().top },1000)    
     }); 	
   					  
  /* MIX IT UP SLIDER */ 
	
var mixer = mixitup(container);
mixer.filter('.mobile');
var containerEl = document.querySelector('.container');
var mixer = mixitup(containerEl , {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }  });
	
/* MIX IT UP SLIDER  */

$("#porttfoilo ul li").click( function(){
	$(this).addClass("activeee").siblings().removeClass("activeee")});
	
		 $(".sccroll-top i").click (function() {
	$("html , body").animate({ scrollTop: 0	},1000)	  
		 });
	$(window).scroll( function () {	

		if ($(window). scrollTop () >= 1000){$(".sccroll-top i").fadeIn(400)}
		else ($(".sccroll-top i").fadeOut(400) )
	
	});

	
    /* nice scroll  */


	
    
});




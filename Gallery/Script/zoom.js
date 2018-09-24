$(".card-img-top img-thumbnail").mouseenter(function() 
       {
       
          $(this).css("cursor","pointer");
           $(this).animate({width: "50%", height: "50%"}, 'slow');


       });
    
    $(".card-img-top img-thumbnail").mouseleave(function()
      {   
          $(this).animate({width: "28%"}, 'slow');
   });

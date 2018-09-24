$(function(){
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/Jumbotron.jpg",
    "images/mrd.jpg",
    "images/T3.jpg"
  ];

  var i = 0;

  setInterval(function(){
    i = (i+1) % images.length;
    galleryImage.fadeOut(function(){
        $(this).attr('src', images[i]);
        $(this).fadeIn();
    });
  }, 2000);

});

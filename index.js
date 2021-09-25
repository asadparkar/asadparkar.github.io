// (This is basically a zoom effect when a user moves his mouse on the navigation bar links)
$(".home").hover(function(){
    $(".home").css("font-size","25px");
},function(){
    $(".home").css("font-size","20px");
});

$(".about").hover(function(){
    $(".about").css("font-size","25px");
},function(){
    $(".about").css("font-size","20px");
});
$(".projects").hover(function(){
    $(".projects").css("font-size","25px");
},function(){
    $(".projects").css("font-size","20px");
});
$(".contact").hover(function(){
    $(".contact").css("font-size","25px");
},function(){
    $(".contact").css("font-size","20px");
});
$(".timeline").hover(function(){
    $(".timeline").css("font-size","25px");
},function(){
    $(".timeline").css("font-size","20px");
});

// (When user scrolls window , the navigation bars opacity reduces)
$(window).scroll(function(){
    if ($(window).scrollTop()){
        $("nav").css({"background-color":"#11052c","opacity":"0.5","height":"40px"});   
    }
    else{
        $("nav").css({"background-color":"#11052c","opacity":"1","height":"70px"});
    }

})


$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  //250 is fade pixels
  });


//SCROLL ANIMATION
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

//SLIDE LEFT AND RIGHT ANIMATION
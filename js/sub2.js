$(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.3,
        spaceBetween: 30,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});

$(function(){
    
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let s2= $('#section2').offset().top;

        if(ws<=s2-600){
            $('#section2 .titlebox').css("transform","translateY(100px)").css("opacity", "0");
        }
        if(ws>s2-600 && ws<=s2+300){     
            $('#section2 .titlebox').css("transform","translateY(0px)").css("opacity", "1"); 
                   
        }
        if(ws>s2+300){
            $('#section2 .titlebox').css("transform","translateY(100px)").css("opacity", "0");
        }
    });
});

$(function(){
    
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let s2= $('#section3').offset().top;

        if(ws<=s2-600){
            $('#section3 .titlebox').css("transform","translateY(100px)").css("opacity", "0");
        }
        if(ws>s2-600 && ws<=s2+300){     
            $('#section3 .titlebox').css("transform","translateY(0px)").css("opacity", "1");
                        
        }
        if(ws>s2+300){
            $('#section3 .titlebox').css("transform","translateY(100px)").css("opacity", "0");
        }
    });
});

$(function(){
    
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let s2= $('.label').offset().top;

        if(ws<=s2-300){
            $('.label').css("transform","translateY(100px)").css("opacity", "0");
        }
        if(ws>s2-600 && ws<=s2+100){     
            $('.label').css("transform","translateY(0px)").css("opacity", "1");
                        
        }
        if(ws>s2+300){
            $('.label').css("transform","translateY(100px)").css("opacity", "0");
        }
    });
});


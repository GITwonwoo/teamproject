
// --------------------------section1 큰 그래프-------------------------------
$(function(){
    
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let label= $('.section1column2').offset().top;

        if(ws<=label-600){
            $('.section1column2').css("transform","translateX(100px)").css("opacity", "0");
        }
        if(ws>label-600 && ws<=label+300 ){     
            $('.ssection1column2').css("transform","translateX(0px)").css("opacity", "1");
                        
        }
        if(ws>label+300){
            $('.section1column2').css("transform","translateX(100px)").css("opacity", "0");
        }
    });
});
// --------------------------section1 작은그래프-------------------------------
$(function(){
    
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let label= $('.smallgrape>div').offset().top;

        if(ws<=label-100){
            $('.smallgrape>div').css("transform","translateX(100px)").css("opacity", "0");
        }
        if(ws>label-1000 && ws<=label+180){     
            $('.smallgrape>div').css("transform","translateX(0px)").css("opacity", "1");
                        
        }
        if(ws>label+180){
            $('.smallgrape>div').css("transform","translateX(100px)").css("opacity", "0");
        }
    });
});
// --------------------------section2 제목 애니메이션-------------------------------
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
// --------------------------section2 라벨 애니메이션-------------------------------
$(function(){
    
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let label= $('.label').offset().top;

        if(ws<=label-800){
            $('.label').css("transform","translateX(100px)").css("opacity", "0");
        }
        if(ws>label-800 && ws<=label+180){     
            $('.label').css("transform","translateX(0px)").css("opacity", "1");
                        
        }
        if(ws>label+180){
            $('.label').css("transform","translateX(100px)").css("opacity", "0");
        }
    });
});
// --------------------------section3 제목 애니메이션-------------------------------
$(function(){
    
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let s3= $('#section3').offset().top;

        if(ws<=s3-600){
            $('#section3 .titlebox').css("transform","translateY(100px)").css("opacity", "0");
        }
        if(ws>s3-600 && ws<=s3+600){     
            $('#section3 .titlebox').css("transform","translateY(0px)").css("opacity", "1");
                        
        }
        if(ws>s3+600){
            $('#section3 .titlebox').css("transform","translateY(100px)").css("opacity", "0");
        }
    });
});
// --------------------------section3 마우스 드래그 슬라이더-------------------------------
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




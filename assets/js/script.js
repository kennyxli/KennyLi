    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height() + 15;

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }
        else{
            $('.navbar').removeClass("sticky")
        }
    })
    $(window).scroll(function(){
        if(isScrolledIntoView('.image')){
            $('.image').addClass("slide")
        }
        else{
            $('.image').removeClass("slide")
        }
    })
    $('.menu-button').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.body').toggleClass("active")
        $('.menu-button i').toggleClass("active")
    })
})
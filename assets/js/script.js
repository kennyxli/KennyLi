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
        if(this.scrollY > 100){
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
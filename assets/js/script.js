$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 1){
            $('.navbar').addClass("sticky")
        }
        else{
            $('.navbar').removeClass("sticky")
        }
    })
    $('.menu-button').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.home').toggleClass("active")
        $('.menu-button i').toggleClass("active")
    })
})
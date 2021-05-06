function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return (
        (elemBottom <= docViewBottom))
    // (elemTop >= docViewTop));
}



$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }
        else{
            $('.navbar').removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll-up-button').addClass("show")
        }else{
            $('.scroll-up-button').removeClass("show")

        }
    })
    $(window).scroll(function(){
        if(isScrolledIntoView('.image')){
            $('.image').addClass("slide")
        }
    })
    $('.menu-button').click(function(){
        if ($(window).width() < 1000){
            $('.navbar .menu').toggleClass("active")
            $('.body').toggleClass("active")
            $('.menu-button i').toggleClass("active")
        }
    })

    let typed = new Typed(".typing", {
        strings: ["Back-end Developer", "Front-end Developer", "Full-Stack Developer"],
        typeSpeed: 75,
        backSpeed: 35,
        loop: true
    })
})
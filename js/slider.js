$(function(){

   $('.loop').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.item:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    $('.loop').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });

    $('.loop').slick({
        dots: true,
        infinite: false,
        speed: 1500,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 8000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    $(".left").on("click",function(){
        $(this).next().slick('slickPrev');
    });
    $(".right").on("click",function(){
        $(this).prev().slick('slickNext');
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
});

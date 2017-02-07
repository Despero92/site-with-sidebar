$(function() {
    $("#tabs").tabs({
        collapsible: false
    })
});

$(function() {
    $("#menu-tabs").tabs({
        collapsible: false
    })
});

$(function() {
    $("#categor-block").tabs({
        collapsible: false
    })
});

$(document).ready(function() {

    $("#carousel").owlCarousel({
        items: 3,
        pagination: true,
        paginationNumbers: true,
        responsive: true,
        slideSpeed: 300,
        singleItem: true,
        baseClass: "owl-carousel",
        theme: "owl-theme"
    });

});

$(document).ready( function(){

    $('.bxslider').bxSlider({
        video: true,
        useCSS: false,
        pager: false,
        slideMargin: 5,
        slideWidth: 191
        
    });

});

$(function() {
    var hamburger = $('#hamburger');
    menu = $('#menu ul');
    menuHeight = menu.height();

    $(hamburger).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 1200 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

// $(document).ready(function() {
//     $("#slider_1").tinycarousel({
//         bullets: true
//     });
// });

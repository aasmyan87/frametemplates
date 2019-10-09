$( document ).ready(function() {
    //  Global usable variations
    var siteBody = $("body");
    var siteHeader = $("#prefix-header-id");

    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $(siteHeader).addClass("scroll-down_js").removeClass("scroll-up_js");
        } else {
            $(siteHeader).addClass("scroll-up_js").removeClass("scroll-down_js");
        }
        lastScrollTop = st;
        if($(document).scrollTop() < 200){
            $(siteHeader).removeClass("scroll-up_js");
        }
    });

    //  Menu Button Open
    $("#menu-open-btn-id").click(function() {
        $('body').addClass("no-ovrf");
        $('#mobile-nav-id').addClass( "opened-menu" );
        $('#menu-cover').addClass('cover-open');

    });
    //  Menu Button Close
    $("#menu-close-btn-id" ).click(function() {
        $('body').removeClass("no-ovrf");
        $('#mobile-nav-id').removeClass( "opened-menu");
        $('#menu-cover').removeClass('cover-open');
    });
    // Close menu on click Cover
    $('#menu-cover').click(function(){
        $('#menu-cover').removeClass('cover-open');
        $('#mobile-nav-id').removeClass( "opened-menu");
        $('body').removeClass("no-ovrf");
    });

    //  Sub Menu Open
    $("#general-menu-id li .mobile-menu-icon").click(function(){
        var activeClass = 'active-menu-item_js';
        var menuItem = $(this).parent();

        if($(menuItem).hasClass(activeClass)){
            $(menuItem).removeClass(activeClass);
        }
        else{
            $(menuItem).addClass(activeClass).siblings().removeClass(activeClass);
        }

    });

});


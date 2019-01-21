var parallax = function() {
    if (document.documentElement.clientWidth > 480) {
        var nav = $('.nav'),
            navHeight = nav.outerHeight(true),
            clientWidth5 = $(document).width() * 0.05; // equals 5vw
        $(nav).parent().css('padding-top', navHeight);
        $(window).scroll(function () {
            var scrollOffset = $(window).scrollTop();   // pixels scrolled down
            if (scrollOffset < navHeight) {             // reduce nav height by scroll offset
                $(nav).css('height', (navHeight - scrollOffset));
            }
            else {                                      // important for return to page
                $(nav).css('height', '5vw');
            }

            if (scrollOffset > (navHeight - clientWidth5)) {     // if desired min size is reached
                nav.addClass('fixme');                  // add black overlay
            } else {
                nav.removeClass('fixme');               // remove black overlay
            }
        });
    }
};
parallax();

window.addEventListener("resize", function() {
    window.location.reload(false);
}, false);
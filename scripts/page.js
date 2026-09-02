window.addEventListener('load', function () {
  $(window).scrollTop(0);
});

$(document).ready(function() {
    // NAVIGATION
    $('.nav-items a').on('click', function(e) {        
        $('.nav-items a.active').removeClass('active');
        $(this).addClass('active');

        if ($('.top-nav').hasClass('open')) {
            $('.top-nav').removeClass('open');
            $('body').css("overflow-y", "auto");
            console.log("menu closed");
        }
    });

    // Back to top
    $('.top').on('click', function() {
        scrollToTop();
        $('.nav-items a.active').removeClass('active');
    });

    // Open overlay
    $('.open').on('click', function() {
        let id = $(this).attr('data-id')
        console.log("element id:", id);

        $('#' + id).addClass('open');
        $('body').css('overflow-y', 'hidden');

        console.log("menu opened");
    });

    // Close overlay
    $('.close-icon').on('click', function() {
        let id = $(this).attr('data-id')
        console.log("element id:", id);

        $('#' + id).removeClass('open');
        $('body').css("overflow-y", "auto");

        console.log("closed");
    });

    $('.nav-items a').on('click', function() {
        $('#top-nav').removeClass('open');
        $('body').css("overflow-y", "auto");

        console.log("closed");
    });

});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 'auto' causes an instant jump, 'smooth' animates it
  });
}

//   if (isIOS()) {
//     const scrollY = window.scrollY;
//     $('body')
//       .data('scrollY', scrollY)
//       .css({
//         position: 'fixed',
//         top: `-${scrollY}px`,
//         width: '100%'
//       });
//   } 
//   else {
//     const scrollbarWidth = getScrollbarWidth();
//     $('html, body').css({ overflow: 'hidden' });
//     $('body').css('padding-right', scrollbarWidth);
//   }

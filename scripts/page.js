let project_id;
let scroll_position = 0;

$(document).ready(function () {

  // SPLASH SCREEN
  if (sessionStorage.getItem('splashSeen')) {
    $('#splash').hide();
  } 
  else {
    $('body').css('overflow-y', 'hidden');  // disable scrolling
    console.log ("scrolling disabled");
    sessionStorage.setItem('splashSeen', 'true');

    $('#splash').click(function() {
      $(this).fadeOut('slow');
      $('body').css('overflow-y', 'auto');  // re-enable scrolling
      console.log("scrolling re-enabled");
    })
  }

  // TOP NAV
  $('#top-nav .icon').click(function() {
    if ($("#nav-items").css('display') === 'none') {
      $("#nav-items").css({
        "display": "flex",
      });    
    }
    else {
      $("#nav-items").css({
        "display": "none",
      });
    }
  })

  // OPEN/CLOSE CAROUSEL
  // $('.open').click(function() {
  //   $('#art-carousel').css({
  //     top: scroll_position + "px"
  //   });
  //   $('#art-carousel').show();
  //   console.log("carousel opened")
  // })

  $('.open').click(function() {
    $('body').css('overflow-y', 'hidden');  // disable scrolling
    scroll_position = $(window).scrollTop();

    // Extract the parameters using jQuery's data method
    let id = $(this).data('id');

    $('#' + id).css({
      top: scroll_position + "px"
    });
    $('#' + id).show();
    console.log("opened")          
    // Pass the variables to your custom function
  });

  $('.close').click(function() {
    $('body').css('overflow-y', 'auto');  // re-enable scrolling
    
    let id = $(this).data('id');
    $('#' + id).hide();

    console.log("closed")
  })

  

  // SHOW/HIDE PROJECT OVERLAYS
  // $('.open-project').click(function() {
  //   project_id = $(this).attr('id');
  //   scroll_position = $(window).scrollTop();
  //   $("#art").addClass("no-scroll").css({
  //     top: -scroll_position + "px"              // lock body in place
  //   });
  //   $('#' + project_id + '.overlay').show();
  // })

  // $('.close-project').click(function() {
  //   $("#art").removeClass("no-scroll").css({ top: "" });
  //   $(window).scrollTop(scroll_position);
  //   $('#' + project_id + '.overlay').hide();
  // }) 
});
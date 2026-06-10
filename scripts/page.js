let project_id;
let scroll_position = 0;

$(document).ready(function () {

  if (sessionStorage.getItem('splashSeen')) {
      $('#splash').hide();
  } 
  else {
    sessionStorage.setItem('splashSeen', 'true');

    $('#splash').click(function() {
      $(this).fadeOut('slow');
      $('body').css('overflow', 'auto');  // re-enable scrolling
    })
}

  // SPLASH SCREEN
  $('#splash').click(function() {
    $(this).fadeOut('slow');
  })

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

  // SHOW/HIDE PROJECT OVERLAYS
  $('.open-project').click(function() {
    project_id = $(this).attr('id');
    scroll_position = $(window).scrollTop();
    $("#art").addClass("no-scroll").css({
      top: -scroll_position + "px"              // lock body in place
    });
    $('#' + project_id + '.overlay').show();
  })

  $('.close-project').click(function() {
    $("#art").removeClass("no-scroll").css({ top: "" });
    $(window).scrollTop(scroll_position);
    $('#' + project_id + '.overlay').hide();
  }) 
});
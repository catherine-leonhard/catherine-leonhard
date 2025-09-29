let project_id;
let scroll_position = 0;

$(document).ready(function () {
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

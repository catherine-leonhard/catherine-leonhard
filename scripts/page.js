let project_id;

$(document).ready(function () {
  // SHOW/HIDE PROJECT OVERLAYS
  $('.open-project').click(function() {
    project_id = $(this).attr('id');
    $('#projects').hide();
    $('#art').hide();
    $('#' + project_id + '.overlay').show();
  })

  $('.close-project').click(function() {
    $('#projects').show();
    $('#art').show();
    $('#' + project_id + '.overlay').hide();
  })  
});

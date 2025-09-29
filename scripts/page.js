let project_id;

$(document).ready(function () {
  // SHOW/HIDE PROJECT OVERLAYS
  $('.open-project').click(function() {
    project_id = $(this).attr('id');
    $('#' + project_id + '.overlay').show();
  })

  $('.close-project').click(function() {
    $('#' + project_id + '.overlay').hide();
  })  
});

$(document).ready(function() {
  //Cache DOM
  var $actMenu = $('#home-events-menu');
  var $actMenuItems = $('.activity');
  var $activities = $('.activity-div');
  var $actBackButtons = $('.activity-back');

  $actMenuItems.click(function(e) {
    $activities.filter('#' + e.target.id + '-div').addClass('slidein');
    return false;
  });

  $actBackButtons.click(function(e) {
    $activities.filter('.slidein').removeClass('slidein');
    return false;
  });
});
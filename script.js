$(document).ready(function(){
    $('#activity').on('click', function() {
        $('#clickfunc').html('activity');
      });
    
    $('#acquisitions').on('click', function() {
      $('#clickfunc').html('acquisitions');
    });

    $('#subordination').on('click', function() {
      $('#clickfunc').html('subordination');
    });
});
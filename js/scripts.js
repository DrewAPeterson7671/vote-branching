$(document).ready(function(){
  $("#ageForm").submit(function(event) {
    var age = $("input#age").val();
    if (age > 18) {
      $('.register').show();
      $('.info').hide();
    } else if (age <= 18) {
      $('.register').hide();
      $('.info').show();
    } else {
      console.log('Error')
    }

    event.preventDefault();
  });
});

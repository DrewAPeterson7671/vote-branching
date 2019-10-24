$(document).ready(function(){
  $("#ageForm").submit(function(event) {
    var age = $("input#age").val();
    if (age > 18) {
      $('.register').show();
    } else if (age <= 18) {
      $('.info').show();
    } else {
      console.log('Error')
    }

    event.preventDefault();
  });
});

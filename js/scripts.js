$(document).ready(function() {
  $("#name").submit(function(event) {
    var person = $("input#personName").val();
    $(".personName").text(person);
    $("#letter").show();
    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#name").submit(function(event) {
    var person = $("input#personName").val();
    $(".Name").text(person);
    $("#letter").show();
    event.preventDefault();
  });
});

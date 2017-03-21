//business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age= age;
}


//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputMovie = $("#movie").val();
    var inputTime = $("#time").val();
    var inputAge = $("#age").val();
    var newPrice = new Ticket(inputMovie, inputTime, inputAge);

    if (Ticket.movie === "RomCom" || Ticket.time === "Morning" || Ticket.age === "Senior (55+)"){
      $(".result").text("$7");
    } else {
      $(".result").text("$9");
    }

  });
});

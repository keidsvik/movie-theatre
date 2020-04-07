// Back-End Logic ------
function Ticket(movieTitle, movieTime, movieAge) {
  this.movieTitle = movieTitle;
  this.movieTime = movieTime;
  this.movieAge = movieAge;
  this.moviePrice = 0
}

Ticket.prototype.ticketPrice = function() {
  if(this.movieAge === 'senior' && this.movieTime === "morning" || this.movieAge === "kiddo" && this.movieTime === "morning") {
    this.moviePrice += 3;
  }else if(this.movieAge === "senior" && this.movieTime === "evening" || this.movieAge === "kiddo" && this.movieTime === "evening") {
    this.moviePrice += 4;
  }else{
    this.moviePrice +=1000;
  }
  return this.moviePrice
}


// Front End Logic -------

var ticket = new Ticket();

$(document).ready(function(){
  $("form#movieForm").submit(function(event){
    event.preventDefault();
    var movieAge = $("select#age").val();
    var movieTime = $("select#time").val();
    var movieTitle = $("select#title").val();
    $("select#age").val();
    $("select#time").val();
    $("select#title").val();
    var newTicket = new Ticket(movieAge, movieTime, movieTitle);
    newTicket.ticketPrice();
    $("div#result").text("movie:" + this.movieTitle + "price:" + this.moviePrice);

    console.log(newTicket)
  })
})
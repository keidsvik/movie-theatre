function Tickets(movieTitle, movieTime, movieAge) {
  this.movieTitle = movieName;
  this.movieTime = movieTime;
  this.movieAge = movieAge;
  this.moviePrice = 0
}

Ticket.prototype.ticketPrice = function() {
  if(this.movieAge === 'senior' || this.movieAge === "kiddo") {
    this.price += 3;
  }else{
    this.price +=20;
  }
}

// adult: $9.99 child/65+: $3
// Back-End Logic ------
function Tickets(movieTitle, movieTime, movieAge) {
  this.movieTitle = movieName;
  this.movieTime = movieTime;
  this.movieAge = movieAge;
  this.moviePrice = 0
}

Ticket.prototype.ticketPrice = function() {
  if(this.movieAge === 'senior' && this.movieTime === "morning" || this.movieAge === "kiddo" && this.movieTime === "morning") {
    this.price += 3;
  }else if(this.movieAge === "senior" && this.movieTime === "night" || this.movieAge === "kiddo" && this.movieTime === "night") {
    this.price +=4;
  }else{
    this.price +=1000
  }
  return this.price
}



// adult: $9.99 child/65+: $3

// Front End Logic -------

window.addEventListener('load',function(){
    // const container = document.querySelector('.container');
    // const seats = document.querySelectorAll('.row .seat:not(.occupied)');
    // const count = document.getElementById('count');
    // const total = document.getElementById('total');
    // const movieSelect = document.getElementById('movie');
    // console.log(container)

    const container = document.querySelector('.container');
    const seats = document.querySelectorAll('.row .seat:not(.occupied)');
    const count = document.getElementById('count');
    const total = document.getElementById('total');
    const movieSelect = document.getElementById('movie');

    populateUI();

    let ticketPrice = +movieSelect.value;

    // Save selected movie index and price
    function setMovieData(movieIndex, moviePrice) {
      localStorage.setItem('selectedMovieIndex', movieIndex);
      localStorage.setItem('selectedMoviePrice', moviePrice);
    }

    // Update total and count
    function updateSelectedCount() {
      const selectedSeats = document.querySelectorAll('.row .seat.selected');

      const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

      localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

      const selectedSeatsCount = selectedSeats.length;

      count.innerText = selectedSeatsCount;
      total.innerText = selectedSeatsCount * ticketPrice;
    }

    // Get data from localstorage and populate UI
    function populateUI() {
      const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

      if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
          if (selectedSeats.indexOf(index) > -1) {
            seat.classList.add('selected');
          }
        });
      }

      const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

      if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
      }
    }

    // Movie select event
    movieSelect.addEventListener('change', e => {
      ticketPrice = +e.target.value;
      setMovieData(e.target.selectedIndex, e.target.value);
      updateSelectedCount();
    });

    // Seat click event
    container.addEventListener('click', e => {
      if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
      ) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
      }
    });

    // Initial count and total set
    updateSelectedCount();

    // let ticketPrice = movieSelect.value;


    // movieSelect.addEventListener('change', function(){
    //     //console.log(this.value)
    //     ticketPrice = movieSelect.value;
    //     console.log(ticketPrice)
    // })

    // function updateSelectedCount(){
    //     const selectedSeats = document.querySelectorAll('.row.seat.selected');
    //     console.log(selectedSeats)

    //     const seatsIndex = [...selectedSeats].map(function(seat){
    //         return [...seats].indexOf(seat)
    //     })

    //     localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    //     const selectedSeatsCount = selectedSeats.length;

    //     count.innerText = selectedSeatsCount;
    //     total.innerText = selectedSeatsCount*ticketPrice;
    // }

    // movieSelect.addEventListener('change', e => {
    //     ticketPrice = e.target.value
    //     updateSelectedCount();
    // })


    // container.addEventListener('click', (e) => {
    //     //console.log(e.target);
    //     if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    //         //console.log(e.target)
    //     e.target.classList.toggle('selected')

    //     updateSelectedCount();
    //     }
    // })
})



// const ticketPrice = +movieSelect.value;
// console.log(ticketPrice)
// console.log("hello world")

// function updateSelectedCount(){
//     const selectedSeats = document.querySelectorAll('.row.seat.selected');
//     console.log(selectedSeats)
// }

// container.addEventListener('click', (e) => {
//     //console.log(e.target);
//     if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
//         //console.log(e.target)
//     e.target.classList.toggle('selected')

//     updateSelectedCount();
//     }
// })

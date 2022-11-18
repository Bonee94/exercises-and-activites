fetch('https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyCNoCGvv588RGUOYyIPoRXZlS1SezWenwk', {
    method: 'GET',
    mode: 'no-cors',
 
})
  .then(function (data) {
    console.log(data);
  });

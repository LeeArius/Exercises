let defMsg = 'We are the galactors of the Universe, and we are here to conquer your planet';
let message = defMsg || 'WE ARE THE GALACTORS!';

const alienShip = {
   threat () {
    console.log(message); 
  },
  retreat () {
    console.log('We no longer wish to annihilate your planet.');
  }
}

alienShip.threat();
alienShip.retreat();

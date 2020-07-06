const evenOrOdd = (num) => {
  if (!Number.isInteger(num)){
    console.log('Sorry, the value is NaN');
    return;
  }

  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
};



console.log(evenOrOdd(12));
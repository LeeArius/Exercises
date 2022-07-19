let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
let newArray = [];

for(let i = 0; i < myArray.length; i++) {
  let value = myArray[i];
  if (value % 2 === 0) {
    newArray.push('even');
  } else {
    newArray.push('odd');
  }
}

console.log(newArray);
newArray = []; // resets array

// function 

myArray.forEach(i => {
  if (i % 2 === 0) {
    newArray.push('even');
  } else {
    newArray.push('odd');
  }
})
console.log();
console.log(newArray);

// map array function

let mapArray = myArray.map(i => {
  if (i % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
})
console.log('\nMAPPED ARRAY FUNCTION\n')
console.log(mapArray);

// let mapForArray = [];
//   for (let i = 0; i < myArray.length; i++) {
//     let value = myArray[i];
//     if ( i % 2 === 0) {
//       return 'even';
//     } else {
//       return 'odd';
//     }
//   }

// console.log(mapForArray);




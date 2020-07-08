let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

console.log(myArray);

let evenArray = [];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray[i].length; j++) {
    let value = myArray[i][j];
    if (value % 2 === 0) {
      evenArray.push(value);
    }
  }
}

console.log(evenArray);
evenArray = []; // reset the array

//function

myArray.forEach(i => {
  i.forEach(j => {
    if (j % 2 === 0) {
      evenArray.push(j);
    }
  });
});

console.log(evenArray);

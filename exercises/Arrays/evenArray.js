let array = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
let evenArray = [];
for(let i = 0; i < array.length; i++){
  let value = array[i];
  if(value % 2 === 0){
    evenArray.push(value);
  }
}
console.log(evenArray);
evenArray = [];

// function
array.forEach(value => {
  if (value % 2 === 0) {
    evenArray.push(value);
  }
});

console.log(evenArray);
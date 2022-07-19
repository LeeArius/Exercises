let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
function newArray() {
  return array.filter(Number.isInteger);
}

console.log(newArray());


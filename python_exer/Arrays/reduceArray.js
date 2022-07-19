let numbers = [3, 5, 7];



function sumOfSquares(value) {
  return value.reduce((initVal, number) => {
    return initVal + number * number;
  }, 0);
}
console.log(sumOfSquares(numbers));
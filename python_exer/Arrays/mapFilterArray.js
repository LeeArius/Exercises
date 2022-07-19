let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let filter = arr.map(letters => {
    return letters.length;
  }) .filter(number => {
    return number % 2 != 0;
  });
  
  return filter;
}


console.log(oddLengths(arr));
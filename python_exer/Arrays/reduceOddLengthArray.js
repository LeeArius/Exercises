let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLength(value) {
  return value.reduce((initVal, letters) => {
    let length = letters.length;
    if (length % 2 != 0) {
      initVal.push(length);
    }
      return initVal;
  }, []);
}

console.log(oddLength(arr));
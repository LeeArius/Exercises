let add = num => {
  return num+num;
}

let checkIfSame = (add,value) => {
  let one = add(value);
  let two = add(value);
    if(one === two) {
      console.log(value);
  }
}

checkIfSame(add, 5);

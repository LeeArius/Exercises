function ask(prompt) { 
  let rlSync = require('readline-sync');
  input = rlSync.question(prompt);
}

ask('How old are you?: ');
age = parseInt(input)
console.log(input);

for(let i = 10; i < 50 ; i += 10){
  console.log(`In ${i} years, you will be ${age + i} years old`);
}


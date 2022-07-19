function ask(prompt) { 
  let rlSync = require('readline-sync');
 let input = rlSync.question(prompt);
}

ask('ask here');
console.log(input);
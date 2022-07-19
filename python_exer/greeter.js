let getName = (prompt) => {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

  let firstname = getName('What is your first name: \n');
  let lastname = getName('What is your last name:\n');
  console.log(`Hello, ${firstname} ${lastname}!`);

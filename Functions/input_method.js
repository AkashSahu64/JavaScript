function sum(a,b){
    return a+b
}
console.log(sum(2,5));

// Input System 

/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the value of a: ", function(a) {
  rl.question("Enter the value of b: ", function(b) {
    const result = parseInt(a) + parseInt(b);
    console.log("Result is: " + result);
    rl.close();
  });
});*/

// Another way

const readlineSync = require('readline-sync');

const a = readlineSync.question('Enter the value of a: ');
const b = readlineSync.question('Enter the value of b: ');

const result = parseInt(a) + parseInt(b);
console.log('Result is:', result);


// npm install readline-sync


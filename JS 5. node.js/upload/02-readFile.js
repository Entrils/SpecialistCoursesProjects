const fs = require('fs');

//let result = fs.readFileSync('test.txt', 'utf-8');
//console.log(result);

fs.readFile('test.txt', (err, txt) => {
  console.log(txt.toString());
});
console.log('тест');
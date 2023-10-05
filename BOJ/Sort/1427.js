const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const arr = [...input];
arr.sort((a, b) => b - a);
console.log(arr.join(''));

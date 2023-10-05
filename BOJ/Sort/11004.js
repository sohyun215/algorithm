const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, k] = input[0].split(' ');

const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);

console.log(arr[k - 1]);

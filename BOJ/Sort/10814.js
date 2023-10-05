const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const people = [];
for (let i = 1; i <= n; i++) {
  const [age, name] = input[i].split(' ');
  people.push({ age, name });
}

people.sort((a, b) => {
  if (a.age === b.age) return 0;
  return a.age - b.age;
});
// js에서 기본적으로 stable sort를 제공하기 때문에 people.sort((a, b) => a.age - b.age); 라고 해도 된다.

let answer = '';
for (const p of people) {
  answer += `${p.age} ${p.name}\n`;
}
console.log(answer);

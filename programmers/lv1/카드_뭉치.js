// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    let card1 = cards1.shift();
    let card2 = cards2.shift();
    if (goal[i] !== card1 && goal[i] !== card2) {
      return "No";
    } else if (goal[i] === card1) cards2.unshift(card2);
    else if (goal[i] === card2) cards1.unshift(card1);
  }
  return "Yes";
}

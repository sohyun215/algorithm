// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
  let dx = 0, dy = 0;
  keyinput.map(k => {
      if(k === "left"){
          if(dx != parseInt(board[0]/2) * -1) dx--;
      }else if(k === "right"){
          if(dx != parseInt(board[0]/2)) dx++;
      }else if(k === "up"){
          if(dy != parseInt(board[1]/2)) dy++;
      }else{
          if(dy != parseInt(board[1]/2) * -1) dy--;
      }
  })
  return [dx, dy];
}

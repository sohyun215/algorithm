// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  let x_sum = 0;
  let c_sum = 0;
  polynomial.split(" ").map((e) => {
    if (e.includes("x")) {
      let x = e.split("x").filter((x) => x != "");
      if (x.length === 0) x_sum++;
      else x_sum += parseInt(x[0]);
    } else if (!isNaN(e)) {
      c_sum += parseInt(e);
    }
  });

  let answer =
    x_sum != 0
      ? (x_sum === 1 ? "x" : x_sum.toString() + "x") +
        (c_sum != 0 ? " + " + c_sum.toString() : "")
      : c_sum.toString();
  return answer;
}

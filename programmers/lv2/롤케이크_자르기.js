function solution(topping) {
  let answer = 0;
  const a = [];
  const b = [];
  let st = new Set();
  const len = topping.length;

  for (let i = 0; i < len; i++) {
    st.add(topping[i]);
    a[i] = st.size;
  }

  st = new Set();
  for (let i = len - 1; i >= 0; i--) {
    st.add(topping[i]);
    b[i] = st.size;
  }

  for (let i = 0; i < len; i++) {
    if (a[i] === b[i + 1]) answer += 1;
  }

  return answer;
}

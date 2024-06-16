function solution(fees, records) {
  const answer = [];
  const [dTime, dFee, uTime, uFee] = fees;
  const recordMap = new Map(); // 입/출차 기록 저장
  const feeMap = new Map(); // 누적 주차 시간 저장

  for (const record of records) {
    const [t, carNum, c] = record.split(' ');
    const [hour, minute] = t.split(':').map(Number);

    const minutes = hour * 60 + minute;

    if (c === 'OUT') {
      const inTime = recordMap.get(carNum);
      feeMap.set(carNum, (feeMap.get(carNum) || 0) + minutes - inTime);
      recordMap.delete(carNum);
    } else {
      recordMap.set(carNum, minutes);
    }
  }

  // 출차된 내역이 없으면 23:59에 출차된 것
  for (const [carNum, time] of recordMap.entries()) {
    feeMap.set(carNum, (feeMap.get(carNum) || 0) + (23 * 60 + 59) - time);
  }

  const sorted = Array.from(feeMap).sort((a, b) => Number(a[0]) - Number(b[0]));
  for (const [car, accTime] of sorted) {
    let finalFee = dFee;
    if (accTime > dTime) {
      finalFee += Math.ceil((accTime - dTime) / uTime) * uFee;
    }
    answer.push(finalFee);
  }

  return answer;
}

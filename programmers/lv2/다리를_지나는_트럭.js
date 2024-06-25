function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const truckCnt = truck_weights.length;
  const bridge = Array.from({ length: bridge_length }).fill(0);
  const completed = [];
  let totalWeight = 0;

  while (completed.length !== truckCnt) {
    answer += 1;

    // 다리를 건너고 있는 트럭만 있을 때
    if (truck_weights.length === 0) {
      if (bridge[0] !== 0) {
        completed.push(bridge[0]);
      }
      bridge.shift();
      continue;
    }

    let truck = bridge.shift(); // 다리를 나갈 트럭
    if (truck !== 0) {
      completed.push(truck);
      totalWeight -= truck;
    }

    // 다리를 건널 트럭 확인
    if (totalWeight + truck_weights[0] <= weight) {
      totalWeight += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }

  return answer;
}

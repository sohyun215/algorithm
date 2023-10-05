function merge(arr, left, mid, right) {
  let i = left; // 왼쪽 배열에서 첫 번째 원소를 가리키는 인덱스
  let j = mid + 1; // 오른쪽 배열에서 첫 번째 원소를 가리키는 인덱스
  let k = left; // 결과 배열의 인덱스

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }

  if (i > mid) {
    for (; j <= right; j++) sorted[k++] = arr[j];
  } else {
    for (; i <= mid; i++) sorted[k++] = arr[i];
  }

  // 정렬된 배열 결과를 원본 배열에 반영
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}

function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = parseInt((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}

let arr = [4, 5, 17, 1, 3, 14, 6, 8, 2, 9, 12, 18, 7];
// 임시 정렬 배열(sorted)
let sorted = Array.from({ length: arr.length }, () => 0);

mergeSort(arr, 0, arr.length - 1);

console.log(arr);

// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
  let service = 0;
  let coupon = chicken,
    total_coupon = 0;
  while (coupon != 0) {
    service += parseInt(coupon / 10);
    total_coupon += coupon % 10;
    coupon = parseInt(coupon / 10);
    if (total_coupon >= 10) {
      service += parseInt(total_coupon / 10);
      coupon += parseInt(total_coupon / 10);
      total_coupon %= 10;
    }
  }
  return service;
}

const HIT = 1;
const MISS = 5;

function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];

  if (cacheSize === 0) return cities.length * MISS;

  for (const city of cities) {
    const cityToLower = city.toLowerCase();
    const hitIndex = cache.indexOf(cityToLower);

    if (hitIndex !== -1) {
      answer += HIT;
      cache.splice(hitIndex, 1);
    } else {
      answer += MISS;
      if (cache.length === cacheSize) cache.shift();
    }

    cache.push(cityToLower);
  }

  return answer;
}

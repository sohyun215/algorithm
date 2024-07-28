/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = new Map();

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (sMap.get(t[i]) >= 1) {
      sMap.set(t[i], sMap.get(t[i]) - 1);
    } else return false;
  }

  return true;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const idxMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    idxMap.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    const idx = idxMap.get(target - nums[i]);
    if (idx && idx !== i) {
      return [i, idx];
    }
  }
};

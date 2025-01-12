/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const addToTarget = target - nums[i]
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] === addToTarget && i !== j) {
                return [i, j]
            }
        }
    }
};
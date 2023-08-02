/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const numToIndexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numToIndexMap.has(complement)) {
            return [numToIndexMap.get(complement), i];
        }

        numToIndexMap.set(nums[i], i);
    }

    return null;
}


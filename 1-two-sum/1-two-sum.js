/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let hashMap = new Map()
    for(let i=0; i<nums.length; i++) {
        let sum = target - nums[i]
        if(hashMap.has(sum)) {
            return [i, hashMap.get(sum)]
        } else {
            hashMap.set(nums[i],i)
        }
    }
};
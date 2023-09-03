/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const hashMap = {}
    for(let i = 0; i<nums?.length; i++) {
        const currVal = nums[i]
        if(currVal !== 0) {
            hashMap[currVal]  = 1
        }
    }
    return Object.keys(hashMap)?.length
};
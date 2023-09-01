/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) { 
    const uniqueArr = new Set(nums)
    if(uniqueArr.size !== nums.length)
        return true
    return false
    
};
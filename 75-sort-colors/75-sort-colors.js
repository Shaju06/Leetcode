/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 var sortColors = function(nums) {
/** 
 * Used Dutuch national flag (DNF) algorithm is one of the most popular programming problems proposed by Edsger Dijkstra
 * It uses only constant time complexity of O(n) with  space complexity of O(1).
 */ 
    let low = 0
    let mid = 0
    let high = nums.length -1 
    while(mid<=high) {
        if(nums[mid] === 0) {
            swap(nums, low, mid)
            low++
            mid++
        } else if(nums[mid] === 1) {
            mid++
        } else if(nums[mid] === 2) {
            swap(nums, mid, high)
            high--
        } 
    }
    
    function swap(arr, num1, num2) {
            const temp = arr[num1]
            arr[num1] = arr[num2]
            arr[num2] = temp
    }
    
    return nums
};
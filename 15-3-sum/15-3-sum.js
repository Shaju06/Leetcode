/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    nums = nums.sort((a,b)=> a-b)
    let arr = []
  
    for(let i=0; i< nums.length; i++) {
        if(i > 0 && nums[i-1] === nums[i])
            continue
        
         let left = i+1
         let rigth = nums.length - 1
         
        while(left<rigth) {
            const sum = nums[i] + nums[left] + nums[rigth]
            if(sum>0) {
                rigth--
            }  else if(sum<0) {
                    left++
            } else {
                arr.push([nums[i],nums[left], nums[rigth]])
                left++
                while(nums[left] === nums[left-1] && left<rigth)
                    left++
            }
        }
    }
    return arr
};
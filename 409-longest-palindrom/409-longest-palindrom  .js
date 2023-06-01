/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hashMap = new Map()
    
    for(let char of s) {
        if(!hashMap.has(char)) {
            hashMap.set(char, 1)
        } else {
            hashMap.delete(char)
        }
    }
        let arr = Array.from(hashMap.values());
        if(arr.length <=1) return s.length 
        else return s.length - arr.length + 1
};
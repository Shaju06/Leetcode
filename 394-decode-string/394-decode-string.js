/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    let stack = []
    let num = ''
    let str = ''
    let prevStr = []
    
        for(let i=0; i<s.length;i++) {
            const curr = s[i]
            if(!isNaN(curr)) {
                num += `${curr}`
            } else if (curr === '[') {
                stack.push(num)
                prevStr.push(str)
                num = ''
                str = ''
            } else if(curr === ']') {
               const prevItem = prevStr.pop()
               const currStr = stack.pop()
               str = prevItem + str.repeat(currStr)
            } else {
                str +=curr
            }
        
        }
    return str
};
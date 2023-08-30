/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    let res = "";
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0) {
        
        let sum = carry;
        if (i >= 0) {
            sum += a[i--] - '0';
            console.log(sum)
        }
        if (j >= 0) {
            sum += b[j--] - '0';
        }
        // Add the bit to the result
        res = sum % 2 + res;
        // Modify carry
        carry = parseInt(sum / 2);
    }
    
    if (carry > 0) {
        res = 1 + res;
    }
    return res;
    
};
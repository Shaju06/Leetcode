/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = new Set()
    let column = new Set()
    let r = matrix.length
    let c = matrix[0].length
    
    for(let i=0; i<r;i++) {
        for(let j=0; j<c;j++) {
            if(matrix[i][j] === 0) {
                row.add(i)
                column.add(j)
            }
        }
    }
    
    for(let i=0; i<r;i++) {
        for(let j=0;j<c;j++) {
            if(row.has(i) || column.has(j)) {
                matrix[i][j] = 0
            }
        }
    }  
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n===0) return []

    return generateTreeStrct(1,n)

function generateTreeStrct(start, end) {
const result = []
  if (start > end) {
    result.push(null);
    return result;
  }
for(let i=start; i<=end;i++) {
    const leftList = generateTreeStrct(start, i-1)
    const rightList = generateTreeStrct(i+1, end)
     for (let j = 0; j < leftList.length; j++) {
      for (let k = 0; k < rightList.length; k++) {
        const root = new TreeNode(i);
        root.left = leftList[j];
        root.right = rightList[k];
        result.push(root);
      }
    }
}
return result
}

};

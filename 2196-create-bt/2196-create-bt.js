/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    let hash = {}
    let children = {}
    for(let [parent, child, isLeft] of descriptions) {
    children[child] = true
        if(!hash[parent]) {
            hash[parent] = new TreeNode(parent)
        }
         if(!hash[child]) {
            hash[child] = new TreeNode(child)
        }
         if(isLeft) {
            hash[parent].left = hash[child]
        } else {
            hash[parent].right = hash[child]
        }
    }
    for(let [parent] of descriptions) {
        if(!children[parent]) {
            return hash[parent]
        }
    }
};
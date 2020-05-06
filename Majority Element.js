/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numMap = {}, length = nums.length;
    for(let i = 0; i < nums.length; i++) {
        let value = numMap[nums[i]];
        numMap[nums[i]] = value ? value+1: 1;
    }
    let criteria = Math.floor(length/2);
    for(let value in numMap) {
        if(numMap[value] > criteria) {
           return value;
        }
    }
};

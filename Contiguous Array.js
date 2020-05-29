/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let hash = {};
    let zo = 0, max = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
           zo--;
        }if(nums[i] === 1) {
            zo++;
        }
        
        if(zo === 0 && max < i+1) {
            max = i+1;
        }
        else if(zo !== 0 && hash[zo] != null) {
            let temp = i - hash[zo];
            if(temp > max) {
                max = temp;   
           }
        }
        else if(zo !== 0 && hash[zo] == null) {
            hash[zo] = i;
        }
            
    }
    return max;
};

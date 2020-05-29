/**
 * @param {number} nums
 * @return {number[]}
 */
var countBits = function(num) {
    let bitArray = [];
    for(let i = 0; i <= num; i++) {
        bitArray.push(Number(i).toString(2).replace(/0/g, '').length);
    }
    return bitArray;
};

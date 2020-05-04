/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    if(num === 0) {
       return 1;
    }
    let numberOfBits = Math.floor(Math.log2(num))+1;
    for(let i = 0; i < numberOfBits; i++) {
        num = num ^ (1 << i);
    }
    return num;
};

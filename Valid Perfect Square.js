/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for(let i = 1, square = 0; square = i*i, square <= num; i++) {
        if(square === num) {
            return true;
        }
    }
    return false;
};

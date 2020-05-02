/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let numberOfJewels = 0;
    for(let stones of S) {
        numberOfJewels += Number(J.includes(stones));
    }
    return numberOfJewels;
};

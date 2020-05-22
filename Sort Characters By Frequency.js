/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let sMap = {}, sArray, result = '';
    for(let letter of s) {
        let count = sMap[letter] ? sMap[letter].count + 1: 1;
        sMap[letter] = {letter, count};
    }
    sArray = Object.values(sMap);
    sArray.sort((a, b) => b.count - a.count);
    for(let el of sArray) {
        result += el.letter.repeat(el.count);
    }
    return result;
};

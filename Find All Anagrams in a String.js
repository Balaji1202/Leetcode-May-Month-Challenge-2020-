/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(s.length === 0) return [];
    
    let sMap = new Array(26).fill(0), pMap = new Array(26).fill(0), result = [], flag;
    for(let letter of p) {
        pMap[letter.charCodeAt(0) - 97]++;
    }
    for(let i = 0; i < (s.length - p.length) + 1; i++) {
        flag = true;
        for(let j = i; j < p.length + i; j++) {
            sMap[s[j].charCodeAt(0) - 97]++;
        }
        for(let j = 0; j < 26; j++) {
            if(sMap[j] !== pMap[j]) {
                flag = false;
                break;
            }
        }
        if(flag === true) {
           result.push(i);
        }
        sMap.fill(0);
    }
    return result;
};

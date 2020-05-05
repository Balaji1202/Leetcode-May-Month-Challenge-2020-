// A bit slow algo
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

  for (let i = 0; i < s.length; i++) {
    let sArray = s.split('');
    sArray.splice(i, 1);
    if (sArray.includes(s[i])) {
      continue;
    } else {
      return i;
    }
  }
  return -1;
};


// An optimized algo
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let sMap = {};
    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = sMap[s[i]]? sMap[s[i]]+1: 1;
    }
    for (let i = 0; i < s.length; i++) {
        if(sMap[s[i]] === 1) {
           return i;
        }
    }
    return -1;
};

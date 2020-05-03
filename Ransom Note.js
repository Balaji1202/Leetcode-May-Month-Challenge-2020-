/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magArray = magazine.split('');
    for(let letter of ransomNote) {
        let index = magArray.indexOf(letter);
        if(index >= 0) {
            magArray.splice(index, 1);
        } else {
            return false;
        }
    }
    return true;
};

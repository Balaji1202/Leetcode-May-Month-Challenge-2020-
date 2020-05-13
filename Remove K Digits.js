/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    num = num.split('');
    let i, j, flag = false;
    for(i = 0; i < k; i++) {
        flag = false;
        for(j = 0; j < num.length - 1; j++) {
            if(num[j] > num[j+1]) {
                num.splice(j, 1);
                flag = true;
                break;
            }
        }
        if(j === num.length - 1 && !flag) {
            num.splice(j, 1);
        }
    }
    num = num.join('');
    return BigInt(num).toString();
};

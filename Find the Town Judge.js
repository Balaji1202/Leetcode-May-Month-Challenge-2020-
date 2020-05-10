/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let townJudges = new Array(N).fill(0), townTrustees = new Array(N).fill(0);
    if(trust.length < N-1) {
       return -1;
    }
    for(let i = 0; i < trust.length; i++) {
        townTrustees[trust[i][0] - 1]++;
        townJudges[trust[i][1] - 1]++;
    }
    for(let i = 0; i < N; i++) {
        if(townJudges[i] === N - 1 && townTrustees[i] === 0) {
           return i+1;
        }
    }
    return -1;
};

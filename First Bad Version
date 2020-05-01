/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1, end = n, mid, isBad, versionMap = {};
        while(true) {
            mid = Math.floor(start + (end-start)/2);
            if(versionMap[mid]) {
                isBad = versionMap[mid];
            } else {
                isBad = isBadVersion(mid);
                versionMap[mid] = isBad;   
            }
            if(start === end) {
               return mid;
            }
            if(isBad) {
                end = mid;
            }
            else {
                start = mid+1;
            }
        }
    };
};

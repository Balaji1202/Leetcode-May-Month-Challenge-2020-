/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
// Runtime: 136ms for the testcases in leetcode
var intervalIntersection = function(A, B) {
	let closedInterval = [];
	for(let i = 0; i < A.length; i++) {
			for(let j = 0; j < B.length; j++) {
					if( (A[i][0] <= B[j][1] && A[i][1] >= B[j][0]) ||
							(B[j][0] <= A[i][1] && B[j][1] >= A[i][0]) ) {
							let start = Math.max(A[i][0], B[j][0]);
							let end = Math.min(A[i][1], B[j][1]);
							closedInterval.push([start, end]); 
					}
			}
	}
	return closedInterval;
};


/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
// Runtime: 94ms for the testcases in leetcode
var intervalIntersection = function(A, B) {
	let closedInterval = [], i = 0, j = 0;
	while(i < A.length && j < B.length) {
        let start = Math.max(A[i][0], B[j][0]);
        let end = Math.min(A[i][1], B[j][1]);
        if(start <= end) {
           closedInterval.push([start, end]); 
        }
        if(A[i][1] < B[j][1]) {
            i++;
        } else {
            j++;
        }
    }
	return closedInterval;
};

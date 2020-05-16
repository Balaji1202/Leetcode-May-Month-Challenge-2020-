/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    let maxSum = A[0];
    let prevMax = 0;
    let minSum = A[0];
    let prevMin = 0;
	let total = 0;
    let allNegative = true;
    
    for(let i = 0; i < A.length; i++) {
        prevMax > 0 ? prevMax += A[i] : prevMax = A[i];
        prevMin < 0 ? prevMin += A[i] : prevMin = A[i];
        
        if(prevMax > maxSum) maxSum = prevMax;
        if(prevMin < minSum) minSum = prevMin;
		
        if(A[i] > 0) allNegative = false;
        total += A[i];
    }
    
    if(allNegative) return maxSum;
    return Math.max(maxSum, (total - minSum))
};

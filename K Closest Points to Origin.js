/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let distArray = [];
    for(const [x, y] of points) {
        let distance = x**2 + y**2;
        let distObj = {
            distance,
            points: [x, y]
        }
        distArray.push(distObj);
    };
    distArray.sort((a, b) => a.distance - b.distance);
    let result  = distArray.map((a) => a.points);
    result = result.slice(0, K);
    return result;
};

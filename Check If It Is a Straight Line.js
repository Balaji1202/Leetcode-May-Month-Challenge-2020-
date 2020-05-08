/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let xc1 = coordinates[0][0];
    let yc1 = coordinates[0][1];
    let xc2 = coordinates[1][0];
    let yc2 = coordinates[1][1];
    let prevSlope = (yc2 - yc1)/(xc2 - xc1), curSlope;
    for(let i = 2; i < coordinates.length; i++) {
        xc1 = xc2;
        yc1 = yc2;
        xc2 = coordinates[i][0];
        yc2 = coordinates[i][1];
        curSlope = (yc2 - yc1)/(xc2 - xc1);
        if(curSlope !== prevSlope) {
           return false;
        }
    }
    return true;
};

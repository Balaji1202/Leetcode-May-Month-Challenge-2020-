
var fillIt = function(image, i, j, newColor, startingColor) {
    image[i][j] = newColor;
    if(image[i][j-1] === startingColor) {
        image[i][j-1] = newColor;
        fillIt(image, i, j-1, newColor, startingColor)
    } if(image[i][j+1] === startingColor) {
        image[i][j+1] = newColor;
        fillIt(image, i, j+1, newColor, startingColor)
    } if(image[i-1] && image[i-1][j] === startingColor) {
        image[i-1][j] = newColor;
        fillIt(image, i-1, j, newColor, startingColor)
    } if(image[i+1] && image[i+1][j] === startingColor) {
        image[i+1][j] = newColor;
        fillIt(image, i+1, j, newColor, startingColor)
    }
}
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if(image[sr][sc] === newColor) {
        return image;
    }
    fillIt(image, sr, sc, newColor, image[sr][sc]);
    return image;
};

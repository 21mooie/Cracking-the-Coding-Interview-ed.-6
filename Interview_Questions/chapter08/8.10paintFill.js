// Paint Fill: Implement the "paint fill" function that one might see on many image editing programs.
// That is, given a screen (represented by a two-dimensional array of colors), a point, and a new color,
// fill in the surrounding area until the color changes from the original color.

const floodFill = (image, sr, sc, newColor) => {
    function recurse(sr, sc, oldColor, newColor){
        if(sr<0 || sc<0 || sr > image.length-1 || sc > image[sr].length-1){
            return;
        }
        if(image[sr][sc] !== oldColor){
            return;
        }
        image[sr][sc] = newColor; 
        recurse(sr-1, sc, oldColor, newColor);
        recurse(sr, sc-1, oldColor, newColor);     
        recurse(sr, sc+1, oldColor, newColor);   
        recurse(sr+1, sc, oldColor, newColor);
    }
    if (image[sr][sc] !== newColor){
        recurse(sr, sc, image[sr][sc], newColor);
    }
    return image;
};

module.exports = floodFill;
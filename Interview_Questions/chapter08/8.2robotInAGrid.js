// Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
// The robot can only move in two directions, right and down, but certain cells are "off limits"
// such that the robot cannot step on them. Design an algorithm to find a path
// for the robot from the top left to the bottom right.

const robotInAGrid = (grid) => {
    function find(grid, x, y, path, failed){
        path.push([x,y]);
        if(x === grid.length-1 && y === grid[0].length-1){
            return path;
        }
        if(failed.has([x,y])){
            return false;
        }
        let found;
        if(grid[x][y+1] === 0){
            found  = find(grid, x, y+1, path, failed);
        }
        if(grid[x+1][y] === 0){
            found = find(grid, x+1, y, path, failed);
        }
        if(!found){
            failed.add([x, y]);
            return false;
        }
        return found;
    }
    return find(grid, 0, 0, [], new Set());
};

module.exports = robotInAGrid;
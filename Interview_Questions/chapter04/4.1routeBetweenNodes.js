// Route Between Nodes: Given a directed graph, 
// design an algorithm to find out whether there is a route between two nodes.

var routeBetweenNodes = (root, goal) => {
    let bfs = [root];
    let result = false;
    while (bfs.length > 0){
        let top = bfs.shift();
        if (top.data === goal.data){
            result = true;
            break;
        }
        if (top.left){
            bfs.push(top.left);
        }
        if (top.right){
            bfs.push(top.right);
        }
    }
    return result;
}

module.exports = routeBetweenNodes;
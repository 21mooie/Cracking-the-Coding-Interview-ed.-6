// Route Between Nodes: Given a directed graph, 
// design an algorithm to find out whether there is a route between two nodes.

var routeBetweenNodes = (root, goal) => {
    let bfs = [root];
    let level = 0;
    const visited = {};
    let result = false;
    let buffer = [];
    while (bfs.length > 0){
        let top = bfs.shift();
        if (top.data === goal.data){
            result = true;
            break;
        }
        if(visited[top.data] === undefined){
            visited[top.data] = level;
            if(top.neighbors){
                for (let node of top.neighbors){
                    buffer.push(node);
                }
            }
        }
        if(bfs.length === 0){
            level++;
            bfs = buffer;
            buffer = [];
        }
    }
    return result;
}

module.exports = routeBetweenNodes;
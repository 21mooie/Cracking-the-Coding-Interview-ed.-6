// Build Order: You are given a list of projects and a list of dependencies 
// (which is a list of pairs of projects, where the second project is dependent on the first project).
// All of a project'sdependencies must be built before the project is.
// Find a build order that will allow the projects to be built.
// If there is no valid build order, return an error.
function determineNeighbors(project, dependencies){
    let arr = [];
    for (const object of dependencies){
        if(object.first === project){
            arr.push(object.second);
        }
    }
    return arr;
}

function modifiedTopologicalSort(adjacencyList) {
    let answer = [];
    for(let vertex of adjacencyList){
        let neighborPlaced = false;
        let lowestIdx = Number.MAX_SAFE_INTEGER;
        for(let i=0; i<vertex.neighbors.length; i++){
            let ansIdx = null;
            if(
                answer.find((val, idx) => {
                    ansIdx = idx;
                    return val === vertex.neighbors[i]})
            ){
                neighborPlaced = true;
                lowestIdx = Math.min(lowestIdx, ansIdx);
            }
        }
        if(neighborPlaced){
            answer.splice(lowestIdx, 0, vertex.node);
        } else {
            answer.push(vertex.node);
        }
    }
    return answer;
}


const buildOrder = (projects, dependencies) => {
    // build adjacency list of projects with dependencies
    let adjacencyList = [];
    for (const project of projects){
        adjacencyList.push({
            node: project,
            neighbors: determineNeighbors(project, dependencies)
        });
    }
    // weird topological sort variation
    return modifiedTopologicalSort(adjacencyList);
};

module.exports = buildOrder;
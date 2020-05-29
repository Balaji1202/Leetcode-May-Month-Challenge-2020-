/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    function createGraph(numCourses, prerequisites) {
        let graph = new Array(numCourses).fill(null).map(() => []);
        for (const [u, v] of prerequisites) {
            graph[u].push(v);
        }
        return graph;
    }
    
    function hasCycle(graph, node, completed, visited = new Set()) {
        if(completed.has(node)) {
            return false;
        }
        if(visited.has(node)) {
           return true;
        }
        visited.add(node);
        for(let v of graph[node]) {
            if(hasCycle(graph, v, completed, visited)) {
                return true;
            }
        }
        visited.delete(node);
        completed.add(node);
        return false;
    }
    
    let graph = createGraph(numCourses, prerequisites);
    let completed = new Set();
    for (let i = 0; i < graph.length; i++) {
        if(!completed.has(i) && hasCycle(graph, i, completed)) {
            return false;
        }
    }
    return true;
};

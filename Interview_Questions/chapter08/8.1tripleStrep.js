// Triple Step: A child is running up a staircase with n steps
// and can hop either 1 step, 2 steps, or 3 steps at a time.
// Implement a method to count how many possible ways the child can run up the stairs.

const map = new Map();

const tripleStep = (numSteps) => {
    if(map.has(numSteps)){
        return map.get(numSteps);
    }
    if(numSteps<=3){
        map.set(numSteps, numSteps);
    } else {
        map.set(numSteps,tripleStep(numSteps-1) + tripleStep(numSteps-2) + tripleStep(numSteps-3));
    }
    return map.get(numSteps);
};

module.exports = tripleStep;
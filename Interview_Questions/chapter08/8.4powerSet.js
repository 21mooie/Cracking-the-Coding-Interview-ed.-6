// 8.4 Power Set: Write a method to return all subsets of a set.

const powerSet = (set) => {
    function recurse(set, idx){
        let allSubSets;
        if(set.length === idx){
            allSubSets = [];
            allSubSets.push([]);
        } else {
            allSubSets = recurse(set, idx+1);
            let item = set[idx];
            let moreSubSets = [];
            for (let subSet of allSubSets){
                let newSubset = [];
                newSubset.push(subSet);
                newSubset[0].push(item);
                moreSubSets.push(newSubset);
            }
            allSubSets.push(moreSubSets);
        }
        return allSubSets;
    }
    return recurse(set, 0);
};

module.exports = powerSet;
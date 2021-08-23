// Permutations with Dups: Write a method to compute all permutations of a string whose charac-
// ters are not necessarily unique. The list of permutations should not have duplicates.
let set = new Set();
const permutationsWithDups = (string) => {
    if(string === null){
        return null;
    }
    let perms = [];
    if(string === ""){
        if(!set.has("")){
            perms.push("");
            set.add("");
        }
        return perms;
    }
    let letter = string[0];
    let words = permutationsWithDups(string.slice(1));
    for(let word of words){
        for(let i=0; i<string.length; i++){
            let newWord = insertChar(word, letter, i);
            if(!set.has(newWord)){
                perms.push(newWord);
                set.add(newWord);
            }
        }
    }
    return perms;
};

function insertChar(word, letter, loc){
    return word.substring(0, loc) + letter + word.substring(loc);
}

module.exports = permutationsWithDups;
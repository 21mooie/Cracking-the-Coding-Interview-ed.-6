// Permutations without Dups: Write a method to compute all permutations of a string of unique characters.

const permutationsWithoutDups = (string) => {
    if (string === null){
        return null;
    }
    let perm = [];
    if (string === ""){
        perm.push("");
        return perm;
    }
    let letter = string[0];
    let words = permutationsWithoutDups(string.slice(1));
    for (let word of words){
        for (let i=0; i<string.length; i++){
            let newWord = insertChar(word, letter, i);
            perm.push(newWord);
        }
    }
    return perm;
};

function insertChar(word, letter, loc){
    return word.substring(0, loc) + letter + word.substring(loc);
}

module.exports = permutationsWithoutDups;
// Group Anagrams: Write a method to sort an array of strings so that all the anagrams are next to each other.

const groupAnagrams = (array) => {
    const map = new Map();
    for(let string of array){
        let sortString = string.split('').sort().join('');
        if(map.has(sortString)){
            let val = map.get(sortString);
            val.push(string);
        } else {
            map.set(sortString, [string]);
        }
    }
    const result = [];
    for (const val of map.values()){
        result.push(...val);
    }
    return result;
};

module.exports = groupAnagrams
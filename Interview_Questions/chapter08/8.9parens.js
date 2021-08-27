// Parens: Implement an algorithm to print all valid (e.g., properly opened and closed)
// combinations of n pairs of parentheses.

let set = new Set();
const parens = (n) => {
    if (n === 1){
        return ['()'];
    }
    let list = parens(n-1);
    let newList = [];
    for (let val of list){
        let prepend = `()${val}`;
        let middle = `(${val})`;
        let append = `${val}()`;
        if(!set.has(prepend)){
            set.add(prepend);
            newList.push(prepend);
        }
        if(!set.has(middle)){
            set.add(middle);
            newList.push(middle);
        }
        if(!set.has(append)){
            set.add(append);
            newList.push(append);
        }
    }
    return newList;
};

const parensOther = (n) => {
    const array = [];
    function recurse(left, right, string){
        if(left === 0 && right === 0){
            array.push(string);
            return;
        }
        if(left > 0){
            const newString = string+'(';
            recurse(left-1, right, newString);
        }
        if(left < right){
            const newString = string+')';
            recurse(left, right-1, newString);
        }
    }
    recurse(n, n, '');
    return array;
};

exports.parens = parens;
exports.parensOther = parensOther;
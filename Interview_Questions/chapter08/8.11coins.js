// Coins: Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and
// pennies (1 cent), write code to calculate the number of ways of representing n cents.

const coins = (n) => {
    const newArray = [];
    const set = new Set();
    function more(n, obj){
        if(n === 0 ){
            curr.sort((a, b) => a-b);
            if(set.has( ))
            newArray.push(curr);
        }
        // if(Math.floor(n/25) > 0){
        //     if(obj[])
        // }

    }
    function recurse(n){
        if(n === 0){
            return [];
        }
        if(n === 1){
            return [[1]];
        }
        const array = recurse(n-1);
        for (let val of array){
            val.append(1);
        }
        newArray = [];
        set.clear();
        let otherArray = more(n, {});
    }
    return recurse(n).length;
};

const naiveCoins = (n) => {
    function recurse(amount, denoms, idx){
        // base case is the resolved way to return the value
        if(idx >= denoms.length-1){
            return 1;
        }
        let denomAmount = denoms[idx];
        let ways = 0;
        // this determines the number of ways to achieve the amount with
        // 0 number of denom, then 1 number of denom, ....
        for (let i=0; i*denomAmount <= amount; i++){
            let amountRemaining = amount - i  * denomAmount;
            ways+=recurse(amountRemaining, denoms, idx+1);
        }
        return ways;
    }
    return recurse(n, [25, 10, 5, 1], 0);
};

const memoCoins = (n) => {
    let map = [];
    for(let i=0; i<n+1; i++){
        let array = [];
        for(let j=0; j<4; j++){
            array.push(0);
        }
        map.push(array);
    }
    function recurse(amount, denoms, idx, map){
        if(map[amount][idx] > 0){
            return map[amount][idx];
        }

        if(idx >= denoms.length-1){
            return 1;
        }
        let denomAmount = denoms[idx];
        let ways = 0;
        for (let i=0; i*denomAmount <= amount; i++){
            let amountRemaining = amount - i  * denomAmount;
            ways+=recurse(amountRemaining, denoms, idx+1, map);
        }
        map[amount][idx] = ways;
        return ways;
    }
    return recurse(n, [25, 10, 5, 1], 0, map);
};

exports.naiveCoins = naiveCoins;
exports.memoCoins = memoCoins;
// Towers of Hanoi: In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (Le., each disk sits on top of an even larger one). You have the following constraints:
// (1) Only one disk can be moved at a time.
// (2) A disk is slid off the top of one tower onto another tower.
// (3) A disk cannot be placed on top of a smaller disk.
// Write a program to move the disks from the first tower to the last using stacks.

const towersOfHanoi = (num, from, to, aux) => {
    if(num === 1){
        console.log(`Move disk 1 from rod ${from} to rod ${to}`);
        return;
    }
    towersOfHanoi(num-1, from, aux, to);
    console.log(`Move disk ${num} from rod ${from} to rod ${to}`);
    towersOfHanoi(num-1, aux, to, from);
};

module.exports = towersOfHanoi;
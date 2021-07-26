const { CircularArray } = require("../../Interview_Questions/chapter07/7.9circularArray");

const circularArray = new CircularArray();

circularArray.add(14);
circularArray.add(22);
circularArray.add(13);
circularArray.add(-9);
console.log(circularArray.getTail());
console.log(circularArray.popHead());
console.log(circularArray.getHead());
console.log(circularArray.popTail());
console.log(circularArray.getTail());
console.log(circularArray.popHead());
console.log(circularArray.getHead());
console.log(circularArray.getTail());

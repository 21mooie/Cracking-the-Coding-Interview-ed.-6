const ThreeStack = require('../../Interview_Questions/chapter03/3.1threeInOne');

describe('Three in One will implement three stacks using a single array', () => {
    it('and will successfully add to stack 0.', () => {
        let threeStack = new ThreeStack();
        threeStack.push(0, 0);
        expect(threeStack.showStacks()).toEqual([
            0,    null, null,
            null, null, null,
            null, null, null
        ]);
        expect(threeStack.showStackIndexes()).toEqual([ { bottom: 0, top: 0 }, { bottom: 3, top: 3 }, { bottom: 6, top: 6 } ])
        threeStack.push(0, 1);
        expect(threeStack.showStacks()).toEqual([
            0,    1, null,
            null, null, null,
            null, null, null
        ]);
        expect(threeStack.showStackIndexes()).toEqual([ { bottom: 0, top: 1 }, { bottom: 3, top: 3 }, { bottom: 6, top: 6 } ])
    });

    it('and will successfully add to stack 1.', () => {
        let threeStack = new ThreeStack();
        threeStack.push(1, 0);
        expect(threeStack.showStacks()).toEqual([
            null, null, null,
            0,    null, null,
            null, null, null
        ]);
        expect(threeStack.showStackIndexes()).toEqual([ { bottom: 0, top: 0 }, { bottom: 3, top: 3 }, { bottom: 6, top: 6 } ])
        threeStack.push(1, 1);
        expect(threeStack.showStacks()).toEqual([
            null, null, null,
            0,    1,    null,
            null, null, null
        ]);
        expect(threeStack.showStackIndexes()).toEqual([ { bottom: 0, top: 0 }, { bottom: 3, top: 4 }, { bottom: 6, top: 6 } ])
    });

    it('and will successfully add to stack 2.', () => {
        let threeStack = new ThreeStack();
        threeStack.push(2, 0);
        expect(threeStack.showStacks()).toEqual([
            null, null, null,
            null, null, null,
            0,    null, null
        ]);
        expect(threeStack.showStackIndexes()).toEqual([ { bottom: 0, top: 0 }, { bottom: 3, top: 3 }, { bottom: 6, top: 6 } ])
        threeStack.push(2, 1);
        expect(threeStack.showStacks()).toEqual([
            null, null, null,
            null, null, null,
            0,    1,    null
        ]);
        expect(threeStack.showStackIndexes()).toEqual([ { bottom: 0, top: 0 }, { bottom: 3, top: 3 }, { bottom: 6, top: 7 } ])
    });
});
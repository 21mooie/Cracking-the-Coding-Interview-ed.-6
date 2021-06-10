const ThreeStack = require('../../Interview_Questions/chapter03/3.1threeInOne');

describe('Three in One will implement three stacks using a single array', () => {
    describe('and will be able to push to stacks', () => {
        it('by successfully adding to stack 0.', () => {
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
    
        it('by successfully adding to stack 1.', () => {
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
    
        it('by successfully adding to stack 2.', () => {
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

        it('by successfully adding to stack 0 causing resize.', () => {
            let threeStack = new ThreeStack();
            threeStack.push(0, 0);
            threeStack.push(0, 1);
            threeStack.push(0, 2);
            threeStack.push(0, 3);
            expect(threeStack.showStacks()).toEqual([
                0,       1,    2,
                3,    null, null,
                null, null, null,
                null
            ]);
            expect(threeStack.showStackIndexes()).toEqual([ { bottom: 0, top: 3 }, { bottom: 4, top: 4 }, { bottom: 6, top: 6 } ])
        });

        it('by successfully adding to stack 1 causing resize.', () => {
            let threeStack = new ThreeStack();
            threeStack.push(1, 0);
            threeStack.push(1, 1);
            threeStack.push(1, 2);
            threeStack.push(1, 3);
            expect(threeStack.showStacks()).toEqual([
                null, null, null,
                 0,   1,    2,   
                 3, null,  null,
                null
            ]);
            expect(threeStack.showStackIndexes()).toEqual([ { bottom: 0, top: 0 }, { bottom: 3, top: 6 }, { bottom: 7, top: 7 } ])
        });

        it('by successfully adding to stack 2 causing resize.', () => {
            let threeStack = new ThreeStack();
            threeStack.push(2, 0);
            threeStack.push(2, 1);
            threeStack.push(2, 2);
            threeStack.push(2, 3);
            expect(threeStack.showStacks()).toEqual([
                null, null, null,
                null,  null, null,
                 0,   1,    2,   
                3,
            ]);
            expect(threeStack.showStackIndexes()).toEqual([ { bottom: 0, top: 0 }, { bottom: 3, top: 3 }, { bottom: 6, top: 9 } ])
        });
    });
    describe('and it will handle popping from stacks', () => {
        it('will be able to pop from stack 0.', () => {
            let threeStack = new ThreeStack();
            threeStack.push(0, 0);
            threeStack.push(0, 1);
            threeStack.push(0, 2);
            threeStack.push(0, 3);
            expect(threeStack.pop(0)).toEqual(3);
            expect(threeStack.showStacks()).toEqual([
                0,    1,     2,
                null, null, null, 
                null, null, null,
                null
            ]);
            expect(threeStack.showStackIndexes()).toEqual([ { bottom: 0, top: 2 }, { bottom: 4, top: 4 }, { bottom: 6, top: 6 } ])
        });

        it('will be able to pop from stack 2.', () => {
            let threeStack = new ThreeStack();
            threeStack.push(2, 0);
            threeStack.push(2, 1);
            threeStack.push(2, 2);
            threeStack.push(2, 3);
            expect(threeStack.pop(2)).toEqual(3);
            expect(threeStack.showStacks()).toEqual([
                null, null, null,
                null, null, null,
                0,    1,     2,
                null
            ]);
            expect(threeStack.showStackIndexes()).toEqual([ { bottom: 0, top: 0}, { bottom: 3, top: 3 }, { bottom: 6, top: 8} ])
        });
    });
});
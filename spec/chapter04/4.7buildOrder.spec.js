const buildOrder = require('../../Interview_Questions/chapter04/4.7buildOrder');

describe('Build Order', () => {
    it('will return a proper build order given project dependencies.', () => {
        const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
        const dependencies = [
            {
                first: 'a',
                second: 'd'
            },
            {
                first: 'f',
                second: 'b'
            },
            {
                first: 'b',
                second: 'd'
            },
            {
                first: 'f',
                second: 'a'
            },
            {
                first: 'd',
                second: 'c'
            },
        ];
        const result = buildOrder(projects, dependencies);
        expect(result).toEqual([ 'f', 'a', 'b', 'd', 'c', 'e' ]);
    });
})

const HashTable = require("../../Interview_Questions/chapter07/7.12hashtable");

describe('Hashtable', () => {
    let hashtable;
    beforeEach(() => {
        hashtable = new HashTable();
    });
    it('should allow for adding to hashtable.', () => {
        hashtable.add('apple', 'hello');
        expect(hashtable.get('apple')).toEqual('hello');
    });
    it('removing an already removed value should return null.', () => {
        hashtable.add('apple', 'hello');
        hashtable.remove('apple');
        expect(hashtable.get('apple')).toEqual(null);
    });
});
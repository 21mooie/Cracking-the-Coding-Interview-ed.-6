const LinkedList = require("../../utils/LinkedList");
const { palindrome, palindromeStack } = require('../../Interview_Questions/chapter02/2.6palindrome');

describe('Palindrome', () => {
    describe('', () => {
        it('should correctly check if a LinkedList is a palindrome.', () => {
            const list = new LinkedList();
            list.add('d');
            list.add('e');
            list.add('e');
            list.add('d');
            expect(palindrome(list)).toEqual(true);
        });
    
        it('should correctly check if an odd LinkedList is a palindrome.', () => {
            const list = new LinkedList();
            list.add('r');
            list.add('a');
            list.add('c');
            list.add('e');
            list.add('c');
            list.add('a');
            list.add('r');
            expect(palindrome(list)).toEqual(true);
        });
    
        it('should correctly check if a LinkedList is not a palindrome.', () => {
            const list = new LinkedList();
            list.add('d');
            list.add('e');
            list.add('e');
            list.add('a');
            list.add('d');
            expect(palindrome(list)).toEqual(false);
        });
    });
    
    describe('stack', () => {
        it('should correctly check if a LinkedList is a palindrome.', () => {
            const list = new LinkedList();
            list.add('d');
            list.add('e');
            list.add('e');
            list.add('d');
            expect(palindromeStack(list)).toEqual(true);
        });
    
        it('should correctly check if an odd LinkedList is a palindrome.', () => {
            const list = new LinkedList();
            list.add('r');
            list.add('a');
            list.add('c');
            list.add('e');
            list.add('c');
            list.add('a');
            list.add('r');
            expect(palindromeStack(list)).toEqual(true);
        });
    
        it('should correctly check if a LinkedList is not a palindrome.', () => {
            const list = new LinkedList();
            list.add('d');
            list.add('e');
            list.add('e');
            list.add('a');
            list.add('d');
            expect(palindromeStack(list)).toEqual(false);
        });
    })
    
});
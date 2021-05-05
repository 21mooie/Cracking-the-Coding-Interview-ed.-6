// 2.7 Intersection: Given two (singly) linked lists, 
// determine if the two lists intersect. 
// Return the inter- secting node. Note that the intersection is defined based on reference, not value. 
// That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of
// the second linked list, then they are intersecting.

const intersection = (list1, list2) => {
    let head1 = list1, head2 = list2, count1 = 0, count2 = 0;
    while(head1.next) {
        head1 = head1.next;
        count1++;
    }
    while(head2.next) {
        head2 = head2.next;
        count2++;
    }
    if (head1 !== head2) {
        return null;
    }
    let longest, length;
    if(count1 >= count2) {
        longest = head1;
        shortest = head2;
        length = count1 - count2;
    } else {
        longest = head2;
        shortest = head1;
        length = count2 - count1;
    }
    for (let i=0; i<length; i++) {
        longest = longest.next;
    }
    while (shortest !== longest) {
        shortest = shortest.next;
        longest = longest.next;
    }
    return longest;
};
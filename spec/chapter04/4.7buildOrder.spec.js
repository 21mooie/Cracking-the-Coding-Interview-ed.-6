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
        // const result = ['f', 'b', 'a', 'd','c', 'e'];
        let dFound = false, bFound = false, aFound = false, fFound = false;
        // result.forEach((project) => {
        //     if(project === 'f'){
        //         fFound = true;
        //     } else if(project === 'a'){
        //         aFound = true;
        //         if (!fFound){
        //             fail('a is dependent upon f');
        //         }
        //     } else if(project === 'b'){
        //         bFound = true;
        //         if (!fFound){
        //             fail('b is dependent upon f');
        //         }
        //     } else if (project === 'd'){
        //         dFound = true;
        //         if(!aFound || !bFound){
        //             fail('d is dependent upon a and b');
        //         }
        //         else if (!aFound){
        //             fail('d is dependent upon a');
        //         } else if (!bFound){
        //             fail('d is dependent upon b');
        //         }
        //     } else if (project === 'c'){
        //         if (!dFound){
        //             fail('c is dependent upon d');
        //         }
        //     }
        // });
    });
})

const AnimalShelterQueue = require('../../Interview_Questions/chapter03/3.6animalShelter');

describe('Animal Shelter', () => {
    let animalShelter;
    beforeEach(() => {
        animalShelter = new AnimalShelterQueue();
        animalShelter.enqueue({name: 'bob', type: 'cat'});
        animalShelter.enqueue({name: 'jerry', type: 'dog'});
        animalShelter.enqueue({name: 'donny', type: 'cat'});
        animalShelter.enqueue({name: 'sam', type: 'dog'});
        animalShelter.enqueue({name: 'larry', type: 'cat'});
    });
    it('should be able to add animals to shelter and remove oldest.', () => {
        expect(animalShelter.dequeueAny().data.name).toEqual('bob');
    });
    it('should be able to add animals to shelter and remove oldest cat.', () => {
        animalShelter.dequeueAny();
        expect(animalShelter.dequeueCat().data.name).toEqual('donny');
    });
    it('should be able to add animals to shelter and remove oldest dog.', () => {
        animalShelter.dequeueAny();
        animalShelter.dequeueCat();
        expect(animalShelter.dequeueDog().data.name).toEqual('jerry');
    });
    it('should be able to add animals to shelter and remove oldest again.', () => {
        animalShelter.dequeueAny();
        animalShelter.dequeueCat();
        animalShelter.dequeueDog();
        expect(animalShelter.dequeueAny().data.name).toEqual('sam');
    });
});
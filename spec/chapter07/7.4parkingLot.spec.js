const { 
    Car,
    CarType,
    Request,
    ParkingLot
} = require('../../Interview_Questions/chapter07/7.4parkingLot');

describe('ParkingLot', () => {
    it('should properly simulate a working parking lot.', () => {
        const parkingLot = new ParkingLot(4, 20);

        let carA = new Car(CarType.sedan, 'Sarah');
        let carB = new Car(CarType.truck, 'Mandy');
        let carC = new Car(CarType.pickup, 'Tyniqua');
        let carD = new Car(CarType.coop, 'Doug');
        let carE = new Car(CarType.motorcycle, 'Bob');
        let carF = new Car(CarType.minivan, 'Fred');

        expect(parkingLot.addCar(carA)).toEqual('Car Added Successfully');
        expect(parkingLot.addCar(carB)).toEqual('Car Could Not Be Added');
        expect(parkingLot.addCar(carC)).toEqual('Car Added Successfully');
        expect(parkingLot.addCar(carD)).toEqual('Car Added Successfully');
        expect(parkingLot.addCar(carE)).toEqual('Car Added Successfully');
        expect(parkingLot.addCar(carF)).toEqual('Car Could Not Be Added');
        expect(parkingLot.removeCar(carA)).toEqual(carA);
        expect(parkingLot.addCar(carF)).toEqual('Car Added Successfully');
        expect(parkingLot.removeCar(new Car(CarType.batmobile, 'Batman'))).toEqual('Car not found');
        expect(parkingLot.checkMoneyMade()).toEqual(100);
    });
});





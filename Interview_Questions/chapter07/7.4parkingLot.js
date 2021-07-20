// Parking Lot: Design a parking lot using object-oriented principles.
const CarType = {
    sedan: `SEDAN`,
    truck: `TRUCK`,
    motorcycle: `MOTORCYCLE`,
    van: `VAN`,
    minivan: `MINIVAN`,
    coop: `COOP`,
    pickup: `PICKUP`,
    limo: `LIMO`,
    batmobile: `BATMOBILE`   
};
 

class Car {
    constructor(carType, owner){
        this.type = carType;
        this.owner = owner;
    }

    getType(){
        return this.type;
    }
}

const Request = function(owner, type){
    this.owner = owner;
    this.type = type;
};

class ParkingLot {
    constructor(spacesRemaining, cost){
        this.spacesRemaining = spacesRemaining;
        this.cost = cost;
        this.moneyMade = 0;
        this.parkedCars = [];
    }

    isFull(){
        return this.spacesRemaining === 0;
    }

    addCar(car){
        if(!this.isFull() && (car.type !== CarType.limo && car.type !== CarType.truck)){
            this.parkedCars.push(car);
            this.moneyMade+=this.cost;
            this.spacesRemaining--;
            return 'Car Added Successfully';
            
        }
        return 'Car Could Not Be Added';
    }

    removeCar(request){
        let idx = this.parkedCars.findIndex(car => car.owner === request.owner && car.type === request.type);
        if(idx === -1) {
            return 'Car not found';
        }
        let car = this.parkedCars.splice(idx, 1);
        this.spacesRemaining++;
        return car[0];
    }

    checkMoneyMade(){
        return this.moneyMade;
    }
}

exports.Car = Car;
exports.Request = Request;
exports.ParkingLot = ParkingLot;
exports.CarType = CarType;
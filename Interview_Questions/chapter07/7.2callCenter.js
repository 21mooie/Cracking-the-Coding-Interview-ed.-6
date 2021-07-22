// Call Center: Imagine you have a call center with three levels of employees:respondent, manager, and director.
// An incoming telephone call must be first allocated to a respondent who is free.
// If the respondent can't handle the call, he or she must escalate the call to a manager.
// If the manager is not free or not able to handle it, then the call should be escalated to a director.
// Design the classes and data structures for this problem.
// Implement a method dispatchCall() which assigns a call to the first available employee.


const respondent = 'RESPONDENT';
const manager = 'MANAGER';
const director = 'DIRECTOR';

class Call {
    constructor(diff){
        this.difficulty = diff;
    }

    getDifficulty(){
        return this.difficulty;
    }
}

class Employees {
    constructor(level){
        this.occupied = false;
        this.currCall = null;
        this.status = '';
        this.level = level;
    }

    getStatus(){
        return this.status;
    }

    isBusy(){
        return this.occupied;
    }

    canHandle(callDifficulty){
        return this.level >= callDifficulty;
    }

    takeCall(incomingCall){
        if(!this.occupied){
            this.occupied = true;
            this.currCall = incomingCall;
        }
        // if unable to handle return false
        
        // if employee can handle return true
        return this.canHandle(incomingCall.getDifficulty());
    }

    escalate(){
        this.occupied = false;
        this.currCall = null;
    }
}

class Respondent extends Employees {
    constructor(){
        super();
        this.status = respondent;
    }
}

class Manager extends Employees{
    constructor(){
        super();
        this.status = manager;
    }
}

class Director extends Employees{
    constructor(){
        super();
        this.status = director;
    }
}

class CallCenter {
    constructor(){
        this._employees = [];
    }

    // adds employees to array of employee objects
    addEmployees(){}

    updateStatusNeeded(currStatus){
        if(currStatus === respondent){
            return manager;
        }
        if(currStatus === manager){
            return director;
        }
        if(status === director){
            throw new Error(`This call was unable to be handled, ${incomingCall}`);
        }
    }

    //missed queue for waiting for respondent
    //
    dispatchCall(incomingCall){
        let callHandled = false;
        let status = respondent;
        while(!callHandled){
            let taker = this._employees.find(employee => employee.getStatus() === status && !employee.isBusy());
            if(taker){
                if(!taker.takeCall(incomingCall)){
                    taker.escalate();
                    try{
                        status = updateStatusNeeded(status);
                    } catch (err){
                        console.log(err.message);
                        callHandled = true;
                    }
                } else {
                    callHandled = true;
                }
            } else {
                try {
                    status = updateStatusNeeded(status);
                } catch(err){
                    console.log(err.message);
                    callHandled = true;
                }
            }
        }
    }
}
function MultiElevatorSystem(minFloorNo, maxFloorNo) {
    this.elevatorsMap = {};
    this.noOfElevators = 0;
    this.strategy = null;
    this.minFloorNo = minFloorNo;
    this.maxFloorNo = maxFloorNo;
}

MultiElevatorSystem.prototype.addNewElevator = function() {
    const name = "E" + (this.noOfElevators+1);
    const elevator = new Elevator(name);
    this.elevatorsMap[name] = elevator;
    this.noOfElevators++;
    return elevator;
}

MultiElevatorSystem.prototype.enableEnergyEfficiency = function() {

}

MultiElevatorSystem.prototype.getElevatorByName = function(name) {
    return this.elevatorsMap[name];
}

MultiElevatorSystem.prototype.assignRequestToElevator = function(request) {
    const allElevators = Object.values(this.elevatorsMap);
    let foundElevator = null;
    // finding the elevators going in same direction or IDLE
    const sameDirectionMovingElevators = allElevators.filter(ele => {
        if(ele.currentDirection === Direction.NONE) {
            return true;
        }
        if(request.direction === Direction.UP && ele.currentDirection === request.direction) {
            return request.floorNo > ele.currentFloor;
        }
        if(request.direction === Direction.DOWN && ele.currentDirection === request.direction) {
            return request.floorNo < ele.currentFloor;
        } 
        return false;
    });
    if(sameDirectionMovingElevators.length === 0) {
        
    } else {
        const requestAtFloor = request.floorNo;
        let lowestIndex = -1, lowest = this.maxFloorNo - this.minFloorNo;
        sameDirectionMovingElevators.forEach((ele, index) => {
            const diff = Math.abs(ele.currentFloor - requestAtFloor);
            lowestIndex = lowest > diff ? index : lowestIndex;
            lowest = lowest > diff ? diff : lowest;
        });
        foundElevator = sameDirectionMovingElevators[lowestIndex];
        foundElevator.addRequest(request);
    }
    return foundElevator;
}


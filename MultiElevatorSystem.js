function MultiElevatorSystem() {
    this.elevatorsMap = {};
    this.noOfElevators = 0;
    this.strategy = null;
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


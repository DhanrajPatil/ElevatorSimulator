function Elevator(name, currentFloor = 0, status = Status.IDLE, direction = Direction.NONE, requestQueue = []){
    this.name = name;
    this.currentFloor = currentFloor;
    this.status = status;
    this.currentDirection = direction,
    this.requestQueue = requestQueue;
    this.currentRequest = null;
    this.isDoorClosed = true;
}

Elevator.prototype.sortRequests = function() {
    this.requestQueue.sort((req1, req2) => {
        //if(req1.direction && )
        if(this.currentDirection == Direction.UP || this.currentDirection == Direction.NONE) {
            let req1CorrectDir = this.currentFloor < req1.floorNo;
            let req2CorrectDir = this.currentFloor < req1.floorNo;
            if(req1CorrectDir && req2CorrectDir) {
                return req1.floorNo - req2.floorNo;
            } else {
                if(req1CorrectDir) {
                    return -1;
                } else if(req2CorrectDir){
                    return 1;
                } else {
                    return req2.floorNo - req1.floorNo;
                }
            }
        }
        if(this.currentDirection == Direction.DOWN) {
            let req1CorrectDir = this.currentFloor > req1.floorNo;
            let req2CorrectDir = this.currentFloor > req1.floorNo;
            if(req1CorrectDir && req2CorrectDir) {
                return req2.floorNo - req1.floorNo;
            } else {
                if(req1CorrectDir) {
                    return 1;
                } else if(req2CorrectDir){
                    return -1;
                } else {
                    return req1.floorNo - req2.floorNo;
                }
            }
        }
    });
    this.requestQueue = this.requestQueue.map((req, index) => {
        let direction = Direction.NONE;
        if(index == 0) {
            direction = this.currentFloor < req.floorNo ? Direction.UP : Direction.DOWN;
            direction = this.currentFloor == req.floorNo ? req.direction : direction;
        } else {
            direction = this.requestQueue[index - 1].floorNo < req.floorNo ? Direction.UP : Direction.DOWN;
            direction = this.requestQueue[index - 1].floorNo == req.floorNo ? req.direction : direction;
        }
        req.direction = direction;
        return req;
    });
}

Elevator.prototype.pollRequest = function() {
    const completedRequest = this.requestQueue[0];
    this.requestQueue = this.requestQueue.slice(1);
    this.updateCurrentRequest();
    return completedRequest;
}

Elevator.prototype.addRequest = function(request) {
    let index = this.requestQueue.findIndex(req => req.floorNo === request.floorNo && req.direction === request.direction);
    console.log("Found Request", index);
    if(index === -1) {
        const direction = this.currentFloor > request.floorNo ? Direction.DOWN : Direction.UP;
        this.requestQueue = this.currentDirection === direction ? [request, ...this.requestQueue] : [...this.requestQueue, request];
        this.sortRequests();
        this.updateCurrentRequest();
    } else {
        if(request.requestType !== this.requestQueue[index].requestType) {
            this.requestQueue[index].requestType = TYPE.BOTH;
        }
    }
}

Elevator.prototype.updateCurrentRequest = function() {
    this.currentRequest = this.requestQueue[0];
}

Elevator.prototype.updateCurrentStatus = function (displayRefreshHandler, status) {
    this.status = status;
    displayRefreshHandler(this);
}

Elevator.prototype.updateCurrentDirection = function (displayRefreshHandler, direction) {
    let change = 0;
    if(direction) {
        this.currentDirection = direction;
    } else {
        change = this.currentFloor > this.currentRequest.floorNo ? -1 : 1;
        change = this.currentFloor === this.currentRequest.floorNo ? 0 : change;
        this.currentDirection = change == 1 ? Direction.UP : Direction.DOWN;
        this.currentDirection = change === 0 ? this.currentRequest.direction : this.currentDirection;
    }
    displayRefreshHandler(this);
    return change;
}

Elevator.prototype.processCurrentRequest = function() {
    
}
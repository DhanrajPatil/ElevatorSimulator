
function Elevator(id, name = "", currentFloor = 0, status = Status.IDLE, direction = Direction.UP, requestQueue = []){
    this.id = id;
    this.name = name;
    this.currentFloor = currentFloor;
    this.status = status;
    this.currentDirection = direction,
    this.requestQueue = requestQueue;
}

function Request(floorNo, direction = Direction.NONE) {
    this.floorNo = floorNo;
    this.currentDirection = direction;
}

const Direction = Object.freeze({
    UP: 0,
    DOWN: 1,
    NONE: 2
});

const Status = Object.freeze({
    IDLE: 0,
    MOVING: 1,
    MAINTENANCE: 2
});

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
    })
}

Elevator.prototype.pollRequest = function() {
    let currentRequest = this.requestQueue[0];
    this.requestQueue = this.requestQueue.slice(1);
    return currentRequest;
}

Elevator.prototype.addRequest = function(request) {
    let index = this.requestQueue.findIndex(req => req.floorNo === request.floorNo && req.direction === request.direction);
    if(index === -1) {
        const direction = this.currentFloor > request.floorNo ? Direction.DOWN : Direction.UP;
        this.requestQueue = this.currentDirection === direction ? [request, ...this.requestQueue] : [...this.requestQueue, request];
        this.sortRequests();
    }
}

Elevator.prototype.getFirstRequest = function(request) {
    return this.requestQueue[0];
}
const elevatorShouldMoveToNextFloorInMillis = 1500;
const elevatorDoorKeptOpenForMillis = 4000;
const afterDoorCloseStarElevatorInMillis = 1500;
const openCloseButtonColorChangeInMillis = 1000;
const afterElevatorStopDoorOpenInMillis = 1000;

const allElevators = { 
    "E1": new Elevator("E1", "elevator-1")
};

let executeNextRequestTimer = null;
const currentExecutingRequestsForElevators = {};
const elevatorsDoorClosed = {};

let openLiftDoorTimer = openElevatorDoor(allElevators["E1"]);

function insideUserInterfaceButtonClicked(event) {
    const buttonClickLabel = event.target.dataset.requestedFloorNo;
    if(!buttonClickLabel){
        return;
    }
    const currentFloorNo = parseInt(event.currentTarget.dataset.floorNo, 10);
    const requestedFloorNo = parseInt(event.target.dataset.requestedFloorNo, 10);
    const elevatorId = event.currentTarget.dataset.elevatorNo;
    const elevator = allElevators[elevatorId];
    if(isNaN(requestedFloorNo)){
        if(buttonClickLabel === "<>") {
            clearTimeout(openLiftDoorTimer);
            clearTimeout(executeNextRequestTimer);
            openLiftDoorTimer = openElevatorDoor(elevator);
        } else {
            clearTimeout(openLiftDoorTimer);
            closeElevatorDoor(elevator);
        }
        event.target.style.background = "#ec7cac";
        setTimeout( () => {changeDoorOpenCloseButtonColor(elevator, buttonClickLabel)}, openCloseButtonColorChangeInMillis);
    } else {
        if(currentFloorNo != requestedFloorNo) {
            elevator.addRequest(new Request(requestedFloorNo));
            currentExecutingRequestsForElevators[elevator.name] = elevator.getFirstRequest();
            if(elevator.status === Status.IDLE && elevatorsDoorClosed[elevator.name]) {
                updateElevatorStatusToMoving(elevator);
                updateElevatorDirection(elevator);
                clearTimeout(openLiftDoorTimer);
                closeElevatorDoor(elevator);
            }
            event.target.style.background = "#ec7cac";
        }
    }
}

function moveElevetorFromCurrentToDestinationFloor(elevator, change) {
    const elavatorDuctSpaces = getElevatorDuctSpacesByName(elevator.name);
    let i = elevator.currentFloor + change; 
    let elevatorRunning = setInterval(function() {
        moveElevatorToNextOrPrevFloorDuct(elavatorDuctSpaces[i]);
        elevator.currentFloor = i;
        updateCurrentFloorNoOnAllDisplays(elevator);
        if(i == currentExecutingRequestsForElevators[elevator.name].floorNo){
            elevator.pollRequest();
            clearInterval(elevatorRunning);
            setTimeout( () => {openLiftDoorTimer = openElevatorDoor(elevator, true)}, afterElevatorStopDoorOpenInMillis);
        }
        i = i + change;
    }, elevatorShouldMoveToNextFloorInMillis);
}

function moveElevatorToNextOrPrevFloorDuct(prevOrNextDuct){
    const currentFloorDuct = document.querySelector('.current-elevator-floor-duct');
    currentFloorDuct.classList.remove("current-elevator-floor-duct");
    const liftNode = currentFloorDuct.children[0];
    currentFloorDuct.children = [];
    prevOrNextDuct.appendChild(liftNode);
    prevOrNextDuct.classList.add("current-elevator-floor-duct");
}

function executeNextRequestIfExists(elevator) {
    if(elevator.requestQueue.length == 0) {
        elevator.status = Status.IDLE;
        updateCurrentStatusOnAllDisplays(elevator);
        return;
    }
    updateElevatorStatusToMoving(elevator);
    currentExecutingRequestsForElevators[elevator.name] = elevator.getFirstRequest();
    let change = updateElevatorDirection(elevator);
    moveElevetorFromCurrentToDestinationFloor(elevator, change);
}

function updateElevatorDirection(elevator) {
    let change = elevator.currentFloor > currentExecutingRequestsForElevators[elevator.name].floorNo ? -1 : 1;
    elevator.currentDirection = change == 1 ? Direction.UP : Direction.DOWN;
    updateCurrentDirectionOnAllDisplays(elevator);
    return change;
}


function openElevatorDoor(elevator, currentRequestComplete) {
    const elevatorElement = getElevatorElementByName(elevator.name);
    elevatorsDoorClosed[elevator.name] = false;
    elevatorElement.classList.add("open-door-elevator");
    elevatorElement.classList.remove("closed-door-elevator");
    if(currentRequestComplete) {
        changeFloorButtonColorOnRequestComplete(elevator);
    }
    return setTimeout( function(){
        closeElevatorDoor(elevator);
    }, elevatorDoorKeptOpenForMillis)
}

function closeElevatorDoor(elevator) {
    const elevatorElement = getElevatorElementByName(elevator.name);
    elevatorElement.classList.remove("open-door-elevator");
    elevatorElement.classList.add("closed-door-elevator");
    executeNextRequestTimer = setTimeout(() =>  {
        elevatorsDoorClosed[elevator.name] = true;
        executeNextRequestIfExists(elevator);
    }, afterDoorCloseStarElevatorInMillis);
}

function outsideInterfaceButtonClicked(event){
    const direction = event.target.dataset.requestDirection;
    const requestAtFloor = event.currentTarget.requestAtFloor;
    if(!direction){
        return;
    }
    event.target.style.border = "2px Solid #f46c6c";
}
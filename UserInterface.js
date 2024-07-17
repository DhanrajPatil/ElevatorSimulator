const elevatorShouldMoveToNextFloorInMillis = 1500;
const elevatorDoorKeptOpenForMillis = 4000;
const afterDoorCloseStarElevatorInMillis = 1500;
const openCloseButtonColorChangeInMillis = 1000;
const afterElevatorStopDoorOpenInMillis = 1000;

const multiElevatorManager = new MultiElevatorSystem();
const executeNextRequestTimer = {};
const openLiftDoorTimer = {};

function insideUserInterfaceButtonClicked(event) {
    const buttonClickLabel = event.target.dataset.requestedFloorNo;
    if(!buttonClickLabel){
        return;
    }
    const currentFloorNo = parseInt(event.currentTarget.dataset.floorNo, 10);
    const requestedFloorNo = parseInt(event.target.dataset.requestedFloorNo, 10);
    const elevatorName = event.currentTarget.dataset.elevatorName;
    const elevator = multiElevatorManager.getElevatorByName(elevatorName);
    if(isNaN(requestedFloorNo)){
        if(buttonClickLabel === "<>") {
            clearTimeout(openLiftDoorTimer[elevator.name]);
            clearTimeout(executeNextRequestTimer[elevator.name]);
            openLiftDoorTimer[elevator.name] = openElevatorDoor(elevator);
        } else {
            clearTimeout(openLiftDoorTimer[elevator.name]);
            closeElevatorDoor(elevator);
        }
        event.target.style.background = "#ec7cac";
        setTimeout( () => {changeDoorOpenCloseButtonColor(elevator, buttonClickLabel)}, openCloseButtonColorChangeInMillis);
    } else {
        if(currentFloorNo != requestedFloorNo) {
            elevator.addRequest(new Request(requestedFloorNo));
            if(elevator.status === Status.IDLE && elevator.isDoorClosed) {
                updateElevatorStatusToMoving(elevator);
                updateElevatorDirection(elevator);
                clearTimeout(openLiftDoorTimer[elevator.name]);
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
        moveElevatorToNextOrPrevFloorDuct(elavatorDuctSpaces[i], elevator);
        elevator.currentFloor = i;
        updateCurrentFloorNoOnAllDisplays(elevator);
        if(i == elevator.currentRequest.floorNo){
            elevator.pollRequest();
            clearInterval(elevatorRunning);
            setTimeout( () => {openLiftDoorTimer[elevator.name] = openElevatorDoor(elevator, true)}, afterElevatorStopDoorOpenInMillis);
        }
        i = i + change;
    }, elevatorShouldMoveToNextFloorInMillis);
}

function moveElevatorToNextOrPrevFloorDuct(prevOrNextDuct, elevator){
    const elevatorCurrentFloorDuct = getCurrentFloorDuctForElevator(elevator.name);
    elevatorCurrentFloorDuct.classList.remove("current-elevator-floor-duct");
    const liftNode = elevatorCurrentFloorDuct.children[0];
    elevatorCurrentFloorDuct.children = [];
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
    let change = updateElevatorDirection(elevator);
    moveElevetorFromCurrentToDestinationFloor(elevator, change);
}

function updateElevatorDirection(elevator) {
    let change = elevator.currentFloor > elevator.currentRequest.floorNo ? -1 : 1;
    elevator.currentDirection = change == 1 ? Direction.UP : Direction.DOWN;
    updateCurrentDirectionOnAllDisplays(elevator);
    return change;
}


function openElevatorDoor(elevator, currentRequestComplete) {
    const elevatorElement = getElevatorElementByName(elevator.name);
    elevator.isDoorClosed = false;
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
    executeNextRequestTimer[elevator.name] = setTimeout(() =>  {
        elevator.isDoorClosed = true;
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

function installElevator() {
    const elevator = multiElevatorManager.addNewElevator();
    const template = createElevatorTemplate(elevator.name);
    const elevatorContainer = document.querySelector(".all-elevators-container");
    elevatorContainer.appendChild(template);
}
function getElevatorDuctSpacesByName(elevatorName) {
    let className = '.elevator-space-on-floor.' + elevatorName + "-space";
    return document.querySelectorAll(className);
}

function getElevatorElementByName(elevatorName) {
    let className = '.elevator.' + elevatorName;
    return document.querySelector(className);
}

function getElevatorInterfaceByName(elevatorName) {
    const className = '.' + elevatorName + "-interface";
    return document.querySelector(className);
}

function getElevatorInterfaceButtonByNameAndNo(elevatorName, floorNo){
    const buttonInterface = getElevatorInterfaceByName(elevatorName);
    return buttonInterface.querySelector(`[data-requested-floor-no="${floorNo}"]`);
}

function getNoDisplaysForElevator(elevatorName) {
    const className = '.' + elevatorName + "-current-floor-no";
    return document.querySelectorAll(className);
}

function getDirectionDisplaysForElevator(elevatorName) {
    const className = '.' + elevatorName + "-current-direction";
    return document.querySelectorAll(className);
}

function getStatusDisplaysForElevator(elevatorName) {
    const className = '.' + elevatorName + "-current-status";
    return document.querySelectorAll(className);
}

function getCurrentFloorDuctForElevator(elevatorName) {
    const elevatorElementDuctsContainer = document.querySelector('.' + elevatorName);
    return elevatorElementDuctsContainer.querySelector('.current-elevator-floor-duct');
}

function getOuterInterfaceRequestedButtons(request){
    //const elevatorOuterInterface = document.querySelector('.' + elevatorName + '-floor-numbers');
    const dataFloorAttr = `[data-request-at-floor="${request.floorNo}"]`;
    const floorButtons = document.querySelectorAll(dataFloorAttr);
    const dataAttr = `[data-request-direction="${request.direction}"]`
    const requestButtons = [];
    floorButtons.forEach(buttons => requestButtons.push(buttons.querySelector(dataAttr)));
    return requestButtons;
}
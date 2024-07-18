
function updateCurrentFloorNoOnAllDisplays(elevator){
    const allNoDisplays = getNoDisplaysForElevator(elevator.name);
    allNoDisplays.forEach(dis => dis.innerText = elevator.currentFloor);
}

function updateCurrentDirectionOnAllDisplays(elevator){
    const allDirectionDisplays = getDirectionDisplaysForElevator(elevator.name);
    allDirectionDisplays.forEach(dis => dis.innerHTML = DIRECTION_ICON_MAP[elevator.currentDirection]);
}

function updateCurrentStatusOnAllDisplays(elevator){
    const allStatusDisplays = getStatusDisplaysForElevator(elevator.name);
    allStatusDisplays.forEach(dis => dis.innerHTML = STATUS_ICON_MAP[elevator.status]);
}

function changeInnerInterfaceButtonColorOnRequestComplete(elevator) {
    const button = getElevatorInterfaceButtonByNameAndNo(elevator.name, elevator.currentFloor)
    button.style.background = "rgba(178, 223, 249, 0.531)";
}

function changeDoorOpenCloseButtonColor(elevator, doorOpenCloseButtonString) {
    const button = getElevatorInterfaceButtonByNameAndNo(elevator.name, doorOpenCloseButtonString);
    button.style.background = "rgba(178, 223, 249, 0.531)";
}

function changeOuterInterfaceButtonColorOnRequestComplete(request) {
    const buttons = getOuterInterfaceRequestedButtons(request);
    buttons.forEach(button => button.style.border = 'none');
}

function changeOuterInterfaceButtonColorOnRequest(request) {
    const buttons = getOuterInterfaceRequestedButtons(request);
    buttons.forEach(button => button.style.border = "2px Solid #f46c6c");
}
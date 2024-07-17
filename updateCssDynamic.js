
function updateCurrentFloorNoOnAllDisplays(elevator){
    const allNoDisplays = getNoDisplaysForElevator(elevator.name);
    allNoDisplays.forEach(dis => dis.innerText = elevator.currentFloor);
}

function updateCurrentDirectionOnAllDisplays(elevator){
    const allDirectionDisplays = getDirectionDisplaysForElevator(elevator.name);
    const directionIcon = elevator.currentDirection === Direction.UP ? `<i class="fa-solid fa-up-long"></i>` : `<i class="fa-solid fa-down-long"></i>`;
    allDirectionDisplays.forEach(dis => dis.innerHTML = directionIcon);
}

function updateCurrentStatusOnAllDisplays(elevator){
    const allStatusDisplays = getStatusDisplaysForElevator(elevator.name);
    const statusIcon = elevator.status === Status.IDLE ? `<i class="fa-solid fa-hourglass-end"></i>` : `<i class="fa-solid fa-bolt-lightning"></i>`;
    allStatusDisplays.forEach(dis => dis.innerHTML = statusIcon);
}

function changeFloorButtonColorOnRequestComplete(elevator) {
    const button = getElevatorInterfaceButtonByNameAndNo(elevator.name, elevator.currentFloor)
    button.style.background = "rgba(178, 223, 249, 0.531)";
}

function changeDoorOpenCloseButtonColor(elevator, doorOpenCloseButtonString) {
    const button = getElevatorInterfaceButtonByNameAndNo(elevator.name, doorOpenCloseButtonString);
    button.style.background = "rgba(178, 223, 249, 0.531)";
}

function updateElevatorStatusToMoving(elevator) {
    elevator.status = Status.MOVING;
    updateCurrentStatusOnAllDisplays(elevator);
}
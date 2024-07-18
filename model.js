function Request(floorNo, direction = Direction.NONE, type = TYPE.INNER) {
    this.floorNo = floorNo;
    this.direction = direction;
    this.requestType = type;
}

Request.prototype.isOuterType = function() {
    return this.requestType === TYPE.BOTH || this.requestType === TYPE.OUTER;
}

Request.prototype.isInnerType = function() {
    return this.requestType === TYPE.BOTH || this.requestType === TYPE.INNER;
}

const Direction = Object.freeze({
    UP: "UP",
    DOWN: "DOWN",
    NONE: "NONE"
});

const Status = Object.freeze({
    IDLE: "IDLE",
    MOVING: "MOVING",
    MAINTENANCE: "MAINTENANCE",
    STOPPED: "STOPPED",
    OUTAGE: "OUTAGE"
});

const TYPE = Object.freeze({
    INNER: "INNER",
    OUTER: "OUTER",
    BOTH: "BOTH"
});


const STATUS_ICON_MAP = Object.freeze({
    IDLE: `<i class="fa-solid fa-hourglass-end"></i>`,
    MOVING: `<i class="fa-solid fa-bolt-lightning"></i>`,
    MAINTENANCE: `<i class="fa-solid fa-wrench"></i>`,
    STOPPED: `<i class="fa-solid fa-anchor"></i>`,
    OUTAGE: `<i class="fa-solid fa-circle-exclamation"></i>`
});

const DIRECTION_ICON_MAP = Object.freeze({
    UP: `<i class="fa-solid fa-up-long"></i>`,
    DOWN: `<i class="fa-solid fa-down-long"></i>`,
    NONE: `<i class="fa-solid fa-up-down"></i>`
});
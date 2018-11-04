
const directionArray = [//since this is all behind an API going to use little error checking
    "North",
    "East",
    "South",
    "West"
]

class Character {
    constructor({ startPoint, direction } = {}) {
        this._loc = startPoint || []
        this._dir = direction || Object.keys(directionMap)[Math.floor((Math.random()*4))]//gets a random direction
    }
    getPosition() {}
    getDirection() {}
    turnLeft() {}
    turnRight() {}
}

const directionArray = [//since this is all behind an API going to use little error checking
    "north",
    "east",
    "south",
    "west"
]
const numOfDirections = 4;

class Character {
    constructor({ startPoint, direction } = {}) {
        this._loc = startPoint || []
        if (typeof direction === 'string') {
            this._dir = direction.toLowerCase();
            this._dirIdx = directionArray.indexOf(direction.toLowerCase());
        } else {
            this._dirIdx = Math.floor((Math.random()*4))//gets a random direction
            this._dir = direction[this._dirIdx];
        }
    }
    getPosition() {}
    getDirection() {}
    turnLeft() {}
    turnRight() {}
}
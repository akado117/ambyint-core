
const directionArray = [//since this is all behind an API going to use little error checking
    "north",
    "east",
    "south",
    "west"
]
const numOfDirections = directionArray.length - 1;

const directionMapper = {
    north: [0,1],
    east: [1, ],
    south: [0, -1],
    west: [-1, 0]
}

class Character {
    constructor({ startPoint, direction } = {}) {
        this._loc = startPoint || []
        this._prevLoc = [0,0]
        if (typeof direction === 'string') {
            this._dir = direction.toLowerCase();
            this._dirIdx = directionArray.indexOf(direction.toLowerCase());
        } else {
            this._dirIdx = Math.floor((Math.random()*4))//gets a random direction
            this._dir = directionArray[this._dirIdx];
        }
    }
    getPosition() {
        return this._loc
    }
    getDirection() {
        return this._dir
    }
    turnLeft() {
        if (this._dirIdx === 0) {
            this._dirIdx = numOfDirections
        } else {
            this._dirIdx -= 1
        }
        this._dir = directionArray[this._dirIdx]
    }
    turnRight() {
        if (this._dirIdx === numOfDirections) {
            this._dirIdx = 0
        } else {
            this._dirIdx += 1
        }
        this._dir = directionArray[this._dirIdx]
    }
    moveForward(spaces = 1) { //defaulting to 1
        this._prevLoc = this._loc;
        const newLoc = [];

        const mapper  = directionMapper[this._dir]
        for (let i = 0; i < 2; i++) {
            newLoc[i] = this._loc[i] + mapper[i]*spaces
        }
        this._loc = newLoc;
    }
    undueMove() {}
}

export default Character;
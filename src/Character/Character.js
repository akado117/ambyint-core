// since this is all behind an API going to use little error checking
const directionArray = [
  'north',
  'east',
  'south',
  'west',
];
const numOfDirections = directionArray.length - 1;

const directionMapper = {
  north: [0, 1],
  east: [1, 0],
  south: [0, -1],
  west: [-1, 0],
};

class Character {
  constructor({ startPoint, direction, character } = {}) {
    if (startPoint && !Array.isArray(startPoint)) throw new Error('Please pass in an array as start point');

    this._loc = startPoint || [];
    this._prevLoc = [0, 0];

    // parse direction fed in and set dir to it
    // dirIdx used to make it easy to know when directions need to wrap around to beginning again
    if (typeof direction === 'string') {
      const lwrCaseDir = direction.toLowerCase();

      this._dirIdx = directionArray.indexOf(lwrCaseDir);
      if (this._dirIdx === -1) throw new Error('Please pass in a valid direction: north, east, south, west');

      this._dir = lwrCaseDir;
    } else {
      // gets a random direction
      this._dirIdx = Math.floor((Math.random() * 4));
      this._dir = directionArray[this._dirIdx];
    }
    this._character = character;
  }

  getPosition() {
    return this._loc;
  }

  getDirection() {
    return this._dir;
  }

  getCharacter() {
    return this._character;
  }

  turnLeft() {
    if (this._dirIdx === 0) {
      this._dirIdx = numOfDirections;
    } else {
      this._dirIdx -= 1;
    }
    this._dir = directionArray[this._dirIdx];
  }

  turnRight() {
    if (this._dirIdx === numOfDirections) {
      this._dirIdx = 0;
    } else {
      this._dirIdx += 1;
    }
    this._dir = directionArray[this._dirIdx];
  }

  moveForward(spaces = 1) {
    this._prevLoc = this._loc;
    const newLoc = [];

    const mapper = directionMapper[this._dir];
    for (let i = 0; i < 2; i++) {
      newLoc[i] = this._loc[i] + mapper[i] * spaces;
    }
    this._loc = newLoc;
  }

  undoMove() {
    this._loc = this._prevLoc;
  }
}

export default Character;

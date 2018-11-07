import Tatooine from './Tatooine/Tatooine';
import Character from './Character/Character';
import { getRandomInt } from './helpers/dataHelper';

class Main {
  constructor({ characters, locations, gridSize } = {}) {
    this._characters = [];
    this.reset({ characters, locations, gridSize });
  }

  // original implementation renewed both Tatooine and Characters
  // new implementation keeps character objects and reinitializes them then discards unneeded ones
  reset({ characters = [], locations = [], gridSize = [] } = {}) {
    const [width, height] = gridSize;
    this._grid = this._grid || new Tatooine(width, height);
    const grid = this._grid.getGrid();
    const gridL = grid[0].length;
    const gridW = grid.length;

    const oldChars = this._characters;

    this._characters = [];
    for (const charIdx in characters) {
      const initialCoords = locations[charIdx] || [getRandomInt(gridW), getRandomInt(gridL)];
      const newCharConstructorArgs = {
        character: characters[charIdx],
        startPoint: initialCoords,
      };

      // reInitialize characters (performance reasons)
      let character = oldChars[charIdx];
      if (character) {
        this._grid.removeObjectFromLocation(character.getPosition());
        character.constructor(newCharConstructorArgs);
      } else {
        character = new Character(newCharConstructorArgs);
      }

      this._characters.push(character);
      this._grid.setObjectAtLocation(character, initialCoords);
    }

    // remove remaining characters from grid
    for (let i = characters.length; i < oldChars.length; i++) {
      this._grid.removeObjectFromLocation(oldChars[i]);
    }
  }

  report(idx) {
    if (typeof idx !== 'undefined') {
      return this._characters[idx];
    }
    return this._characters;
  }

  turnLeft(idx) {
    if (typeof idx !== 'undefined') {
      return this._characters[idx].turnLeft();
    }
    return this._characters[0].turnLeft();
  }

  turnRight(idx) {
    if (typeof idx !== 'undefined') {
      return this._characters[idx].turnRight();
    }
    return this._characters[0].turnRight();
  }

  moveForward(spaces, idx) {
    const character = this._characters[idx] || this._characters[0];
    character.moveForward(spaces);
    const moveValid = this._grid.checkIfCoordsAreValid(character.getPosition());
    if (!moveValid) {
      character.undoMove();
      return false;
    }
    return true;
  }
}

export default Main;

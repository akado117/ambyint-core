import Main from './index';
import Character from './Character/Character';
import Tatooine from './Tatooine/Tatooine';

jest.mock('./Character/Character');
jest.mock('./Tatooine/Tatooine', () => jest.fn().mockImplementation(() => ({
  getGrid: jest.fn().mockImplementation(() => [[undefined, undefined], [undefined, undefined]]),
  setObjectAtLocation: jest.fn().mockImplementation(() => {}),
  checkIfCoordsAreValid: jest.fn().mockImplementation(() => {}),
  removeObjectFromLocation: jest.fn().mockImplementation(() => {}),
})));

describe('Main Class', () => {
  let mainConstructorArgs;
  beforeEach(() => {
    Character.mockClear();
    Tatooine.mockClear();
    mainConstructorArgs = { characters: ['this', 'is', 'a', 'character'], locations: [[0, 0], [1, 1], [2, 2], [3, 3]] };
  });
  describe('constructor', () => {
    test('should initialize number of characters fed in', () => {
      const origFunc = Main.prototype.reset;
      Main.prototype.reset = jest.fn();
      const main = new Main({ characters: 'test', locations: 'loc' });
      expect(main.reset).toBeCalledWith({ characters: 'test', locations: 'loc' });

      Main.prototype.reset = origFunc;
    });
  });
  describe('reset', () => {
    test('should reinitialize the program', () => {
      const planet = new Main(mainConstructorArgs);
      mainConstructorArgs.characters.pop();
      planet.reset(mainConstructorArgs);

      // create as many characters as fed in
      // 4 for intial build and 3 constructor calls to reinitialize old kept objects
      expect(Character).toHaveBeenCalledTimes(7);
      expect(Character.mock.calls[0][0]).toEqual({ character: 'this', startPoint: mainConstructorArgs.locations[0] });
      expect(Character.mock.calls[3][0]).toEqual({ character: 'character', startPoint: [3, 3] });

      // is called twice as building the main object calls it once
      expect(Tatooine).toHaveBeenCalledTimes(1);
      expect(planet._grid.removeObjectFromLocation).toBeCalledTimes(4);

      const setObjCall = planet._grid.setObjectAtLocation.mock;
      // should set the characters to their proper locations
      expect(setObjCall.calls[0][0]).toEqual(Character.mock.instances[0]);
      expect(setObjCall.calls[0][1]).toEqual(mainConstructorArgs.locations[0]);
      expect(setObjCall.calls[3][1]).toEqual([3, 3]);
    });
  });
  describe('report', () => {
    test('should return all characters stored within Main', () => {
      const planet = new Main(mainConstructorArgs);
      expect(planet.report().length).toEqual(4);
      expect(planet.report()[1]).toBe(planet._characters[1]);
    });
    test('should return character at index passed in', () => {
      const planet = new Main(mainConstructorArgs);
      expect(planet.report(1).length).toEqual(undefined);
      expect(planet.report(1)).toBe(planet._characters[1]);
    });
  });
  describe('turnLeft', () => {
    test('should call first characters turnLeft function', () => {
      const planet = new Main(mainConstructorArgs);
      planet.turnLeft();
      expect(Character.mock.instances[0].turnLeft.mock.calls[0].length).toEqual(0);
    });
    test('should call character at indexes turnLeft function', () => {
      const planet = new Main(mainConstructorArgs);
      planet.turnLeft(2);
      expect(Character.mock.instances[2].turnLeft.mock.calls[0].length).toEqual(0);
    });
  });
  describe('turnRight', () => {
    test('should call first characters turnRight function', () => {
      const planet = new Main(mainConstructorArgs);
      planet.turnRight();
      expect(Character.mock.instances[0].turnRight.mock.calls[0].length).toEqual(0);
    });
    test('should call character at indexes turnRight function', () => {
      const planet = new Main(mainConstructorArgs);
      planet.turnRight(2);
      expect(Character.mock.instances[2].turnRight.mock.calls[0].length).toEqual(0);
    });
  });
  describe('moveForward', () => {
    test('should make first character move forward inputed number of spaces', () => {
      const planet = new Main(mainConstructorArgs);
      planet.moveForward(2);
      expect(Character.mock.instances[0].moveForward.mock.calls[0][0]).toEqual(2);
    });
    test('should make character at index move forward inputed number of spaces', () => {
      const planet = new Main(mainConstructorArgs);
      planet.moveForward(2, 2);
      expect(Character.mock.instances[2].moveForward.mock.calls[0][0]).toEqual(2);
    });
    test('should return false if coords are out of bounds when moving and then undue character move', () => {
      const planet = new Main(mainConstructorArgs);
      planet._grid.checkIfCoordsAreValid.mockImplementation(() => false);
      planet.moveForward(2);
      expect(Character.mock.instances[0].moveForward.mock.calls[0][0]).toEqual(2);
      expect(Character.mock.instances[0].getPosition.mock.calls[0].length).toEqual(0);
      expect(planet._grid.checkIfCoordsAreValid).toHaveBeenCalledTimes(1);
      expect(Character.mock.instances[0].undoMove.mock.calls[0].length).toEqual(0);
    });
  });
});

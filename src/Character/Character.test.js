import Character from './Character';

describe('Class Character', () => {
  let character;
  // beforeEach(() => {
  //     character = new Character()
  // })
  // afterEach(() => {
  //     character = undefined;
  // })
  describe('getPosition', () => {
    test('should get current position', () => {
      character = new Character({ startPoint: [1, 1] });
      expect(character.getPosition()).toEqual([1, 1]);
    });
  });
  describe('getDirection', () => {
    test('should get current position', () => {
      character = new Character({ direction: 'North' });
      expect(character.getDirection()).toEqual('north');
    });
  });
  describe('turnLeft', () => {
    test('should rotate counter clockwise', () => {
      character = new Character({ direction: 'North' });
      character.turnLeft();
      expect(character._dir).toEqual('west');
    });
  });
  describe('turnRight', () => {
    test('should rotate clockwise', () => {
      character = new Character({ direction: 'North' });
      character.turnRight();
      expect(character._dir).toEqual('east');
    });
  });
  describe('moveForward', () => {
    test('should should move forward number of spaces North', () => {
      character = new Character({ direction: 'North', startPoint: [0, 0] });
      character.moveForward(6);
      expect(character._loc).toEqual([0, 6]);
    });
    test('should should move forward number of spaces East', () => {
      character = new Character({ direction: 'East', startPoint: [0, 0] });
      character.moveForward(6);
      expect(character._loc).toEqual([6, 0]);
    });
    test('should should move forward number of spaces South', () => {
      character = new Character({ direction: 'South', startPoint: [0, 6] });
      character.moveForward(6);
      expect(character._loc).toEqual([0, 0]);
    });
    test('should should move forward number of spaces West', () => {
      character = new Character({ direction: 'West', startPoint: [6, 0] });
      character.moveForward(6);
      expect(character._loc).toEqual([0, 0]);
    });
  });
  describe('undueMove', () => {
    test('should undue the previous move', () => {
      character = new Character({ direction: 'North', startPoint: [0, 0] });
      character.moveForward(3);
      expect(character._loc).toEqual([0, 3]);
      character.undueMove();
      expect(character._loc).toEqual([0, 0]);
    });
  });
});

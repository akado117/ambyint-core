import Character from './Character';

describe('Class Character', () => {
  let character;
  let initialCharacterInfo
  beforeEach(() => {
    initialCharacterInfo = { direction: 'North', startPoint: [0, 0] };
  })
  describe('getPosition', () => {
    test('should get current position', () => {
      character = new Character(initialCharacterInfo);
      expect(character.getPosition()).toEqual([0, 0]);
    });
  });
  describe('getDirection', () => {
    test('should get current position', () => {
      character = new Character(initialCharacterInfo);
      expect(character.getDirection()).toEqual('north');
    });
  });
  describe('getCharacter', () => {
    test('should get character property', () => {
      initialCharacterInfo.character = 'test'
      character = new Character(initialCharacterInfo);
      expect(character.getCharacter()).toEqual('test');
    });
  });
  describe('turnLeft', () => {
    test('should rotate counter clockwise', () => {
      character = new Character(initialCharacterInfo);
      character.turnLeft();
      expect(character._dir).toEqual('west');
    });
  });
  describe('turnRight', () => {
    test('should rotate clockwise', () => {
      character = new Character(initialCharacterInfo);
      character.turnRight();
      expect(character._dir).toEqual('east');
    });
  });
  describe('moveForward', () => {
    test('should should move forward number of spaces North', () => {
      character = new Character(initialCharacterInfo);
      character.moveForward(6);
      expect(character._loc).toEqual([0, 6]);
    });
    test('should should move forward number of spaces East', () => {
      initialCharacterInfo.direction = 'East'
      character = new Character(initialCharacterInfo);
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
  describe('undoMove', () => {
    test('should undue the previous move', () => {
      character = new Character(initialCharacterInfo);
      character.moveForward(3);
      expect(character._loc).toEqual([0, 3]);
      character.undoMove();
      expect(character._loc).toEqual([0, 0]);
    });
  });
});

import Tatooine from './Tatooine';

describe('Class Tatooine', () => {
  let character;
  describe('construtor', () => {
    test('should generate a 100 by 100 array on start', () => {
      const tatooine = new Tatooine();
      expect(tatooine._grid.length).toEqual(100);
      expect(tatooine._grid[tatooine._grid.length - 1].length).toEqual(100);
    });
    test('should generate a grid based upon height and width', () => {
      const tatooine = new Tatooine(10, 50);
      expect(tatooine._grid.length).toEqual(10);
      expect(tatooine._grid[tatooine._grid.length - 1].length).toEqual(50);
    });
  });
  describe('_buildGrid', () => {
    test('should build grid with inputed width and length', () => {
      const tatooine = new Tatooine(10, 50);
      const grid = tatooine._buildGrid(10, 15);
      expect(grid.length).toEqual(10);
      expect(grid[4].length).toEqual(15);
      expect(grid[4][4]).toEqual(undefined);
    });
  });
  describe('getGrid', () => {
    test('should return whatever is stored in tatooines grid obj', () => {
      const tatooine = new Tatooine(10, 50);
      tatooine._grid = 'test';
      expect(tatooine.getGrid()).toEqual('test');
    });
  });
  describe('setObjectAtLocation', () => {
    test('should set object passed in at grid locations passed in', () => {
      const tatooine = new Tatooine();
      tatooine.setObjectAtLocation('test', [4, 4]);
      expect(tatooine._grid[4][4]).toEqual('test');
    });
    test('should return false if object already exists at location being attempting to be set', () => {
      const tatooine = new Tatooine(10, 50);
      tatooine.setObjectAtLocation('test', [4, 4]);
      expect(tatooine.setObjectAtLocation('test', [4, 4])).toEqual(false);
    });
  });
  describe('removeObjectFromLocation', () => {
    test('should remove object at grid locations passed in and return it', () => {
      const tatooine = new Tatooine();
      tatooine._grid[4][4] = 'test';
      expect(tatooine._grid[4][4]).toEqual('test');
      expect(tatooine.removeObjectFromLocation([4, 4])).toEqual('test');
      expect(tatooine._grid[4][4]).toEqual(undefined);
    });
  });
  describe('checkIfCoordsAreValid', () => {
    test('should return true if valid coords', () => {
      const tatooine = new Tatooine(4,4);
      expect(tatooine.checkIfCoordsAreValid([3,3])).toEqual(true)
    });
    test('should return false if coords out of bounds north', () => {
        const tatooine = new Tatooine(4,4);
        expect(tatooine.checkIfCoordsAreValid([2,4])).toEqual(false)
    });
    test('should return false if coords out of bounds south', () => {
        const tatooine = new Tatooine(4,4);
        expect(tatooine.checkIfCoordsAreValid([2,-1])).toEqual(false)
    });
    test('should return false if coords out of bounds east', () => {
        const tatooine = new Tatooine(4,4);
        expect(tatooine.checkIfCoordsAreValid([4,2])).toEqual(false)
    });
    test('should return false if coords out of bounds west', () => {
        const tatooine = new Tatooine(4,4);
        expect(tatooine.checkIfCoordsAreValid([-1,2])).toEqual(false)
    });
  });
});

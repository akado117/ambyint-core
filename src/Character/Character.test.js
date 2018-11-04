import Character from "./Character"

describe('Class Character', () => {
    let character
    beforeEach(() => {
        character = new Character()
    })
    afterEach(() => {
        character = undefined;
    })
    describe('getPosition', () => {
        test('should get current position', () => {
            character = new Character({ startPoint: [1,1] })
            expect(character.getPosition()).toEqual([1,1])
        })
    })
    describe('getDirection', () => {
        test('should get current position', () => {
            character = new Character({ startPoint: [1,1] })
            expect(character.getPosition()).toEqual([1,1])
        })
    })
    describe('turnLeft', () => {
        test('should get current position', () => {
            character = new Character({ startPoint: [1,1] })
            character
            expect(actual).toEqual(['Pink Alice', 'Pink Bob', 'Pink Eve'])
        })
    })
    describe('turnRight', () => {
        test('should get current position', () => {
            character = new Character({ startPoint: [1,1] })
            character
            expect(actual).toEqual(['Pink Alice', 'Pink Bob', 'Pink Eve'])
        })
    })
  })
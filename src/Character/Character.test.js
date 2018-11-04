import Character from "./Character"

describe('Class Character', () => {
    let character
    // beforeEach(() => {
    //     character = new Character()
    // })
    // afterEach(() => {
    //     character = undefined;
    // })
    describe('getPosition', () => {
        test('should get current position', () => {
            character = new Character({ startPoint: [1,1] })
            expect(character.getPosition()).toEqual([1,1])
        })
    })
    describe('getDirection', () => {
        test('should get current position', () => {
            character = new Character({ direction: "North" })
            expect(character.getDirection()).toEqual("North")
        })
    })
    describe('turnLeft', () => {
        test('should rotate counter clockwise', () => {
            character = new Character({ direction: "North" })
            character.turnLeft()
            expect(character._direction).toEqual("West")
        })
    })
    describe('turnRight', () => {
        test('should rotate clockwise', () => {
            character = new Character({ direction: "North" })
            character.turnRight()
            expect(character._direction).toEqual("East")
        })
    })
    describe('moveForward', () => {
        test('should should move forward number of spaces defined in arg', () => {
            character = new Character({ direction: "North", startPoint: [0,0] })
            character.moveForward(6)
            expect(character._loc).toEqual([6,0])
        })
        test('should should move forward number of spaces defined based upon facing direction', () => {
            character = new Character({ direction: "East", startPoint: [0,0] })
            character.moveForward(6)
            expect(character._loc).toEqual([0,6])
        })
    })
    describe('undueMove', () => {
        test('should undue the previous move', () => {
            character = new Character({ direction: "North", startPoint: [0,0] })
            character.moveForward(3)
            expect(character._loc).toEqual([3,0])
            character.undueMove()
            expect(character._loc).toEqual([0,0])
        })
    })
  })
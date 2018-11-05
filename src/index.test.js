import Main from './index'
import Character from './Character/Character'
import Tatooine from './Tatooine/Tatooine'
jest.mock('./Character/Character')
jest.mock('./Tatooine/Tatooine', () => {
    return jest.fn().mockImplementation(function() {
      return {
          getGrid: jest.fn().mockImplementation( () => [[undefined, undefined], [undefined, undefined]]),
          setObjectAtLocation: jest.fn().mockImplementation(() => {})
        };
    });
  })

describe('Main Class', () => {
    beforeEach(() => {
        Character.mockClear();
        Tatooine.mockClear();
    });
    describe('constructor', () => {
        test('should initialize number of characters fed in', () => {
            const origFunc = Main.prototype.reset
            Main.prototype.reset = jest.fn()
            const main = new Main({ characters: 'test', locations: 'loc' });
            expect(main.reset).toBeCalledWith({ characters: 'test', locations: 'loc' })

            Main.prototype.reset = origFunc
        })
    })
    describe('reset', () => {
        test('should reinitialize the program', () => {
            const coords = [0,0]
            const planet = new Main()
            planet.reset({characters: ['this', 'is', 'a', 'character'], locations: [coords,[1,1],[2,2],[3,3]]});
            
            expect(Character).toHaveBeenCalledTimes(4);//create as many characters as fed in
            expect(Character.mock.calls[0][0]).toEqual({ character: 'this', startPoint: coords })
            expect(Character.mock.calls[3][0]).toEqual({ character: 'character', startPoint: [3,3] })

            expect(Tatooine).toHaveBeenCalledTimes(2)//is called twice as building the main object calls it once

            const setObjCall = planet._grid.setObjectAtLocation.mock
            expect(setObjCall.calls[0][0]).toEqual(Character.mock.instances[0]);//should set the characters to their proper locations
            expect(setObjCall.calls[0][1]).toEqual(coords);
            expect(setObjCall.calls[3][1]).toEqual([3,3]);
        })
    })
})
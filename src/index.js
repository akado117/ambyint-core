import Tatooine from './Tatooine/Tatooine';
import Character from './Character/Character';
import { getRandomInt } from './helpers/dataHelper'

class Main {
    constructor({ characters, locations, gridSize } = {}) {
        this.reset({ characters, locations, gridSize })
    }

    reset({ characters = [], locations = [], gridSize = [] } = {}) {
        const [ width, height ] = gridSize;
        this._grid = new Tatooine(width, height);
        const grid = this._grid.getGrid();
        const gridL = grid[0].length;
        const gridW = grid.length;

        this._characters = []
        for (const charIdx in characters) {
            const initialCoords =  locations[charIdx] || [getRandomInt(gridW), getRandomInt(gridL)]
            const character = new Character({ 
                character: characters[charIdx],
                startPoint: initialCoords,
            })

            this._characters.push(character)
            this._grid.setObjectAtLocation(character, initialCoords)
        }
    }
}

export default Main

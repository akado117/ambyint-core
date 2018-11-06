class Tatooine {
  constructor(width, height) {
    if (width && height && typeof width === 'number' && typeof height === 'number') {
      this._grid = this._buildGrid(width, height);
    } else {
      this._grid = this._buildGrid(100, 100);
    }
  }

  _buildGrid(width, height) {
    const grid = new Array(width);
    for (let i = 0; i < width; i++) {
      grid[i] = new Array(height);
    }
    return grid;
  }

  getGrid() {
    return this._grid;
  }

  setObjectAtLocation(obj, coords) {
    const [x, y] = coords;
    if (this._grid[x][y]) {
      return false;
    }
    this._grid[x][y] = obj;
    return true;
  }

  removeObjectFromLocation(coords) {
    const [x, y] = coords;
    const obj = this._grid[x][y];
    this._grid[x][y] = undefined;

    return obj;
  }

  checkIfCoordsAreValid([x, y] = []) {
    const width = this._grid.length;
    const height = this._grid[0].length;

    // x is out of bounds of grid
    const isOutsideWidth = x < 0 || x >= width;
    const isOutsideHeight = y < 0 || y >= height;

    if (isOutsideHeight || isOutsideWidth) return false;

    return true;
  }
}

export default Tatooine;

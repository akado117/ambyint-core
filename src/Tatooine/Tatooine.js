class Tatooine {
  constructor(width, height) {
    if (width && height) {
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
  }

  removeObjectFromLocation(coords) {
    const [x, y] = coords;
    const obj = this._grid[x][y];
    this._grid[x][y] = undefined;

    return obj;
  }
}

export default Tatooine;

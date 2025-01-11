class GridExt {

    _grid = null;

    constructor(columns, data) {
        this._grid = document.createElement("div");
        this._grid.classList.add("grid");
        this._grid.innerHTML = text;
    }
}

export function Grid(columns=[], data=[]) {
    const gridExt = new GridExt(columns, data);
    return gridExt._grid;
}
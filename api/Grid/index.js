class GridExt {
    _grid = null;

    constructor(items) {
        this._grid = document.createElement("div");
        this._grid.classList.add("grid");
        for (var i = 0; i < items.length; i++) {
            this._grid.appendChild(items[i]);
        }
    }
}

export function Grid({ columns = 3, items = [] } = {}) {
    const gridExt = new GridExt(items);
    gridExt._grid.style.setProperty('--grid-columns', columns);
    return gridExt._grid;
}

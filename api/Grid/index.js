class GridExt {

    _grid = null;

    constructor(columns, items) {
        this._grid = document.createElement("div");
        this._grid.classList.add("grid");
        this._grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        for (var i=0; i<items.length; i++) {
            this._grid.appendChild(items[i]);
        }
    }
}

export function Grid({columns=3, items=[]} = {}) {
    const gridExt = new GridExt(columns, items);
    return gridExt._grid;
}
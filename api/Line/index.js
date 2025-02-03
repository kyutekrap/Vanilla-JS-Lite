class LineExt {

    _line = null;

    constructor() {
        this._line = document.createElement("div");
        this._line.classList.add("line");
    }
}

export function Line() {
    const lineExt = new LineExt();
    return lineExt._line;
}
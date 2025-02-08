class BorderLineExt {

    _borderLine = null;

    constructor(args) {
        this._borderLine = document.createElement("div");
        this._borderLine.classList.add("borderLine");
        for (var i=0; i < args.length; i++) {
            this._borderLine.appendChild(args[i]);
        }
    }
}

export function BorderLine(...args) {
    const borderLineExt = new BorderLineExt(args);
    return borderLineExt._borderLine;
}
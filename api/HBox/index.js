class HBoxExt {

    _hBox = null;

    constructor(args) {
        this._hBox = document.createElement("div");
        this._hBox.classList.add("hBox");
        for (var i=0; i < args.length; i++) {
            this._hBox.appendChild(args[i]);
        }
    }
}

export function HBox(...args) {
    const hBoxExt = new HBoxExt(args);
    return hBoxExt._hBox;
}
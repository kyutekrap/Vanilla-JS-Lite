class HBoxExt {

    _hBox = null;

    constructor(args) {
        this._hBox = document.createElement("div");
        this._hBox.classList.add("hBox");
        for (var i; i < args.length - 1; i++) {
            if (args[i] instanceof HTMLElement) this._hBox.appendChild(args[i]);
        }
        document.body.appendChild(this._hBox);
    }
}

export function HBox(...args) {
    const hBoxExt = new HBoxExt(args);
    return hBoxExt._hBox;
}
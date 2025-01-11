class VBoxExt {

    _vBox = null;

    constructor(args) {
        this._vBox = document.createElement("div");
        this._vBox.classList.add("vBox");
        for (var i; i < args.length - 1; i++) {
            if (args[i] instanceof HTMLElement) this._vBox.appendChild(args[i]);
        }
        document.body.appendChild(this._vBox);
    }
}

export function VBox(...args) {
    const vBoxExt = new VBoxExt(args);
    return vBoxExt._vBox;
}
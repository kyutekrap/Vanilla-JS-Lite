class VBoxExt {

    _vBox = null;

    constructor(args) {
        this._vBox = document.createElement("div");
        this._vBox.classList.add("vBox");
        for (var i; i < args.length; i++) {
            this._vBox.appendChild(args[i]);
        }
    }
}

export function VBox(...args) {
    const vBoxExt = new VBoxExt(args);
    return vBoxExt._vBox;
}
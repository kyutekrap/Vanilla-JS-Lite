class SmallExt {

    _small = null;

    constructor(text) {
        this._small = document.createElement("small");
        this._small.classList.add("small");
        this._small.innerHTML = text;
    }
}

export function Small(text) {
    const smallExt = new SmallExt(text);
    return smallExt._small;
}
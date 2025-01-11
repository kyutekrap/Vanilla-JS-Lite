class SubHeaderExt {

    _subHeader = null;

    constructor(text) {
        this._subHeader = document.createElement("span");
        this._subHeader.classList.add("subHeader");
        this._subHeader.textContent = text;
    }
}

export function SubHeader(text) {
    const subHeaderExt = new SubHeaderExt(text);
    return subHeaderExt._subHeader;
}
class HeaderExt {

    _header = null;

    constructor(text) {
        this._header = document.createElement("p");
        this._header.classList.add("header");
        this._header.innerHTML = text;
    }
}

export function Header(text) {
    const headerExt = new HeaderExt(text);
    return headerExt._header;
}
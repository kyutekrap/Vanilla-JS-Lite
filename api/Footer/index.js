class FooterExt {

    _footer = null;

    constructor(L, C, R) {
        this._footer = document.createElement("div");
        this._footer.classList.add("footer");
        if (L instanceof HTMLElement) this._footer.appendChild(L);
        if (C instanceof HTMLElement) this._footer.appendChild(C);
        if (R instanceof HTMLElement) this._footer.appendChild(R);
        document.body.appendChild(this._footer);
    }
}

export function Footer(L=null, C=null, R=null) {
    const footerExt = new FooterExt(L, C, R);
    return footerExt._appBar;
}
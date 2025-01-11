class FooterExt {

    _footer = null;

    constructor(L, C, R) {
        this._footer = document.createElement("div");
        this._footer.classList.add("footer");
        const lDiv = document.createElement("div");
        lDiv.classList.add("vBox");
        const cDiv = document.createElement("div");
        cDiv.classList.add("vBox");
        cDiv.style.flex = 1;
        cDiv.style.alignItems = "center";
        cDiv.styl
        const rDiv = document.createElement("div");
        rDiv.classList.add("vBox");
        for (var i=0; i < L.length; i++) {
            lDiv.appendChild(L[i]);
        }
        for (var i=0; i < C.length; i++) {
            cDiv.appendChild(C[i]);
        }
        for (var i=0; i < R.length; i++) {
            rDiv.appendChild(R[i]);
        }
        this._footer.appendChild(lDiv);
        this._footer.appendChild(cDiv);
        this._footer.appendChild(rDiv);
        document.body.appendChild(this._footer);
    }
}

export function Footer({L=[], C=[], R=[]} = {}) {
    const footerExt = new FooterExt(L, C, R);
    return footerExt._footer;
}
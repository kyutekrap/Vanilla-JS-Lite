class FooterExt {

    _footer = null;

    constructor(args) {
        this._footer = document.createElement("div");
        this._footer.classList.add("footer");
        for (var i=0; i < args.length; i++) {
            this._footer.appendChild(args[i]);
        }
        document.body.appendChild(this._footer);
    }
}

export function Footer(...args) {
    const footerExt = new FooterExt(args);
    return footerExt._footer;
}
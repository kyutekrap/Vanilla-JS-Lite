class AppBarExt {

    _appBar = null;

    constructor(L, C, R) {
        this._appBar = document.createElement("div");
        this._appBar.classList.add("appBar");
        if (L instanceof HTMLElement) this._appBar.appendChild(L);
        if (C instanceof HTMLElement) this._appBar.appendChild(C);
        if (R instanceof HTMLElement) this._appBar.appendChild(R);
        document.body.appendChild(this._appBar);
    }
}

export function AppBar(L=null, C=null, R=null) {
    const appBarExt = new AppBarExt(L, C, R);
    return appBarExt._appBar;
}
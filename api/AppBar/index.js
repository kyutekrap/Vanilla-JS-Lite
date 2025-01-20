class AppBarExt {

    _appBar = null;

    constructor(L, R) {
        this._appBar = document.createElement("div");
        this._appBar.classList.add("appBar");
        const lDiv = document.createElement("div");
        lDiv.classList.add("hBox");
        const rDiv = document.createElement("div");
        rDiv.classList.add("hBox");
        for (var i=0; i < L.length; i++) {
            lDiv.appendChild(L[i]);
        }
        for (var i=0; i < R.length; i++) {
            rDiv.appendChild(R[i]);
        }
        this._appBar.appendChild(lDiv);
        this._appBar.appendChild(rDiv);
        document.body.appendChild(this._appBar);
    }
}

export function AppBar({L = [], R = []} = {}) {
    const appBarExt = new AppBarExt(L, R);
    return appBarExt._appBar;
}
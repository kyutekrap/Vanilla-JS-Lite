class AppBarExt {

    _appBar = null;

    constructor(L, C, R) {
        this._appBar = document.createElement("div");
        this._appBar.classList.add("appBar");
        const lDiv = document.createElement("div");
        lDiv.classList.add("hBox");
        const cDiv = document.createElement("div");
        cDiv.classList.add("hBox");
        cDiv.style.flex = 1;
        cDiv.style.alignItems = "center";
        const rDiv = document.createElement("div");
        rDiv.classList.add("hBox");
        for (var i=0; i < L.length; i++) {
            lDiv.appendChild(L[i]);
        }
        for (var i=0; i < C.length; i++) {
            cDiv.appendChild(C[i]);
        }
        for (var i=0; i < R.length; i++) {
            rDiv.appendChild(R[i]);
        }
        this._appBar.appendChild(lDiv);
        this._appBar.appendChild(cDiv);
        this._appBar.appendChild(rDiv);
        document.body.appendChild(this._appBar);
    }
}

export function AppBar({L = [], C = [], R = []} = {}) {
    const appBarExt = new AppBarExt(L, C, R);
    return appBarExt._appBar;
}
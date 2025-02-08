import { HBox } from "../HBox/index.js";

class AppBarExt {

    _appBar = null;

    constructor(args) {
        this._appBar = HBox(...args);
        this._appBar.classList.add("appBar");
        document.body.appendChild(this._appBar);
    }
}

export function AppBar(...args) {
    const appBarExt = new AppBarExt(args);
    return appBarExt._appBar;
}
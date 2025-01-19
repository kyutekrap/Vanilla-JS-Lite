import { closeDrawer } from "/code/index.js";
import { Background } from "../Background/index.js";

class DrawerExt {

    _drawer = null;

    constructor(args) {
        this._drawer = document.createElement("div");
        this._drawer.classList.add("drawer");
        const closeButton = Background({width: "30px", height: "30px", src: "/asset/arrow-left.svg", onClick: closeDrawer});
        closeButton.style.filter = "invert(1)";
        this._drawer.appendChild(closeButton);
        for (var i=0; i < args.length; i++) {
            this._drawer.appendChild(args[i]);
        }
        document.body.appendChild(this._drawer);
    }
}

export function Drawer(...args) {
    const drawerExt = new DrawerExt(args);
    return drawerExt._drawer;
}
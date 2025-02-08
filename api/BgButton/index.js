import { Background } from "../Background/index.js";

class BgButtonExt {

    _bgButton = null;
    _bg = null;

    constructor(src, rounded, width, height, onClick) {
        this._bgButton = document.createElement("div");
        this._bgButton.classList.add("bgButton");
        if (rounded) {
            this._bgButton.classList.add("rounded");
        }
        this._bgButton.style.width = width;
        this._bgButton.style.height = height;
        this._bg = Background({
                    width: width,
                    height: height,
                    src: src,
                    onClick: onClick
                });
        this._bgButton.appendChild(this._bg);
    }
}

export function BgButton({src="", rounded=false, width="auto", height="auto", onClick=()=>{}} = {}) {
    const bgButtonExt = new BgButtonExt(src, rounded, width, height, onClick);
    return bgButtonExt._bgButton;
}
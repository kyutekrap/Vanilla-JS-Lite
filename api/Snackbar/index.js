import {HBox} from "../HBox/index.js";
import {Background} from "../Background/index.js";
import {closeSnackbar} from "/code/index.js";
import {Span} from "../Span/index.js";

class SnackbarExt {

    _snackbar = null;

    constructor() {
        this._snackbar = HBox();
        this._snackbar.classList.add("snackbar");
        const span = Span();
        span.style.flex = 1;
        this._snackbar.appendChild(span);
        const closeButton = Background({
            width: "20px",
            height: "20px",
            src: "/asset/close.svg",
            onClick: closeSnackbar
        });
        closeButton.style.filter = "invert(1)";
        this._snackbar.appendChild(closeButton);
        document.body.appendChild(this._snackbar);
    }
}

export function Snackbar() {
    const snackbarExt = new SnackbarExt();
    return snackbarExt._snackbar;
}
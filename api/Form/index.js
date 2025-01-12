import {VBox} from "../VBox/index.js";
import {HBox} from "../HBox/index.js";

class FormExt {

    _form = null;

    constructor(layout, method, action, enctype) {
        this._form = document.createElement("form");
        this._form.classList.add("form");
        this._form.appendChild(layout === "vertical" ? VBox() : HBox());
        this._form.method = method;
        this._form.action = action;
        this._form.enctype = enctype;
    }
}

export function Form({layout="vertical", method="submit", action="", enctype="multipart/form-data"} = {}) {
    const formExt = new FormExt(layout, method, action, enctype);
    return formExt._form;
}
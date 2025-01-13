import {VBox} from "../VBox/index.js";
import {HBox} from "../HBox/index.js";

class FormExt {

    _form = null;

    constructor(layout, fieldsets) {
        this._form = document.createElement("form");
        this._form.classList.add("form");
        this._form.appendChild(layout === "vertical" ? VBox() : HBox());
        for (var i=0; i < fieldsets.length; i++) {
            this._form.appendChild(fieldsets[i]);
        }
    }
}

export function Form({layout="vertical", fieldsets=[]} = {}) {
    const formExt = new FormExt(layout, fieldsets);
    return formExt._form;
}
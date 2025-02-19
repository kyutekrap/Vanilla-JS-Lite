class FormExt {

    _form = null;

    constructor(layout, fieldsets, onSubmit) {
        this._form = document.createElement("form");
        this._form.classList.add("form");
        this._form.classList.add(layout === "vertical" ? "vbox" : "hbox");
        for (var i=0; i < fieldsets.length; i++) {
            this._form.appendChild(fieldsets[i]);
        }
        this._form.addEventListener("submit", (e) => {
            onSubmit(e);
        });
    }
}

export function Form({layout="vertical", onSubmit=(e)=>{}, fieldsets=[]} = {}) {
    const formExt = new FormExt(layout, fieldsets, onSubmit);
    return formExt._form;
}
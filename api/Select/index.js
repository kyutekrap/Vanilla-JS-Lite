class SelectExt {

    _select = null;

    constructor(options, selected, editable) {
        this._select = document.createElement("select");
        this._select.classList.add("select");
        for (var i=0; i < options.length - 1; i++) {
            if (options[i] instanceof Option) {
                this._select.appendChild(options[i]);
            }
        }
        this._select.value = selected;
        this._select.readOnly = !editable;
    }
}

export function Select(options=[], selected=null, editable=true) {
    const selectExt = new SelectExt(options, selected, editable);
    return selectExt._select;
}
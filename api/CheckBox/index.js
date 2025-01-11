class CheckBoxExt {

    _checkBox = null;

    constructor(checked, editable) {
        this._checkBox = document.createElement("input");
        this._checkBox.classList.add("checkBox");
        this._checkBox.type = "checkbox";
        this._checkBox.checked = checked;
        this._checkBox.readOnly = !editable;
    }
}

export function CheckBox(checked=false, editable=true) {
    const checkBoxExt = new CheckBoxExt(checked, editable);
    return checkBoxExt._checkBox;
}
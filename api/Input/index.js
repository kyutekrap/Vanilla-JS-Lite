class InputExt {

    _input = null;

    constructor(variant, editable, placeholder, content, onChange) {
        this._input = document.createElement("input");
        this._input.classList.add("input");
        this._input.classList.add(variant);
        this._input.value = content;
        this._input.placeholder = placeholder;
        this._input.readOnly = !editable;
        this._input.onChange = onChange;
    }
}

export function Input(variant="line", editable=true, placeholder="", content="", onChange=()=>{}) {
    const inputExt = new InputExt(variant, editable, placeholder, content, onChange);
    return inputExt._input;
}
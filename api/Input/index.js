class InputExt {

    _input = null;

    constructor(variant, editable, placeholder, content) {
        this._input = document.createElement("input");
        this._input.classList.add("input");
        this._input.value = content;
        this._input.placeholder = placeholder;
        this._input.readOnly = !editable;
        this._input.type = variant;
    }
}

export function Input({variant="text", editable=true, placeholder="", content=""} = {}) {
    const inputExt = new InputExt(variant, editable, placeholder, content);
    return inputExt._input;
}
class InputExt {

    _input = null;

    constructor(variant, editable, placeholder, content, width) {
        this._input = document.createElement("input");
        this._input.classList.add("input");
        this._input.value = content;
        this._input.placeholder = placeholder;
        this._input.readOnly = !editable;
        this._input.type = variant;
        this._input.style.width = width;
    }
}

export function Input({variant="text", editable=true, placeholder="", content="", width="100%"} = {}) {
    const inputExt = new InputExt(variant, editable, placeholder, content, width);
    return inputExt._input;
}
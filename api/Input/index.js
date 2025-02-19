class InputExt {

    _input = null;

    constructor(variant, editable, placeholder, content, width, name, required) {
        this._input = document.createElement("input");
        this._input.classList.add("input");
        this._input.value = content;
        this._input.placeholder = placeholder;
        this._input.readOnly = !editable;
        this._input.type = variant;
        this._input.style.width = width;
        this._input.name = name;
        this._input.required = required;
    }
}

export function Input({variant="text", editable=true, placeholder="", content="", width="100%", name="", required=false} = {}) {
    const inputExt = new InputExt(variant, editable, placeholder, content, width, name, required);
    return inputExt._input;
}
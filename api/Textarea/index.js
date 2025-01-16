class TextareaExt {

    _textarea = null;

    constructor(content, lines, editable, placeholder) {
        this._textarea = document.createElement("textarea");
        this._textarea.classList.add("textarea");
        this._textarea.readOnly = !editable;
        this._textarea.placeholder = placeholder;
        this._textarea.value = content;
        this._textarea.rows = lines;
    }
}

export function Textarea({content="", lines=3, editable=true, placeholder=""} = {}) {
    const textareaExt = new TextareaExt(content, lines, editable, placeholder);
    return textareaExt._textarea;
}
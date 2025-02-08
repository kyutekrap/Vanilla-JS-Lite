class TextareaExt {

    _textarea = null;

    constructor(content, lines, editable, placeholder, width, resize) {
        this._textarea = document.createElement("textarea");
        this._textarea.classList.add("textarea");
        this._textarea.readOnly = !editable;
        this._textarea.placeholder = placeholder;
        this._textarea.value = content;
        this._textarea.rows = lines;
        this._textarea.style.width = width;
        this._textarea.style.resize = resize;
    }
}

export function Textarea({content="", lines=3, editable=true, placeholder="", width="100%", resize="both"} = {}) {
    const textareaExt = new TextareaExt(content, lines, editable, placeholder, width, resize);
    return textareaExt._textarea;
}
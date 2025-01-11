class SpanExt {

    _span = null;

    constructor(text) {
        this._span = document.createElement("span");
        this._span.classList.add("span");
        this._span.innerHTML = text;
    }
}

export function Span(text) {
    const spanExt = new SpanExt(text);
    return spanExt._span;
}
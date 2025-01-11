class ParagraphExt {

    _paragraph = null;

    constructor(text) {
        this._paragraph = document.createElement("p");
        this._paragraph.classList.add("paragraph");
        this._paragraph.innerHTML = text;
    }
}

export function Paragraph(text) {
    const paragraphExt = new ParagraphExt(text);
    return paragraphExt._paragraph;
}
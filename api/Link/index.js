import {Span} from "../Span/index.js";
import {Small} from "../Small/index.js";

class LinkExt {

    _link = null;

    constructor(size, variant, content, onClick) {
        this._link = size === "medium" ? Span(content) : Small(content);
        this._link.classList.add("link");
        this._link.classList.add(variant);
        this._link.addEventListener('click', (_) => {
            onClick();
        });
    }
}

export function Link({size="medium", variant="primary", content="", onClick=()=>{}} = {}) {
    const linkExt = new LinkExt(size, variant, content, onClick);
    return linkExt._link;
}
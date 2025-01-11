import {VBox} from "../VBox/index.js";

class SectionExt {

    _section = null;

    constructor(args) {
        this._section = VBox(args);
        this._section.classList.add("section");
        document.body.appendChild(this._section);
    }
}

export function Section(...args) {
    const sectionExt = new SectionExt(args);
    return sectionExt._section;
}
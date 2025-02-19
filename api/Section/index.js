import {VBox} from "../VBox/index.js";

class SectionExt {

    _section = null;

    constructor(args) {
        this._section = VBox();
        this._section.classList.add("section");
        for (var i=0; i < args.length; i++) {
            this._section.appendChild(args[i]);
        }
        document.body.appendChild(this._section);
    }
}

export function Section(...args) {
    const sectionExt = new SectionExt(args);
    return sectionExt._section;
}
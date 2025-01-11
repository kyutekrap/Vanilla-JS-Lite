import {VBox} from "../VBox/index.js";

class AccordionExt {

    _accordion = null;

    constructor(args) {
        this._accordion = VBox(args);
        this._accordion.classList.add("accordion");
    }
}

export function Accordion(...args) {
    const accordionExt = new AccordionExt(args);
    return accordionExt._accordion;
}
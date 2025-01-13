import {VBox} from "../VBox/index.js";
import {HBox} from "../HBox/index.js";
import {Background} from "../Background/index.js";

class AccordionExt {

    _accordion = null;

    constructor(title, body, imageOnClose) {
        this._accordion = VBox();
        this._accordion.classList.add("accordion");

        const header = HBox();
        const headerTitle = document.createElement("span");
        headerTitle.classList.add("subHeader");
        headerTitle.textContent = title;
        headerTitle.style.flex = "1";
        header.appendChild(headerTitle);
        
        const headerImage = Background({width: "25px", height: "25px", src: imageOnClose});
        header.appendChild(headerImage);

        header.style.cursor = "pointer";
        this._accordion.appendChild(header);
        
        for (var i=0; i<body.length; i++) {
            this._accordion.appendChild(body[i]);
        }
    }
}

export function Accordion({title="", body=[], imageOnClose="/asset/chev-down.svg"} = {}) {
    const accordionExt = new AccordionExt(title, body, imageOnClose);
    return accordionExt._accordion;
}
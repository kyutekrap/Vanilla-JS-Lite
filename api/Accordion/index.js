import {VBox} from "../VBox/index.js";
import {HBox} from "../HBox/index.js";
import {Background} from "../Background/index.js";

class AccordionStates {
    _isOpen = false;
}

class AccordionExt extends AccordionStates {
    _accordion = null;

    constructor(title, body, imageOnClose) {
        super();

        this._accordion = document.createElement("div");
        this._accordion.classList.add("accordion");

        const header = HBox();
        header.classList.add("accordion-header");
        const headerTitle = document.createElement("span");
        headerTitle.classList.add("subHeader");
        headerTitle.textContent = title;
        headerTitle.style.flex = "1";
        header.appendChild(headerTitle);
        
        const headerImage = Background({ width: "25px", height: "25px", src: imageOnClose });
        header.appendChild(headerImage);

        this._accordion.appendChild(header);

        const content = VBox();
        content.classList.add("accordion-content");
        for (let i = 0; i < body.length; i++) {
            content.appendChild(body[i]);
        }
        this._accordion.appendChild(content);

        header.addEventListener('click', () => {
            this.toggleAccordion(content, headerImage);
        });
    }

    toggleAccordion(content, headerImage) {
        if (!this._isOpen) {
            content.classList.add("open");
            headerImage.style.transform = "rotate(180deg)";
        } else {
            content.classList.remove("open");
            headerImage.style.transform = "rotate(0deg)";
        }
        this._isOpen = !this._isOpen;
    }
}

export function Accordion({ title = "", body = [], imageOnClose = "/asset/chev-down.svg" } = {}) {
    const accordionExt = new AccordionExt(title, body, imageOnClose);
    return accordionExt._accordion;
}
import {VBox} from "../VBox/index.js";
import {HBox} from "../HBox/index.js";
import {Background} from "../Background/index.js";

class AccordionExt {

    _accordion = null;

    constructor(title, body, imageOnClose) {
        this._accordion = document.createElement("div");
        this._accordion.classList.add("accordion");

        const header = HBox();
        header.classList.add("accordion-header");
        const headerTitle = document.createElement("span");
        headerTitle.classList.add("subHeader");
        headerTitle.textContent = title;
        headerTitle.style.flex = "1";
        header.appendChild(headerTitle);
        
        const headerImage = Background({width: "25px", height: "25px", src: imageOnClose});
        header.appendChild(headerImage);

        header.addEventListener('click', (_) => {
            this.toggleAccordion(header);
        });

        this._accordion.appendChild(header);

        const content = VBox();
        content.classList.add("accordion-content");
        for (var i=0; i<body.length; i++) {
            content.appendChild(body[i]);
        }
        this._accordion.appendChild(content);
    }

    toggleAccordion(header) {
        const content = header.nextElementSibling;
        const isActive = content.style.maxHeight;
    
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.style.maxHeight = null;
        });
    
        if (!isActive) {
            content.style.maxHeight = content.scrollHeight + 40 + "px";
        }
    }
}

export function Accordion({title="", body=[], imageOnClose="/asset/chev-down.svg"} = {}) {
    const accordionExt = new AccordionExt(title, body, imageOnClose);
    return accordionExt._accordion;
}
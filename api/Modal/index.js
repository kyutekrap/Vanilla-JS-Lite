import {VBox} from "../VBox/index.js";
import {closeModal} from "/code/index.js";
import {Background} from "../Background/index.js";

class ModalExt {

    _modal = null;

    constructor() {
        this._modal = document.createElement("div");
        this._modal.classList.add("modal");

        const content = document.createElement("div");
        content.classList.add("modal-content");

        const closeButton = Background({width: "25px", height: "25px", src: "/asset/close.svg", onClick: closeModal});
        closeButton.style.marginLeft = "auto";
        content.appendChild(closeButton);

        const innerContent = VBox();
        content.appendChild(innerContent);
        this._modal.appendChild(content);
        document.body.appendChild(this._modal);
    }
}

export function Modal() {
    const modalExt = new ModalExt();
    return modalExt._modal;
}
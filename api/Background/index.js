import {Small} from "../Small/index.js";

class BackgroundExt {

    _background = null;

    constructor(width, height, src, badge) {
        this._background = document.createElement("div");
        this._background.classList.add("background");
        this._background.style.width = width;
        this._background.style.height = height;
        this._background.style.backgroundImage = `url(${src})`;
        if (badge) {
            const badgeContainer = document.createElement("div");
            const badgeContent = Small(badge);
            badgeContainer.appendChild(badgeContent);
            badgeContainer.classList.add("badgeContainer");
            this._background.appendChild(badgeContainer);
        }
    }
}

export function Background(width="auto", height="auto", src="", badge=null) {
    const backgroundExt = new BackgroundExt(width, height, src, badge);
    return backgroundExt._background;
}
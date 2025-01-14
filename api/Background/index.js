import {Small} from "../Small/index.js";

class BackgroundExt {

    _background = null;

    constructor(width, height, src, badge, onClick) {
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
        if (onClick) {
            this._background.addEventListener('click', (_) => {
                onClick();
            });
            this._background.style.cursor = "pointer";
        }
    }
}

export function Background({width="auto", height="auto", src="", badge=null, onClick=()=>{}} = {}) {
    const backgroundExt = new BackgroundExt(width, height, src, badge, onClick);
    return backgroundExt._background;
}
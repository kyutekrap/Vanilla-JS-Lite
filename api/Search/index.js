import { HBox, Background, Input } from "../index.js";

class SearchExt {

    _search = null;

    constructor(onChange) {
        this._search = HBox();
        this._search.classList.add("search");
        const glass = Background({
            width: "15px",
            height: "15px",
            src: "/asset/glass.svg"
        });
        this._search.appendChild(glass);
        
        const input = Input();
        input.addEventListener("change", (e) => {
            onChange(e);
        });
        this._search.appendChild(input);
    }
}

export function Search({onChange = (e) => {}} = {}) {
    const searchExt = new SearchExt(onChange);
    return searchExt._search;
}
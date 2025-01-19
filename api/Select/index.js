import {Input} from "../Input/index.js";

class SelectExt {

    _select = null;

    constructor(options, selected, editable, placeholder) {
        this._select = document.createElement("div");
        this._select.classList.add("select");

        const input = Input({
            variant: "text",
            editable: editable,
            placeholder: placeholder,
            content: selected
        });
        this._select.appendChild(input);

        const optionContainer = document.createElement("div");
        optionContainer.classList.add("optionContainer");
        for (var i=0; i < options.length; i++) {
            const option = document.createElement("div");
            option.classList.add("option");
            option.innerHTML = options[i];
            option.addEventListener("click", (e) => {
                input.value = e.target.innerHTML;
                this.filterItems(optionContainer, e.target.innerHTML);
            });
            optionContainer.appendChild(option);
        }
        this._select.appendChild(optionContainer);

        input.addEventListener("change", (e) => {
            this.filterItems(optionContainer, e.target.value);
        });
        input.addEventListener("focus", (_) => {
            optionContainer.classList.add("open");
        });
        document.addEventListener("click", (e) => {
            if (e.target !== input) {
                optionContainer.classList.remove("open");
            }
        })
    }

    filterItems(optionContainer, filterKey) {
        Array.from(optionContainer.children).forEach(child => {
            if (!child.innerHTML.toLowerCase().startsWith(filterKey.toLowerCase())) {
                child.classList.add("filter");
            } else {
                child.classList.remove("filter");
            }
        });
    }
}

export function Select({options=[], selected=null, editable=true, placeholder=""} = {}) {
    const selectExt = new SelectExt(options, selected, editable, placeholder);
    return selectExt._select;
}
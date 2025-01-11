class OptionExt {

    _option = null;

    constructor(value, content) {
        this._option = document.createElement("option");
        this._option.classList.add("option");
        this._option.value = value;
        this._option.innerHTML = content;
    }
}

export function Option(value="", content="") {
    const optionExt = new OptionExt(value, content);
    return optionExt._option;
}
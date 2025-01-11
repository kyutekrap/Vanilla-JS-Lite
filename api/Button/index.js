class ButtonExt {

    _button = null;

    constructor(variant, size, content, onClick) {
        this._button = document.createElement("button");
        this._button.classList.add("button");
        this._button.classList.add(variant);
        this._button.classList.add(size);
        this._button.innerHTML = content;
        if (onClick.constructor.name === "AsyncFunction") {
            function onClickWithCallBack() {
                this._button.classList.add("active");
                Promise.all(onClick()).then(_ => {
                    this._button.classList.remove("active");
                });
            }
            this._button.onClick = () => onClickWithCallBack();
        } else {
            this._button.onClick = () => onClick();
        }
    }
}

export function Button({variant="filled", size="medium", content="", onClick=()=>{}} = {}) {
    const buttonExt = new ButtonExt(variant, size, content, onClick);
    return buttonExt._button;
}
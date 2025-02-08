class ButtonExt {

    _button = null;

    constructor(variant, size, content, onClick, type, width) {
        this._button = document.createElement("button");
        this._button.classList.add("button");
        this._button.classList.add(variant);
        this._button.classList.add(size);
        this._button.innerHTML = content;
        this._button.type = type;
        this._button.style.width = width;
        if (onClick.constructor.name === "AsyncFunction") {
            function onClickWithCallBack() {
                this._button.classList.add("active");
                Promise.all(onClick()).then(_ => {
                    this._button.classList.remove("active");
                });
            }
            this._button.addEventListener('click', (_) => {
                onClickWithCallBack();
            });
        } else {
            this._button.addEventListener('click', (_) => {
                onClick();
            });
        }
    }
}

export function Button({variant="filled", size="medium", content="", onClick=()=>{}, type="button", width="100%"} = {}) {
    const buttonExt = new ButtonExt(variant, size, content, onClick, type, width);
    return buttonExt._button;
}
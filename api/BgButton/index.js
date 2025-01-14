class BgButtonExt {

    _bgButton = null;

    constructor(src, rounded, width, height, onClick) {
        this._bgButton = document.createElement("div");
        this._bgButton.classList.add("bgButton");
        if (rounded) this._bgButton.classList.add("rounded");
        this._bgButton.style.width = width;
        this._bgButton.style.height = height;
        this._background.style.backgroundImage = `url(${src})`;
        if (onClick.constructor.name === "AsyncFunction") {
            function onClickWithCallBack() {
                this._bgButton.classList.add("active");
                Promise.all(onClick()).then(_ => {
                    this._bgButton.classList.remove("active");
                });
            }
            this._bgButton.addEventListener('click', (_) => {
                onClickWithCallBack();
            });
        } else {
            this._bgButton.addEventListener('click', (_) => {
                onClick();
            });
        }
    }
}

export function BgButton({src="", rounded=false, width="auto", height="auto", onClick=()=>{}} = {}) {
    const bgButtonExt = new BgButtonExt(src, rounded, width, height, onClick);
    return bgButtonExt._bgButton;
}
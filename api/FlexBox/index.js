class FlexBoxExt {

    _flexBox = null;

    constructor(alignSelf, flexGrow, children) {
        this._flexBox = document.createElement("div");
        this._flexBox.classList.add("flexBox");
        this._flexBox.style.alignSelf = alignSelf;
        this._flexBox.style.flexGrow = flexGrow;
        for (var i=0; i < children.length; i++) {
            this._flexBox.appendChild(children[i]);
        }
    }
}

export function FlexBox({alignSelf="flex-start", flexGrow=0, children=[]} = {}) {
    const flexBoxExt = new FlexBoxExt(alignSelf, flexGrow, children);
    return flexBoxExt._flexBox;
}
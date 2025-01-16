import { Input } from "../Input/index.js";

class FileInputExt {
    _fileInput = null;
    _realFileInput = null;

    constructor(content, editable) {
        this._fileInput = document.createElement("input");
        this._fileInput.classList.add("input");
        this._fileInput.readOnly = true;
        this._fileInput.value = content;

        this._realFileInput = Input({ variant: "file" });
        this._realFileInput.style.display = "none";

        this._fileInput.addEventListener("click", () => {
            if (editable) {
                this._realFileInput.click();
            }
        });

        this._realFileInput.addEventListener("change", (_) => {
            if (editable) {
                const files = Array.from(this._realFileInput.files);
                this.handleFileSelection(files);
            }
        });
    }

    handleFileSelection(files) {
        this._fileInput.value = "";
        files.forEach((file) => {
            this._fileInput.value = `${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
        });
    }
}

export function FileInput({ content = "", editable = true } = {}) {
    const fileInputExt = new FileInputExt(content, editable);
    return fileInputExt._fileInput;
}

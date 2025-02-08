import {Input} from "../Input/index.js";
import {Span} from "../Span/index.js";
import {VBox} from "../VBox/index.js";

class TableStates {
    _filterCol = "";
    _filterDir = null;
    _checkboxes = [];
    _activeIndex = null;
    _columnWidths = [];

    constructor(columns, checkbox, defaultWidth) {
        this._columnWidths = this.getColumnWidths(columns, checkbox, defaultWidth);
    }

    getColumnWidths(columns, checkbox, defaultWidth) {
        var containerWidth = defaultWidth;
        if (!defaultWidth) {
            const rootStyles = getComputedStyle(document.documentElement);
            const defaultWidth = parseFloat(rootStyles.getPropertyValue("--section-width-default"));
            const mobileWidth = parseFloat(rootStyles.getPropertyValue("--section-width-mobile"));

            const percentage = window.matchMedia("(max-width: 768px)").matches ? mobileWidth : defaultWidth;
            containerWidth = window.innerWidth * percentage;
        }

        if (checkbox) {
            const dividedWidth = Math.round((containerWidth - 50) / columns.length - 15);
            const actualWidth = dividedWidth < 150 ? 150 : dividedWidth;
            return ['50px', ...Array(columns.length).fill(`${actualWidth}px`)];
        } else {
            const dividedWidth = Math.round(containerWidth / columns.length - 15);
            const actualWidth = dividedWidth < 150 ? 150 : dividedWidth;
            return Array(columns.length).fill(`${actualWidth}px`);
        }
    }
}

class TableExt extends TableStates {

    _table = null;
    _columns = null;
    _data = null;
    _checkbox = false;

    constructor(columns, data, checkbox, useAutoSort, controls, defaultWidth) {
        super(columns, checkbox, defaultWidth);

        this._columns = columns;
        this._data = data;
        this._checkbox = checkbox;

        this._table = VBox();
        this._table.classList.add("table");

        const innerGrid = document.createElement("div");
        innerGrid.classList.add("inner-grid");
        innerGrid.style.gridTemplateColumns = this._columnWidths.join(" ");

        for (var i=0; i < columns.length; i++) {
            if (i === 0 && checkbox) {
                const checkboxColumn = document.createElement("div");
                checkboxColumn.classList.add("checkbox-column");

                const checkboxInput = Input({
                    variant: "checkbox"
                });
                checkboxInput.addEventListener("change", (e) => {
                    this.updateCheckboxAll(e.target.checked);
                });
                checkboxColumn.appendChild(checkboxInput);

                innerGrid.appendChild(checkboxColumn);
            }
            const column = document.createElement("div");
            column.classList.add("column");

            const columnLink = Span(columns[i]);
            if (useAutoSort) {
                columnLink.style.cursor = "pointer";
                columnLink.addEventListener('click', (_) => {
                    this.sortHandler(columnLink.textContent);
                });
            }
            column.appendChild(columnLink);

            const columnBorder = document.createElement("div");
            columnBorder.classList.add("column-border");
            columnBorder.dataset.index = i;
            columnBorder.addEventListener("mousedown", (e) => this.handleMouseDown(e, innerGrid, checkbox));

            column.appendChild(columnBorder);
            innerGrid.appendChild(column);
        }
        
        for (var i=0; i < data.length; i++) {
            const keys = Object.keys(data[i]);
            for (var j=0; j < columns.length; j++) {
                const column = document.createElement("div");
                column.classList.add("column");

                if (j === 0 && checkbox) {
                    const checkboxColumn = document.createElement("div");
                    checkboxColumn.classList.add("checkbox-column");
                    const checkboxInput = Input({
                        variant: "checkbox"
                    });
                    this._checkboxes.push(checkboxInput);
                    checkboxColumn.appendChild(checkboxInput);
                    innerGrid.appendChild(checkboxColumn);
                }

                if (keys.includes(columns[j])) {
                    const span = Span(data[i][columns[j]]);
                    span.classList.add("cell-span");
                    column.appendChild(span);
                } else {
                    const span = Span("");
                    column.appendChild(span);
                }

                innerGrid.appendChild(column);
            }
        }
        
        this._table.appendChild(innerGrid);
        if (controls) {
            this._table.appendChild(controls);
        }
    }

    updateCheckboxAll(checked) {
        for (var i=0; i<this._checkboxes.length; i++) {
            this._checkboxes[i].checked = checked;
        }
    }

    sortHandler(filterCol) {
        if (this._filterCol === filterCol) {
            this._filterDir *= -1;
        } else {
            this._filterCol = filterCol;
            this._filterDir = 1;
        }
    
        const sortedData = this._data.sort((a, b) => {
            const valA = a[this._filterCol];
            const valB = b[this._filterCol];
    
            if (valA < valB) return -1 * this._filterDir;
            if (valA > valB) return 1 * this._filterDir;
            return 0;
        });
    
        const innerGrid = this._table.querySelector('.inner-grid');
        innerGrid.innerHTML = '';
    
        this.renderHeader(innerGrid);
    
        for (let i = 0; i < sortedData.length; i++) {
            const keys = Object.keys(sortedData[i]);
            for (let j = 0; j < this._columns.length; j++) {
                const column = document.createElement("div");
                column.classList.add("column");
    
                if (j === 0 && this._checkbox) {
                    const checkboxColumn = document.createElement("div");
                    checkboxColumn.classList.add("checkbox-column");
                    const checkboxInput = Input({
                        variant: "checkbox"
                    });
                    this._checkboxes.push(checkboxInput);
                    checkboxColumn.appendChild(checkboxInput);
                    innerGrid.appendChild(checkboxColumn);
                }
    
                if (keys.includes(this._columns[j])) {
                    const span = Span(sortedData[i][this._columns[j]]);
                    span.classList.add("cell-span");
                    column.appendChild(span);
                } else {
                    const span = Span("");
                    column.appendChild(span);
                }
    
                innerGrid.appendChild(column);
            }
        }
    }
    
    renderHeader(innerGrid) {
        for (let i = 0; i < this._columns.length; i++) {
            if (i === 0 && this._checkbox) {
                const checkboxColumn = document.createElement("div");
                checkboxColumn.classList.add("checkbox-column");
    
                const checkboxInput = Input({
                    variant: "checkbox"
                });
                checkboxInput.addEventListener("change", (e) => {
                    this.updateCheckboxAll(e.target.checked);
                });
                checkboxColumn.appendChild(checkboxInput);
    
                innerGrid.appendChild(checkboxColumn);
            }
    
            const column = document.createElement("div");
            column.classList.add("column");
    
            const columnLink = Span(this._columns[i]);
            columnLink.style.cursor = "pointer";
            columnLink.addEventListener('click', () => this.sortHandler(this._columns[i]));
    
            if (this._columns[i] === this._filterCol) {
                columnLink.classList.add("active");
                columnLink.innerHTML = `${columnLink.innerHTML} ${this._filterDir === 1 ? '↑' : '↓'}`;
            } else {
                columnLink.classList.remove("active");
                columnLink.innerHTML = this._columns[i];
            }
    
            column.appendChild(columnLink);
    
            const columnBorder = document.createElement("div");
            columnBorder.classList.add("column-border");
            columnBorder.dataset.index = i;
            columnBorder.addEventListener("mousedown", (e) => this.handleMouseDown(e, innerGrid, checkbox));
    
            column.appendChild(columnBorder);
            innerGrid.appendChild(column);
        }
    }

    handleMouseDown(event, innerGrid, checkbox) {
        const index = parseInt(event.target.dataset.index, 10) + checkbox ? 1 : 0;
        this._activeIndex = index;
        document.addEventListener("mousemove", (e) => this.handleMouseMove(e, innerGrid));
        document.addEventListener("mouseup", (e) => this.handleMouseUp(e));
    }

    handleMouseMove = (event, innerGrid) => {
        if (this._activeIndex !== null) {
            const newWidth = event.clientX - this._table.getBoundingClientRect().left;
            const minWidth = 150;

            this._columnWidths[this._activeIndex] = `${Math.max(minWidth, newWidth)}px`;
            innerGrid.style.gridTemplateColumns = this._columnWidths.join(" ");
        }
    };

    handleMouseUp = () => {
        this._activeIndex = null;
        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mouseup", this.handleMouseUp);
    };
}

export function Table({columns=[], data=[], checkbox=false, useAutoSort=false, controls=null, defaultWidth=null} = {}) {
    const tableExt = new TableExt(columns, data, checkbox, useAutoSort, controls, defaultWidth);
    return tableExt._table;
}
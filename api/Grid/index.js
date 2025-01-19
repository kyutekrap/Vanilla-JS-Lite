import {Input} from "../Input/index.js";
import {Background} from "../Background/index.js";
import {Link} from "../Link/index.js";
import {Span} from "../Span/index.js";

class GridStates {
    _filterCol = "";
}

class GridExt extends GridStates {

    _grid = null;

    constructor(columns, data, checkbox) {
        super();

        this._grid = document.createElement("div");
        this._grid.classList.add("grid");

        const innerGrid = document.createElement("div");
        innerGrid.classList.add("inner-grid");
        innerGrid.style.gridTemplateColumns = this.getColumnWidths(columns, checkbox).join(" ");

        for (var i=0; i < columns.length; i++) {
            if (i === 0 && checkbox) {
                const checkboxColumn = document.createElement("div");
                checkboxColumn.classList.add("checkbox-column");

                const checkboxInput = Input({
                    variant: "checkbox"
                });
                checkboxColumn.appendChild(checkboxInput);

                innerGrid.appendChild(checkboxColumn);
            }
            const column = document.createElement("div");
            column.classList.add("column");

            const columnLink = Link({
                content: columns[i],
                onClick: () => {}
            });
            const filterIcon = Background({
                width: "25px",
                height: "25px",
                src: "/asset/arrow-up.svg"
            });

            const columnBorder = document.createElement("div");
            columnBorder.classList.add("column-border");

            column.appendChild(columnLink);
            column.appendChild(filterIcon);
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
                    checkboxColumn.appendChild(checkboxInput);
                    innerGrid.appendChild(checkboxColumn);
                }

                if (keys.includes(columns[j])) {
                    const span = Span(columns[j]);
                    span.classList.add("cell-span");
                    column.appendChild(span);
                } else {
                    const span = Span("");
                    column.appendChild(span);
                }

                innerGrid.appendChild(column);
            }
        }
        
        this._grid.appendChild(innerGrid);
    }

    getColumnWidths(columns, checkbox) {
        if (checkbox) {
            const dividedWidth = Math.round((window.innerWidth - 50) / columns.length - 15);
            const actualWidth = dividedWidth < 150 ? 150 : dividedWidth;
            return ['50px', ...Array(columns.length).fill(`${actualWidth}px`)];
        } else {
            const dividedWidth = Math.round(window.innerWidth / columns.length - 15);
            const actualWidth = dividedWidth < 150 ? 150 : dividedWidth;
            return Array(columns.length).fill(`${actualWidth}px`);
        }
    }
}

export function Grid({columns=[], data=[], checkbox=false} = {}) {
    const gridExt = new GridExt(columns, data, checkbox);
    return gridExt._grid;
}
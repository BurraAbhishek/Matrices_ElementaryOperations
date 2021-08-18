function renderMultiplyRow() {
    var row = Number(document.getElementById("rowmultiplicationdiv_row").value) - 1;
    try {
        var factor = Number(document.getElementById("rowmultiplicationdiv_factor").value);
        if (!isNaN(factor)) {
            multiplyRow(m, row, factor);
        }
    } catch (e) {
        // Nothing to see here, move along.
    }
}

function renderAddRows() {
    var row1 = Number(document.getElementById("rowadditiondiv_row1").value) - 1;
    var row2 = Number(document.getElementById("rowadditiondiv_row2").value) - 1;
    try {
        var factor = Number(document.getElementById("rowadditiondiv_factor").value);
        if (!isNaN(factor)) {
            addRows(m, row1, row2, factor);
        }
    } catch (e) {
        // Nothing to see here, move along.
    }
}

function renderMultiplyColumn() {
    var column = Number(document.getElementById("colmultiplicationdiv_col").value) - 1;
    try {
        var factor = Number(document.getElementById("colmultiplicationdiv_factor").value);
        if (!isNaN(factor)) {
            multiplyColumn(m, column, factor);
        }
    } catch (e) {
        // Nothing to see here, move along.
    }
}

function renderAddColumns() {
    var column1 = Number(document.getElementById("coladditiondiv_col1").value) - 1;
    var column2 = Number(document.getElementById("coladditiondiv_col2").value) - 1;
    try {
        var factor = Number(document.getElementById("coladditiondiv_factor").value);
        if (!isNaN(factor)) {
            addColumns(m, column1, column2, factor);
        }
    } catch (e) {
        // Nothing to see here, move along.
    }
}
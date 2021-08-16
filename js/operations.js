// row1 -> row1 + row2
function addRows(matrix, row1, row2, factor = 1) {
    for (var i = 0; i < matrix[row1].length; i++) {
        matrix[row1][i] = matrix[row1][i] + (factor * matrix[row2][i]);
    }
    title = "R" + (row1 + 1).toString() + " -> R" + (row1 + 1).toString();
    if(factor != 0) {
        if(factor > 0) {
            title += " + ";
            if(factor != 1) {
                title += factor.toString();
            }
            title += "R" + (row2 + 1).toString();
        } else {
            title += " - ";
            if(factor != -1) {
                title += (0 - factor).toString();
            }
            title += "R" + (row2 + 1).toString();
        }
    }
    render(matrix, document.getElementById("matrix_placeholder"), 1, title);
}

// row -> row * factor
function multiplyRow(matrix, row, factor) {
    for (var i = 0; i < matrix[row].length; i++) {
        matrix[row][i] = matrix[row][i] * factor;
    }
    title = "R" + (row + 1).toString() + " -> "
    if(factor == 0) {
        title += "0";
    } else {
        if(factor == -1) {
            title += "-";
        } else if(factor != 1) {
            title += factor.toString();
        }
        title += "R" + (row + 1).toString()
    }
    render(matrix, document.getElementById("matrix_placeholder"), 1, title);
}

// column1 -> column1 + column2
function addColumns(matrix, column1, column2, factor = 1) {
    for(var i = 0; i < matrix.length; i++) {
        matrix[i][column1] = matrix[i][column1] + (factor * matrix[i][column2]);
    }
    title = "C" + (column1 + 1).toString() + " -> C" + (column1 + 1).toString();
    if(factor != 0) {
        if(factor > 0) {
            title += " + ";
            if(factor != 1) {
                title += factor.toString();
            }
            title += "C" + (column2 + 1).toString();
        } else {
            title += " - ";
            if(factor != -1) {
                title += (0 - factor).toString();
            }
            title += "C" + (column2 + 1).toString();
        }
    }
    render(matrix, document.getElementById("matrix_placeholder"), 1, title);
}

// column -> column * factor
function multiplyColumn(matrix, column, factor) {
    for(var i = 0; i < matrix.length; i++) {
        matrix[i][column] = matrix[i][column] * factor;
    }
    title = "C" + (column + 1).toString() + " -> "
    if(factor == 0) {
        title += "0";
    } else {
        if(factor == -1) {
            title += "-";
        } else if(factor != 1) {
            title += factor.toString();
        }
        title += "C" + (column + 1).toString()
    }
    render(matrix, document.getElementById("matrix_placeholder"), 1, title);
}
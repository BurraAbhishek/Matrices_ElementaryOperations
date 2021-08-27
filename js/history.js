var matrix_operations_history = [];

function saveToHistory(matrix, description = "") {
    history_addition = {
        description: description,
        matrix: JSON.parse(JSON.stringify(matrix)),
    };
    matrix_operations_history.push(history_addition);
}

function undo() {
    return undo_changes(
        matrix_operations_history,
        document.getElementById("matrix_placeholder")
    );
}

function undo_changes(matrix, p) {
    var returned = matrix.pop();
    p.innerHTML = "";
    for (var i = 0; i < matrix.length; i++) {
        render(matrix[i]["matrix"], p, 1, 0, matrix[i]["description"]);
    }
    m = JSON.parse(JSON.stringify(matrix[matrix.length - 1]["matrix"]));
    return returned;
}

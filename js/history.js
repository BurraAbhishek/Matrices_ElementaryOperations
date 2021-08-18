var matrix_operations_history = [];

function saveToHistory(matrix, description = "") {
    history_addition = {
        "description": description,
        "matrix": JSON.parse(JSON.stringify(matrix)),
    };
    matrix_operations_history.push(history_addition);
}

function undo() {
    return undo_changes(matrix_operations_history, document.getElementById("matrix_placeholder"))
}

function undo_changes(m, p) {
    var returned = m.pop();
    p.innerHTML = "";
    for (var i = 0; i < m.length; i++) {
        render(m[i]["matrix"], p, 1, 0, m[i]["description"]);
    }
    return returned;
}

function render(matrix, placeholder, replace = 1, save_to_history = 1, title = "") {
    if (save_to_history == 1) {
        saveToHistory(matrix, title);
    }
    var t = document.createElement("table");
    t.setAttribute("id", "matrix_table")
    for (var i = 0; i < matrix.length; i++) {
        var r = document.createElement("tr");
        for (var j = 0; j < matrix[i].length; j++) {
            var c = document.createElement("td");
            var v = document.createTextNode(matrix[i][j]);
            c.appendChild(v);
            r.appendChild(c);
        }
        t.appendChild(r);
    }
    if (replace == 0) {
        placeholder.innerHTML = "";
    }
    if (title.length > 0) {
        placeholder.innerHTML += "<h2>" + title + "</h2>";
    }
    placeholder.appendChild(t);
}
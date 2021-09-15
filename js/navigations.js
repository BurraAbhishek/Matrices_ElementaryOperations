function toggleAppOptions() {
    var options = [
        "optionsdiv",
        "undodiv",
        "rowmultiplicationdiv",
        "rowadditiondiv",
        "rowswapdiv",
        "colmultiplicationdiv",
        "coladditiondiv",
        "colswapdiv",
    ];
    var chosen = document.getElementById("operationselect").value;
    for (var i = 0; i < options.length; i++) {
        if (chosen == options[i]) {
            document.getElementById(options[i]).style.display = "block";
        } else {
            document.getElementById(options[i]).style.display = "none";
        }
    }
}

toggleAppOptions();

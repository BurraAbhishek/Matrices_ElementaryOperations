function toggleAppOptions() {
    var options = [
        "optionsdiv",
        "rowmultiplicationdiv",
        "rowadditiondiv",
        "colmultiplicationdiv",
        "coladditiondiv",
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

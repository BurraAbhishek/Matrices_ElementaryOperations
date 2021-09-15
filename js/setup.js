function setInitialMatrix(rowcount, columncount, placeholder) {
    placeholder.innerHTML = "";
    var t = document.createElement("table");
    t.setAttribute("id", "matrix_setup_table");
    for (var i = 0; i < rowcount; i++) {
        var r = document.createElement("tr");
        for (var j = 0; j < columncount; j++) {
            var c = document.createElement("td");
            var v = document.createElement("input");
            var id = JSON.stringify(["setup", i, j]);
            v.setAttribute("id", id);
            v.style.textAlign = "center";
            c.appendChild(v);
            r.appendChild(c);
        }
        t.appendChild(r);
    }
    r = document.createElement("tr");
    c = document.createElement("td");
    c.colSpan = columncount;
    var b = document.createElement("button");
    b.setAttribute("class", "submitbtn");
    b.onclick = function () {
        m = matrixSetup(rowcount, columncount);
    };
    var s = document.createTextNode("GO");
    b.appendChild(s);
    c.appendChild(b);
    r.appendChild(c);
    t.appendChild(r);
    placeholder.appendChild(t);
}

function matrixParamSetup() {
    var r = document.getElementById("rowcount").value;
    var c = document.getElementById("colcount").value;
    var p = document.getElementById("matrix-initialize");
    setInitialMatrix(r, c, p);
}

function toNumber(n) {
    m = 0;
    if (!isNaN(Number(n))) {
        m = Number(n);
    } else {
        if (n.indexOf("/") > -1) {
            a = n.split("/");
            if (a[1] == "0" || a[1] == "" || a[0] == "") {
                m = 0;
            }
            try {
                m = Number(Number(a[0]) / Number(a[1]));
            } catch (er) {
                m = 0;
            }
            if (isNaN(m)) {
                m = 0;
            }
        }
    }
    return m;
}

function matrixSetup(r, c) {
    var m = [];
    document.getElementById("matrix-setup-params").style.display = "none";
    document.getElementById("matrix-initialize").style.display = "none";
    for (var i = 0; i < r; i++) {
        var rmatrix = [];
        for (var j = 0; j < c; j++) {
            var id = JSON.stringify(["setup", i, j]);
            rmatrix.push(toNumber(document.getElementById(id).value));
        }
        m.push(rmatrix);
    }
    render(
        m,
        document.getElementById("matrix_placeholder"),
        1,
        1,
        "Given matrix"
    );
    return m;
}

function toggle_colorTheme() {
    var colormode = "matrixoperationscolormode";
    var d = new Date();
    if (typeof (Storage) !== "undefined") {
        // Check if setting is already enabled in local storage.
        if (typeof (localStorage[colormode]) === "undefined") {
            // Initially toggle light and dark mode based on time. Light mode between 6 A.M. and 6 P.M.
            if (d.getHours() >= 6 && d.getHours() < 18) {
                localStorage.setItem(colormode, "Light");
            } else {
                localStorage.setItem(colormode, "Dark");
            }
        }
        // Toggle light and dark mode based on user preferences
        var x = localStorage.getItem(colormode);
        if (x == "Light") {
            color_mode("light");
        } else if (x == "Dark") {
            color_mode("dark");
        }
    } else {
        if (d.getHours() >= 6 && d.getHours() < 18) {
            color_mode("light");
        } else {
            color_mode("dark");
        }
    }
}

function color_mode(theme) {
    var s = document.createElement("link");
    s.rel = "stylesheet";
    s.setAttribute("type", "text/css");
    s.href = "css/" + theme.toString() + ".css";
    document.head.appendChild(s);
}

function chooseColorTheme() {
    var colormode = "matrixoperationscolormode";
    var t = document.getElementById("colorthemeselect").value;
    localStorage.setItem(colormode, t);
}

// Driver progam
toggle_colorTheme();

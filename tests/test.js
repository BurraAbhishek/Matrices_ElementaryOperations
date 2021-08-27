// Custom test case - No framework was used.

var m = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
];

render(m, document.getElementById("matrix_placeholder"), 1, 1, "Given");
// Uncomment to use these.
/*************************
addRows(m, 0, 1, -2);
addColumns(m, 0, 2);
multiplyRow(m, 0, 2);
multiplyColumn(m, 1, -1);
addRows(m, 1, 2, -1);
addRows(m, 1, 0, 0.5);
addRows(m, 1, 2);
multiplyRow(m, 0, 1/2);
**************************/

/**************
 * 1 2 0
 * 1 1 0
 * 1 0 1
 *************/

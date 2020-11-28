// Author Name: Andy Duong, Gregory Pierot
// Author Email: aqduong@csu.fullerton.edu, pierotgregory@csu.fullerton.edu
// Course: CPSC 335-03 M 7:00pm-9:45pm
// This File: draw_grid.js - function that draws grid (called on setup)

function draw_grid() {
    stroke('white');
    strokeWeight(1);
    let sz = g_canvas.cell_size;
    let width = g_canvas.wid * sz;
    let height = g_canvas.hgt * sz;
    for (var i = 0; i < width; i += sz) {
        line(i, 0, i, height);
    }
    for (var j = 0; j < height; j += sz) {
        line(0, j, width, j);
    }
}

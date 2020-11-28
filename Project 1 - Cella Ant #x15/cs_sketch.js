// Author Name: Andy Duong, Gregory Pierot
// Author Email: aqduong@csu.fullerton.edu, pierotgregory@csu.fullerton.edu
// Course: CPSC 335-03 M 7:00pm-9:45pm
// This File: cs_sketch.js - contains the setup and draw function for p5.js
//                              along with the move_bot function

var g_canvas = { cell_size:10, wid:41, hgt:41 };

// create 2D array to keep track of cell colors
var colors = new Array(g_canvas.hgt); // array used to keep track of colors
var temp = new Array(g_canvas.hgt); // used to slice an initiated array
for (var i = 0; i < g_canvas.hgt; i++) {
    temp[i] = 'black';
}
for (var i = 0; i < colors.length; i++) {
    colors[i] = temp.slice(0);
}

// create bot
var g_bot = {dir:'north', x:20, y:20, color:'black'}; 
var moves = 0; // keeps track of number of times ant has moved

// p5.js function called at start
function setup() 
{
    let sz = g_canvas.cell_size;
    let width = g_canvas.wid * sz;
    let height = g_canvas.hgt * sz;
    createCanvas(width, height);
    draw_grid();
    draw_bot();
    //frameRate(1); // used to control speed
}

// p5.js function called every frame
function draw()
{
    if (moves < 1000) { // do not change to value greater than 8838
        move_bot();
        moves++;
    }
}

// function that determines the location/direction and also the cell colors
function move_bot()
{
    //console.log(g_bot.dir); // used for testing
    g_bot.color = colors[g_bot.x][g_bot.y]; // check color of new cell
    // change direction based on color
    if ( (g_bot.color == 'red') || (g_bot.color == 'blue') ) {
        switch(g_bot.dir) {
            case 'north': g_bot.dir = 'east'; break;
            case 'east': g_bot.dir = 'south'; break;
            case 'south': g_bot.dir = 'west'; break;
            case 'west': g_bot.dir = 'north'; break;
        }
    }    
    else {
        switch(g_bot.dir) {
            case 'north': g_bot.dir = 'west'; break;
            case 'east': g_bot.dir = 'north'; break;
            case 'south': g_bot.dir = 'east'; break;
            case 'west': g_bot.dir = 'south'; break;       
        }
    }
    // change color of current cell
    switch(g_bot.color) {
        case 'black': g_bot.color = 'red'; break;
        case 'red': g_bot.color = 'yellow'; break;
        case 'yellow': g_bot.color = 'blue'; break;
        case 'blue': g_bot.color = 'green'; break;
        case 'green': g_bot.color = 'black'; break;
    }
    fill(color(g_bot.color));
    stroke(color('white'));
    colors[g_bot.x][g_bot.y] = g_bot.color; // update color in array
    let x = 1 + g_bot.x * g_canvas.cell_size;
    let y = 1 + g_bot.y * g_canvas.cell_size;
    let big = g_canvas.cell_size - 1;
    rect(x, y, big, big);
    
    // bot disappears here (covered by cell colors)
    
    // move to next cell
    switch(g_bot.dir) {
        case 'north': g_bot.y -= 1; break;
        case 'east': g_bot.x += 1; break;
        case 'south': g_bot.y += 1; break;
        case 'west': g_bot.x -= 1; break;
    }

    // bot reappears here
    draw_bot();
}

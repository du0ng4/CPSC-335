// Author Name: Andy Duong, Gregory Pierot
// Author Email: aqduong@csu.fullerton.edu, pierotgregory@csu.fullerton.edu
// Course: CPSC 335-03 M 7:00pm-9:45pm
// This File: draw_bot.js - function that draws the bot/ant in the form of a triangle
//                          based on current location/direction

function draw_bot() {
    let direction = g_bot.dir;
    let x = g_bot.x * 10;
    let y = g_bot.y * 10;

    fill(color('white'));
    stroke(color('black'));

    switch(direction) {
        case 'north':
            triangle(x + 2, y + 8, x + 5, y + 2, x + 8, y + 8);
            break;
        case 'east':
            triangle(x + 2, y + 2, x + 2, y + 8, x + 8, y + 5);
            break;
        case 'south':
            triangle(x + 2, y + 2, x + 8, y + 2, x + 5, y + 8);
            break;
        case 'west':
            triangle(x + 8, y + 2, x + 8, y + 8, x + 2, y + 5);
            break;
    }
}

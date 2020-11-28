Readme for 335-03-p1-Party

Class: CPSC 335-03
Project 1: Cella Ant #x15
Team Name: Party
Team Members: Andy Duong, Gregory Pierot

This program displays the generational progress of the cellular automaton variant of Langton's Ant, Turk & Propp's Ant #x15.  It is written in P5.js and Javascript with an HTML web page to display it. 

Zip Contents:

    README.txt      This File.

    index.html      This file is used for the webpage for display. Open on a web browser to run the program.

    cs_sketch.js    This javascript file contain P5 functions for drawing as well as the function written to control the ant.

    draw_bot.js     This javascript file contains the function that draws the ant in the form of a white triangle based on direction and position.

    draw_grid.js    This javascript file draws the grid that divides the black canvas into cells.

    p5.js           This file is the p5.js library

    styles.css      This file is an external sytle sheet using css

    complexity_analysis.pdf	complexity analysis for the project.


External Requirements: None

Setup and Installation:
    1. Extract the .zip file into a folder.

    2. To run this program, open the index.html file using a web browser.  The program will run automatticcally
        from then.  To restart the program, refresh the page using the browser.  To control the speed of the program,
        uncomment line 33 of cs_sketch.js and change the value passed into the function call to a preferred speed. 


Known Bugs:
    Due to not having a boundary, if the ant is allowed to make 8838 moves, it will go off the canvas and the program
    will crash.  A boundary was left out since it isn't known what kind of behavior the ant will have when hitting a "wall"

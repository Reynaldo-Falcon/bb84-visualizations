/*
* This code generates polarizer figures for
* both Alice and Bob to be shown in the BB84
* protocol.
*/

/*
* Params:
*   centerPosX and Y: these are the coordinates of the center of the polarizer to be placed.
*   basis: "Rectilinear" for Rectilinear polarizer, "Diagonal" for diagonal polarizer
*/
function polarizer(centerPosX, centerPosY, basis)
{
    // Trapezoid:

    // Drawing trapezoid
    push();
    fill(100); // Gray
    stroke(0); // Black outline color
    strokeWeight(2); // 2 px wide outline
    translate(centerPosX, centerPosY);
    quad(-20, 15, 20, 20, 20, -20, -20, -15);
    pop();


    // Polarization Direction Arrow:

    if(basis == "Rectilinear")
    {
        push();
        fill(0,200,255); // cyan-blue
        stroke(0,200,255);
        strokeWeight(2); // 2 px wide outline
        translate(centerPosX, centerPosY); // Changes coordinate to centerPos temporarily
        line(0, -10, 0, 10);
        triangle(0, -10, -5, -5, 5, -5);
        pop();
    }
    else // Diagonal
    {
        push();
        fill(255,255,0); // bright orange
        stroke(255,255,0);
        strokeWeight(2); // 2 px wide outline
        translate(centerPosX, centerPosY); // Changes coordinate to centerPos temporarily
        rotate(-45*(PI/180)); // 135 degrees or diagonal basis for |1>
        line(0, -10, 0, 10);
        triangle(0, -10, -5, -5, 5, -5);
        pop();
    }

}
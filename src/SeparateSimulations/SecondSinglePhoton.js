function secondSetup()
{
    // Show new canvas
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.position(canvasPosX, canvasPosY);
    canvas.background(30);  // Dark gray color
    BackToMenuButton();

    push();
    textAlign(CENTER, CENTER);  // Will place text's anchor in center
    textSize(30);
    fill(255);  // White text
    text("BB84 with Symmetric Error", textAnchorX, textAnchorY-30);
    
    textSize(24);
    fill(200);  // Slightly gray text
    text("Ideal Single Photons", textAnchorX, textAnchorY);
    
    stroke(255);
    fill(0,0,0,0);
    rect(250, -10, 400, 90);
    pop();

    push();
    textAlign(LEFT, CENTER);  // Will place text's anchor in center
    textSize(30);
    fill(255);  // White text
    text("Alice", 20, 25);
    text("Bob", 125, 25);
    pop();

    //Underlines:

    stroke(255);
    strokeWeight(2);

    // Alice underline
        push();
        line(10,45,95,45);
        // Arrows
        line(52,45,52,55);
        line(52,45,52,55);

        translate(52,55);
        triangle(-5,0,0,5,5,0);
        pop();

    //Bob underline
        push();
        line(110,45,195,45);
        translate(100,0);
        // Arrows
        line(52,45,52,55);
        line(52,45,52,55);

        translate(52,55);
        triangle(-5,0,0,5,5,0);
        pop();


}

function secondDraw()
{

}
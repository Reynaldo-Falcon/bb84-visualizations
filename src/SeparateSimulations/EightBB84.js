function eightSetup()
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
    text("BB84", textAnchorX, textAnchorY-30);
    
    textSize(24);
    fill(200);  // Slightly gray text
    text("in Action", textAnchorX, textAnchorY);
    pop();

    polarizer(canvasWidth/2, canvasHeight/2, "Rectilinear");
    polarizer(canvasWidth/2, canvasHeight*(3/4), "Diagonal");

    push();
    textSize(24);
    fill(200);  // Slightly gray text
    text("Alice", canvasWidth/2, canvasHeight/2);
    text("Bob");
    pop();
    
}

function eightDraw()
{


}

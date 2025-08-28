function firstSetup()
{
    // Show new canvas
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.position(canvasPosX, canvasPosY);
    canvas.background(30);  // Dark gray color
    BackToMenuButton();

    push();
    textAlign(CENTER, CENTER);  // Will place text's anchor in center for both title AND author text
    textSize(30);
    fill(255);  // White text
    text("Core Information-Theoretic Bound", textAnchorX, textAnchorY-30);
    
    textSize(24);
    fill(200);  // Slightly gray text
    text("Devetak-Winter", textAnchorX, textAnchorY);
    pop();
}

function firstDraw()
{

}

// Canvas Variables

    let canvas;
    const canvasWidth = 900;
    const canvasHeight = 450;
    const canvasPosX = 0;
    const canvasPosY = 0;

// Title and Author Text Related

    const textAnchorX = canvasWidth/2;  // Provides anchor for all text horizontally: text spawn from the center
    const textAnchorY = canvasHeight/8; // Provides anchor for all text vertically: text spawns from the top

// Level Switching and Button Setup

    const levelNames = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight"];
    let currentLevel = "menu";
    let UIArray = []; // This will hold all UI elements to clear out easily
    const menuButWidth = 100;
    const menuButHeight = 100;
    const menuButPosY =  canvasPosY + canvasHeight*(3/5);
    const menuButPosX = canvasPosX + canvasWidth*(1/7);
    const menuButOffsetX = (canvasWidth*(1/14))-(menuButWidth*(1/2));

// Back to Menu Button Constants

    const btmButWidth = 100;
    const btmButHeight = 65;
    const btmButPosX = 30;
    const btmButPosY = canvasHeight - btmButHeight - 30;    // Places button anchored from its bottom


// Array with Alice's and Bob's quantum bit measurements and basis
    
    let quantumInfo = [[],[],[],[]];
    // In order: Alice sent Qbit, Alice's basis, Bob's basis, Bob's Qbit measurements


function setup()
{
    MenuSetup();

    // DELETE AFTER TESTING
    UIArrayClear();
    secondSetup();

}

function MenuSetup()
{
    // Generate starting menu canvas
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.position(canvasPosX, canvasPosY);
    canvas.background(100,50,50);  // terracotta color

    // Title Text
    textAlign(CENTER, CENTER);  // Will place text's anchor in center for both title AND author text
    textSize(48);
    fill(255);  // White text
    text("Secret Key Sharing", textAnchorX, textAnchorY);
    text("in", textAnchorX, textAnchorY + 45);
    text("QKD Simulations", textAnchorX, textAnchorY + 90);

    // Author Text
    textSize(24);
    fill(200);  // Slightly gray text
    text("Reynaldo J. Falcón Torres", textAnchorX, textAnchorY + 140);

    // Level Buttons
    const firstButton = createButton('Core Information-Theoretic Bound');
    const secondButton = createButton('BB84: Ideal Single Photon');
    const thirdButton = createButton('BB84: Practical Error-Correction Leakage');
    const fourthButton = createButton('Conversion to Per-Signal Sent');
    const fifthButton = createButton('Weak-Coherent BB84');
    const sixthButton = createButton('Finite-Size Key Rate (Consevative)');
    const seventhButton = createButton('Example');

    // Full BB84 protocol animated
    const eightButton = createButton('BB84 in Action');

    // UI array for easy level switching and clearing
    UIArray.push(firstButton);    // Exclude text(), those go away when canvas changes automatically
    UIArray.push(secondButton);
    UIArray.push(thirdButton);
    UIArray.push(fourthButton);
    UIArray.push(fifthButton);
    UIArray.push(sixthButton);
    UIArray.push(seventhButton);
    UIArray.push(eightButton);

    // Buttons Set-Up
    for(let i = 0; i<UIArray.length; i++)
    {

        // BB84 in Action button goes separately
        if(i == 7)
        {
            // Sizing, positioning, and stylizing the buttons
            UIArray[i].size(menuButWidth*6, menuButHeight/3);
            UIArray[i].position(canvasPosX + canvasWidth/2 - menuButWidth*3, canvasPosY + canvasHeight*(7/8));
        }
        else
        {
            // Sizing, positioning, and stylizing the buttons
            UIArray[i].size(menuButWidth, menuButHeight);
            UIArray[i].position(menuButPosX*i+menuButOffsetX, menuButPosY);

            // Labels
            text((i+1).toString(), menuButPosX*i+menuButOffsetX+menuButWidth/2, menuButPosY-20);
        }
        UIArray[i].style('font-size', '14px');
        UIArray[i].style('border-radius', '15px');

        // Adding hover effect manually since CSS changes takes out original hover behavior
        UIArray[i].mouseOver(() =>
        {
            UIArray[i].style('background-color', 'rgba(180, 160, 140)'); // Light pale orange
        });

        UIArray[i].mouseOut(() =>
        {
            UIArray[i].style('background-color', 'rgb(230, 230, 230)'); // Gray-white
        });

        // Level Changer System
        UIArray[i].mousePressed(() =>
        {
            UIArrayClear();
            buttonSetups(i);    // Plays correct setup function for the pressed button
            currentLevel = levelNames[i];  // Used for draw function
        });
    }    

}

function draw()
{
    // These if statements allow ONLY current level to be drawn
    // if(currentLevel == "first")
    // {
    //     firstDraw();
    // }
    // else if(currentLevel == "second")
    // {
    //     secondDraw();
    // }
    // else if(currentLevel == "third")
    // {
    //     thirdDraw();
    // }
    // else if(currentLevel == "fourth")
    // {
    //     fourthDraw();
    // }
    // else if(currentLevel == "fifth")
    // {
    //     fifthDraw();
    // }
    // else if(currentLevel == "sixth")
    // {
    //     sixthDraw();
    // }
    // else if(currentLevel == "seventh")
    // {
    //     seventhDraw();
    // }

    switch(currentLevel)
    {
        case "first":
            firstDraw();
            break;
        case "second":
            secondDraw();
            break;
        case "third":
            thirdDraw();
            break;
        case "fourth":
            fourthDraw();
            break;
        case "fifth":
            fifthDraw();
            break;
        case "sixth":
            sixthDraw();
            break;
        case "seventh":
            seventhDraw();
            break;
        case "eight":
            eigthDraw();
            break;
    }
    // Menu doesn't need a draw function
}

function buttonSetups(i)
{
    switch(i)
    {
        case 0:
            firstSetup();
            break;
        case 1:
            secondSetup();
            break;
        case 2:
            thirdSetup();
            break;
        case 3:
            fourthSetup();
            break;
        case 4:
            fifthSetup();
            break;
        case 5:
            sixthSetup();
            break;
        case 6:
            seventhSetup();
            break;
        case 7:
            eightSetup();
            break;
    }
}

function UIArrayClear()
{
    for(let i of UIArray)
    {
        i.remove(); // Removes UI elements when called
    }
    UIArray = [];   // Resets array
}

function BackToMenuButton()
{
    // Function hosts creation of "back-to-menu" button that's important on each simulation canvas

    const btmButton = createButton('Menu');

    UIArray.push(btmButton);    // Include in UI array for deletion later
    
    // Position, size, and style
    btmButton.size(btmButWidth, btmButHeight);
    btmButton.position(btmButPosX, btmButPosY);
    btmButton.style('font-size', '14px');       // Increasing font size
    btmButton.style('border-radius', '15px');   // Rounding corners

    // Mouse hover behavior for button
    btmButton.mouseOver(() =>
        {
            btmButton.style('background-color', 'rgb(100, 95, 85)'); // Dark brown
        });
    
    btmButton.mouseOut(() =>
        {
            btmButton.style('background-color', 'rgb(230, 230, 230)'); // Gray-white
        });
    
    // Behavior when clicked
    btmButton.mousePressed(() =>
        {
            UIArrayClear()          // Clear button
            MenuSetup();            // Return to menu
            currentLevel = "menu";  // Used for draw function for menu
        });
}
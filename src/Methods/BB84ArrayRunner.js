
// Used to simulate a BB84 key construction

function keyConstruct(QBER) // QBER is assumed to be given in decimal < 1.
{
    // Start off by filling up an array representative of a BB84 run with random 1s and 0s when necessary

    // Random 0s and 1s when needed:
    for(let i = 0; i<(quantumInfo.length-1); i++) // Only the first three, Bobs measurements can't be random
    {
        for(let j = 0; j<quantumInfo[i].length; j++)
        {
            quantumInfo[i][j] = floor(random(2));   // Fills everything here with random 0s and 1s
        }
    }

    // Bob's measured Qbits gets added adequately WITH given noise
    for(let i = 0; i<quantumInfo[3].length; i++)
    {
        if(quantumInfo[2][i] == quantumInfo[1][i]) // If Alice and Bob measured in the same basis
        {
            // Alice's and Bob's measurements will coincide
            quantumInfo[3][i] = quantumInfo[0][i];
        }
        if(random(1)<QBER)
        {
            quantumInfo[3][i] = 1 - quantumInfo[3][i];  // Flips 0s and 1s
        }
    }

}
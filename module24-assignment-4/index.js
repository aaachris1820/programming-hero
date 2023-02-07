/*
 Problem-1
    The mindGame() function will take a positive number as input.
     Input will be multiplied by 3, added 10,
     divided by 2, subtracted by 5 and return the result as output.
 */

function mindGame(inputMindGame) {
    if (typeof inputMindGame !='number' || inputMindGame<0)
        return 'Please enter a positive number';
    else {
        let result=((inputMindGame*3+10)/2)-5;
        return result;
    }
    
}


/* 
Problem-2
    The evenOdd function will take a string as input. 
    It will count the character number of the input. 
    Then return 'even' for even number of characters 
    or return 'odd' for odd number of characters.
*/

function evenOdd(inputEvenOrOdd) {

    if (typeof inputEvenOrOdd !='string')
        return 'Please enter a string';
    
    else {
        if (inputEvenOrOdd.length%2==0) 
            return 'even';
        else
            return 'odd';
    }
}


/* 
Problem-3
The function isLGSeven() will take a number as input.
The input will be substracted by 7. If the substracted result is less than 7,
it will be returned as ouput. Else input will be multiplied by 2 and returned as output.
*/

function isLGSeven(inputLGSseven) {

    if (typeof inputLGSseven !='number')
        return 'Please enter a number';
    else {
        if (inputLGSseven-7 < 7) {
            return inputLGSseven-7;
        } else {
            return inputLGSseven*2;
        }
    }
}


/* 
Problem-4
    The funciton findingBadData() will take an array of age numbers as input.
    It will count the number of negative numbers in the input as bad data and return the total count.
*/

function findingBadData(inputFindingBadData){
    let countOfBadData=0;
    if(Array.isArray(inputFindingBadData))
    {
        
        for (let i = 0; i < inputFindingBadData.length; i++) {
            if (inputFindingBadData[i] < 0) {
                countOfBadData++;
            }
            
        }
        return countOfBadData;
    }
    else
        return 'Please enter an array';
}


/* 
Problem-5
    The function gemsToDiamond() will take three numbers as input which are gems power of three friends.
    It will multiply the gems of first friend by 21, second friend by 32 and the third friend by 43 to convert them into diamonds and add them. If the total is less than thousand multplied by two then return the total. If the total is equal or greater than thousand multiplied by two then substract it by 2000 and return it.
*/

function gemsToDiamond(inputGemsFriend1,inputGemsFriend2,inputGemsFriend3) {

    if (typeof inputGemsFriend1 != 'number' || typeof inputGemsFriend2 != 'number' || typeof inputGemsFriend3 != 'number') {
        return 'Please enter 3 numbers as input';
    }
    else {
        let totalDiamond=inputGemsFriend1*21+inputGemsFriend2*32+inputGemsFriend3*43;

        if (totalDiamond > 1000*2)
            return totalDiamond-2000;
        else
            return totalDiamond;
    }
}

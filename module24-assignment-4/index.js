/*
 Problem-1
    The mindGame() function will take a number as input. Input will be multiplied by 3, added 10,divided by 2, subtracted by 5 and return the result as output.
 */

function mindGame(inputMindGame) {
    if (typeof inputMindGame !='number')
        return 'Please enter a number';
    else {
        let result=((inputMindGame*3+10)/2)-5;
        return result;
    }
    
}


/* 
Problem-2
    The evenOdd function will take a string as input. It will count the character number of the input. Then return 'even' for even number of characters or return 'odd' for odd number of characters.
*/

function evenOdd(inputEvenOrOdd) {

    if (typeof inputEvenOrOdd !='string')
        return 'Please enter a string';
    else if(inputEvenOrOdd==='')
        return 'Empty string can not be even or odd'
    else {
        if (inputEvenOrOdd.length%2==0) 
            return 'even';
        else
            return 'odd';
    }
}


/* 
Problem-3
The function isLGSeven() will take a number as input. The input will be substracted by 7. If the substracted result is less than 7, it will be returned as ouput. If the substracted result is bigger than 7, it will be multiplied by 2 and returned as output.
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
console.log(isLGSeven(15));

/* 
Problem-4
    The funciton findingBadData() will take an array of age numbers as input. It will count the number of negative numbers in the input and return the count.
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
        return 'Please enter an array'
}

/* 
Problem-5
    The function gemsToDiamond will take three numbers as input which are gems number of three friends. It will multiply the gems of first friend by 21, second friend by 32 and the third friend by 43 and add them. If the total is less than thousand multplied by two then return the total. If the total is equal or greater than thousand multiplied by two then substract it by 2000 and return it.
*/

function findingBadData(inputGemsFriend1,inputGemsFriend2,inputGemsFriend3) {

    if (typeof inputGemsFriend1 != 'number' || typeof inputGemsFriend2 != 'number' || typeof inputGemsFriend3 != 'number') {
        return 'Please enter 3 numbers as input';
    }
    else {
        let result=inputGemsFriend1*21+inputGemsFriend2*32+inputGemsFriend3*43;

        if ((result) >=2000)
            return result-2000;
        else
            return result;
    }
}
console.log(findingBadData(200,0,0));
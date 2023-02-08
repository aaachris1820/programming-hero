
function consoleNNumbers(inputN)
{
if (inputN==1)
return inputN;

return `${consoleNNumbers(inputN-1)},${inputN}`;

}
console.log(consoleNNumbers(6));
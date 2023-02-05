function radianToDegree(input) {
    return parseFloat((input*(180/Math.PI)).toFixed(2));
}
inputRadian=199;
console.log(inputRadian, ' radian converts to ', radianToDegree(inputRadian), 'degree');
console.log(Math.PI);
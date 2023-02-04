function busFare(input) {

    let busNumber=Math.floor(input/50);
    let remainingAfterBus=input%50;
    let microBusNumber=Math.floor(remainingAfterBus/11);
    let remainingAfterMicroBus=remainingAfterBus%11;
    let extraBusFare=remainingAfterMicroBus*250;
    console.log(busNumber,remainingAfterBus,microBusNumber,remainingAfterMicroBus);
    return extraBusFare;

}
console.log('Extra bus fare: ',busFare(365),'taka');
function oilPriceCalculator(digelAmount,petrolAmount,octenAmount) {

    return digelAmount*114+petrolAmount*130+octenAmount*135;
}
console.log('Total oil price is ',oilPriceCalculator(30,20,10), ' taka');
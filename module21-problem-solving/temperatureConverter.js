function temperatureConverter(valNum) {
    let celsius= (valNum-32)/1.8;
    return celsius.toFixed(2);
  }
  console.log(temperatureConverter(103));
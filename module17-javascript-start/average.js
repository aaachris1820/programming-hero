var a=[94.2,94.4,94.6,94.8];
var i=0;
var sum=0;
for (i=0; i<4; i++)
{
    sum+=a[i];
}
average=sum/4;
var roundedAverage=average.toFixed(1);
console.log(roundedAverage);

function temperatureConverter(valNum) {
    var celsius = (valNum-32)/1.8;
      return celsius.toFixed(2);
    }
    tem=temperatureConverter(50);
    console.log(tem);
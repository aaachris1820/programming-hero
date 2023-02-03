function areaTriangle(side1,side2,side3)
{
    let semiparameter=(side1+side2+side3)/2 ;
    return Math.pow((semiparameter*(semiparameter-side1)*(semiparameter-side2)*(semiparameter-side3)),1/2).toFixed(3);
}
console.log('Area of triangle is ',areaTriangle(2,3,4));
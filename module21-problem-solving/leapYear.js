function leapYear(years)
{
    let leapYears=[];
    for (let i=0;i<years.length;i++) {
        if(years[i]%4 == 0 && years[i]%100 != 0)
        leapYears.push(years[i]);
        if(years[i]%400==0)
        leapYears.push(years[i]);
        
    }
    return leapYears;
}
console.log(leapYear([2232,2008,2207,2000,2100,2200,2300,2400,21234,2341,32425,534,6776,576,2000]));
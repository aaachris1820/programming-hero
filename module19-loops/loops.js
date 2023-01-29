let scores= [1,0]

//we have to figure out how many times they broke their record. sample array contains the points per game

let i=0,j=1,min=scores[i],max=scores[i],rmin=0,rmax=0;
for(i=1;i<scores.length;i++)
{
    if (scores[i]>max)
    {
        max=scores[i];
        rmax++;
    }
    else if (scores[i]<min)
    {
        min=scores[i];
        rmin++;
    }
}

let int=[rmax,rmin];
console.log(int);
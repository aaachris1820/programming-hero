let input = "S;V;iPad\nC;M;mouse pad\nC;C;code swarm\nS;C;OrangeHighlighter";



//S means split,C means combine
//M is method,V is variable,C is class
//split will need to be lowercased and separated by space in their camelcase letters position
//method and variable has lowercase starting letter,subsequent words will be in camelcase
//class will have their first letter in uppercase with camelcase in following words

var inputArray = input.split("\n");
for(let i=0;i< inputArray.length;i++)
{
    var a="", j=0;
    let output=inputArray[i].substring(4,inputArray[i].length);
    if (inputArray[i][0]=='S')
        {   
            output = output.replace(/[()]/g, "");
            a = output.split(/(?=[A-Z])/);
            a=a.map(x => x.toLowerCase()).join(" ");
            console.log(a);
        }

    else if (inputArray[i][0]=='C')
        {
            if(inputArray[i][2]=='M')
                {
                    a=output.split(" ");
                    var b = "";
                    for (j = 1; j < a.length; j++) {
                    b += a[j].charAt(0).toUpperCase() + a[j].slice(1);
                    }
                    b=a[0]+b+'()';
                    console.log(b);
                }

            else if(inputArray[i][2]=='C')
            {
                a=output.split(" ");
                var b = "";
                for (j = 0; j < a.length; j++) {
                b += a[j].charAt(0).toUpperCase() + a[j].slice(1);
                }
                
                console.log(b);
            }

            else if(inputArray[i][2]=='V')
            {
                a=output.split(" ");
                var b = "";
                for (j = 1; j < a.length; j++) {
                b += a[j].charAt(0).toUpperCase() + a[j].slice(1);
                }
                b=a[0]+b;
                console.log(b);
            }
        }
}


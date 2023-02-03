function processData(input) {
    //Enter your code here
  let output=[];
  let inputS=input.split('\n');
  
  for (let i = 0; i < inputS.length; i++) {
    if (inputS[i][0]=='S') 
    {
      let inputF=inputS[i].slice(4);
      if (inputF.includes('()'))
          inputF=inputF.slice(0,inputF.length-2)
      inputF=inputF.replace(/([A-Z])/g, ' $1').trim();
      output.push(inputF.toLowerCase()) ;
      
    } 
    else 
    {
      switch (inputS[i][2]) {
        case 'M':
          {
            let inputF=inputS[i].slice(4);
            inputF=inputF.split(' ');
            let outputF='';
            for (let i = 0; i < inputF.length; i++) {
              if (i > 0) {
                outputF+=inputF[i].slice(0,1).toUpperCase()+inputF[i].slice(1);  
              }
              else
              {
                outputF+=inputF[i];
              }
              
            }
            
            output.push(outputF+'()');
            break;
          }
        case 'V':
          {
            let inputF=inputS[i].slice(4);
            inputF=inputF.split(' ');
            let outputF='';
            for (let i = 0; i < inputF.length; i++) {
              if (i != 0) {
                outputF+=inputF[i].slice(0,1).toUpperCase()+inputF[i].slice(1);  
              }
              else
              {
                outputF+=inputF[i];
              }
              
            }
            output.push(outputF);
            break;
          }
        case 'C':
          {
            let inputF=inputS[i].slice(4);
            inputF=inputF.split(' ');
            let outputF='';
            for (let i = 0; i < inputF.length; i++) {
                outputF+=inputF[i].slice(0,1).toUpperCase()+inputF[i].slice(1);
            }
            
            output.push(outputF);
            break;
          }
      }
    }
    
  }

  let outputString=''
  for (let index = 0; index < output.length; index++) {
    outputString+=output[index]+'\n'
    
  }
  
  return outputString.trimEnd();
} 
console.log(processData('S;M;plasticCup()\nC;V;mobile phone\nC;C;coffee machine\nS;C;LargeSoftwareBook\nC;M;white sheet of paper\nS;V;pictureFrame'));
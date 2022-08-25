function onButtonClick(){
const numbersList=[];
    for(let counter=0;counter<10;counter++)
    {
        const userResponse=prompt('Enter a number');
        //numbersList[counter]=userResponse;
        numbersList.push(parseInt(userResponse));
    }
console.log(numbersList);
let sum=0;
sum=sum+numbersList[0];
let counter=1;
for(let index=0;index<9;index++){
    sum=sum+numbersList[counter];
    counter=counter+1;
}
console.log(sum);
}
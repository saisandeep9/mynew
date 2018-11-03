let EvenNumbers =[],OddNumbers=[];
for(let i=1;i<=1000;i++)
{
  if(i%2===0){
    EvenNumbers.push(i);
  }
    else{

     OddNumbers.push(i)
  }
}
console.log(`The array of Even Numbers are:-`,EvenNumbers)
console.log(`The array of Odd Numbers are:-`,OddNumbers)

let SumOfEvenNumbers=EvenNumbers.reduce((accumulator,current) => {
    return accumulator+current},0);
    console.log(`The sum of the even numbers is :-`,SumOfEvenNumbers)
let SumOfOddNumbers=OddNumbers.reduce((accumulator,current) => {
        return accumulator+current},0);
        console.log(`The sum of the odd numbers is:-`,SumOfOddNumbers)
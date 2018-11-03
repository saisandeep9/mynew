// //funcation declartions

// function sum (a,b)
// {
//     return a+b;

// }
// console.log(sum(1,2));

// //expresstion declartions
// let sum= function(a,b)
// {
//     return a+b;

// }
// console.log(sum(1,2));

//areguments

// let sum= function(a,b)
// {
//     return a+b;

// }
// console.log(sum(1,2));


// function sum(){
//     let total =0
//     for ( let num of arguments){
//         total=total+ num;
//     }
//    return total;

// };
// console.log(sum(1,2,3,4,5,6))



// function sum(...arg){
//     console.log(arg)
//     arg.reduce(a,b)=>a+b;
// }
// sum(1,2,3,4,5,6,7)

//defalt parmeters
// function SimpaleInterest(principal, rate,year ){
//     year =(year||5);
// return (principal,rate,year)
// }

// her we have to delclare the defal values at the last 

//letters and setters 
const person={
    fristname:`sai`,
    lastname:`sandeep`,
    get fullname(){
        return `${this.fristname} ${this.lastname}`
    },
    set fullname(valu)
    {
const parts= valu.split(" ")
this.fristname=part[0];
this.lastname=part[1];

    }


};
person.fullname=`sai ram`
console.log(person.fullname)


//creat a restroant obj get the name using get and set
//and incremet the salry

// //adding elements
// let number=[1,2,3,4]
// console.log(number);
// //end
// number.push(5);
// console.log(number);

// //start

// number.unshift(0);
// console.log(number);
// //middle
// number.splice(3,0,`sandep`);
// //adding elements from 3th position 
// console.log(number);

// //removing elements
// //end

// number.pop(2)
// console.log(number);


// //start
// number.shift()
// console.log(number)

// //middle
// number.splice(2,1)
// console.log(number)


// //finding elements
// let number=[1,2,3,4,5,1,2,];

// console.log(number.indexOf(2))


// console.log(number.includes(3))
// console.log(number.indexOf(2,4))


const courses=[
    {id:1,name:"javascript",cost:200},
    {id:2,name:"node",cost:300},
    {id:3,name:"react",cost:400},
];


// const course =courses.find(function(course)
// {
// return(course.name==="node");

// })



const course= courses.find(c=>c.name==="node");
console.log(course.cost);


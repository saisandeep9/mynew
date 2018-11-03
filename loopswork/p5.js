let T= new Date();
console.log(T);
let time=T.getHours();
//console.log( T.getHours())
//console.log(time)
if(time<=6&&time<12){
    console.log("Good morning");
}

else if(time>=12&&time<16){
console.log("GOOD AFTERNOON");
}
else if(time>=16)

console.log("GOOD EVENING");
else
console.log("GOOD NIGHT")


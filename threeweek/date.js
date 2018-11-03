let date1 =Date();
let date2=new Date(Date.now());
let dateutc=new Date(Date.UTC(96,1,2,3,4,5));
console.log(dateutc);

console.log(date1);
console.log(date2);
let newdate=new Date();
console.log(newdate);
let datep=new Date(Date.parse(86,1,2,3,4,5));
console.log(datep);
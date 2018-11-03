let restraurant={
workes:[
    {id:1,name:`worker1`,mobile:12345,salry:1000},
    {id:2,name:`worker2`,mobile:95623,salry:1200},
    {id:3,name:`worker3`,mobile:95133,salry:1150},
    {id:4,name:`worker4`,mobile:55455,salry:1250},



],



}
let selectd= `worker1`
 const worker = restraurant.workes.find(w=>w.name===selectd)
 console.log(worker.salry)
// const course= courses.find(c=>c.name==="node");
// console.log(course.cost);

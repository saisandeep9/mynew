let rest={
    name:"india",
    mobile:1134,
    add:"abc",
    
   list:["work1","work2","work3","work4"],
   chicken(){
    console.log("hai chicke is spice");
   },
   menu(order)
   {
     if(order===chicken())
     {
      console.log("chicken");
     }
     else if(order==="palak")

      {

      console.log("palak");
      }
    }

  
}
console.log(rest.menu(chicken()) );
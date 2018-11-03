let restraurant={
    workes:[
        {id:1,name:`Saisandep`,gender:`male`,mobile:12345,DOB:new Date('09,10,1993')},
        {id:2,name:`Abhinav sai`,gender:`male`,mobile:95623,DOB:new Date('05,25,1992')},
        {id:3,name:`Kiran`,gender:`male`,mobile:95133,DOB:new Date('09,20,1993')},
        {id:4,name:`Anudeep`,gender:`male`,mobile:55455,DOB:new Date('06,15,1994')},
        {id:5,name:`priya`,gender:'fmale',mobile:12346,DOB: new Date(`07,15,1990`)}
    ],
    // menu:[
    //     {name:`yellw dal`,cost:8.5},
    //     {name:`chicken biryani`,cost:9.5},
    //     {name:`Tandoori chiken`,cost:12.5}

    // ]
};

console.log(restraurant)

let sortlist = restraurant.workes.
sort((p1,p2)=>p1.name.localeCompare(p2.name))

console.log(sortlist)

let sortlist2 = restraurant.workes.
sort((p1,p2)=>p1.DOB<(p2.DOB));



console.log(sortlist2)
let SortByGender=restraurant.workes.sort(p1,p2)




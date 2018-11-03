let i,j,row=5,k,spc=row;
for(i=1;i<=row;i++)
{
    for(k=spc;k>=1;k--)
    {
      process.stdout.write(" ");
    }
    for(j=1;j<=i;j++)
    {
       
        //if(j%2===0)
        

        //console.log(j);
        process.stdout.write(j%2+" ");
       // process.stdout.write("*"+" ");
      //spc--;
        

    }
    spc--;
  console.log("");
}

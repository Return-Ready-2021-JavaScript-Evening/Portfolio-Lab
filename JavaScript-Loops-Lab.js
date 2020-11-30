// Part 1 

for (i = 0; i <= 10; i++) {
    console.log(i);

}

//part 2 

for (i = 1; i <= 10; i++) {
    console.log(i*i);
}


//part 3 
let n = 20;
for (i = 0; i <=n; i+=2) {
   console.log (i);
}

/*part 4 
 numberSum = (n,m) => {
    let total = 0;
     for 
  }
  }
      console.log(numberSum()); */


// challenge 5 

/*let answer = prompt("Are we there yet?")
  if(answer === "yes"){
   console.log("good");

   } else {
    while (answer !== "yes")
     answer= prompt("Are we there yet?");
   }

   console.log("good");*/

// 6 Triangle 

let triangle = " ";

for (let i=1; i <= 12; i++) { 
  triangle += i + " ";
  console.log(triangle);
}

    

// 7
 
let output="";let count = 0;
for (let i = 1; i <= 4; i++)
{

    for (let j = 0; j < 4; j += 1)
    {
   output +=(count+1)+"\t";count ++;
   }output+="\n";

}
console.log(output);
    
//8 
let output="";let count = 0;
for (let i = 1; i <= 6; i++)
{

    for (let j = 0; j < 6; j += 1)
    {
   output +=(count+1)+"\t";count ++;
   }output+="\n";

}
console.log(output);
    

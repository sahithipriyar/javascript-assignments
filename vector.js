let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let vectora = readLine().split();
let a1=parseInt(vectora[0])
let a2=parseInt(vectora[1])
let a3=parseInt(vectora[2])
let vectorb = readLine().split();
let b1=parseInt(vectora[0])
let b2=parseInt(vectora[1])
let b3=parseInt(vectora[2])

if((a2*b3-a3*b2)===0 && (a1*b3-b1*a3)===0 && (a1*b2-a2*b1)===0)
{
   console.log(1); 
}
else if(a1*b1 + a2*b2 +a3*b3===0){
    console.log(2);

}
else{
    console.log(0);
}
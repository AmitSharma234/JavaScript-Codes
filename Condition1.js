//alert like popup in website
//alert("hello");


//prompt take input from user
//imput name and print them
let fname=prompt("hello");
console.log(fname);

//q1
let no=prompt("enter a no");
if(no%5==0){
    console.log("5 Divider");
}
else{
    console.log("not 5 Divider");
}

//q2
let r1=prompt("enter score 1-100");
if(r1>=90 && r1<=100){
   console.log("A Grade");
} else if(r1>=70 && r1<=89){
    console.log("B Grade");
 }else if(r1>=60 && r1<=69){
    console.log("C Grade");
 } else  if(r1>=50 && r1<=59){
    console.log("D Grade");
 } else{
    console.log("F Grade");
 }
 console.log("you are great");
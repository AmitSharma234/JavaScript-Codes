//Condition Statements
// IF STATEMENT
//voting
/*let age=20;
if(age>18){
    console.log("Eligable for voting and license");
}
//mode
let mode="dark";
let color;
if(mode==="dark")
    {
    color="black";
}
if(mode==="light")
    {
  color="white";
}
console.log(color);


//IF-ELSE STATEMENT
//mode
let mode="light";
let color;
if(mode==="black"){
    color="black";
}else{
    color="white";
}
console.log(color);

//voting
let age=15;
if(age>18){
    console.log("You Can Vote");
}else{
    console.log("You Cannot Vote");
}

//odd/even
let no=3;
if(no%2==0){
    console.log(no," is Even");
}else{
    console.log(no," is Odd");
}
*/
//ELSE-IF STATEMENT
let mode="dark";
let color;
if(mode==="dark"){
   color="black";
}else if(mode==="pink"){
    color="pink";
}else if(mode==="blue"){
    color="blue";
}else{
    color="white";
}
console.log(color);

let age=56;
if(age>19){
    console.log("junior");
 }else if(age<69){
    console.log("Senior");
 }else{
    console.log("Middle");
 }

//---ternary operators----
 let m=19;
 let r=m>18?"adult":"not adult";
console.log(r);


 m>18?console.log("adult"):console.log("not adult");


/*//assignment operator
let a=5;
let b=2;

a += 4;//a=a+4
       //a=5+4=9
console.log("a+=4:",a);

a -= 4;//a=a+4
       //a=5+4=9
console.log("a-=4:",a);

a *= 4;//a=a+4
       //a=5+4=9
console.log("a*=4:",a);

a %= 4;//a=a+4
       //a=5+4=9
console.log("a%=4:",a);

a /= 4;//a=a+4
       //a=5+4=9
console.log("a/=4:",a);

a **= 4;//a=a+4
       //a=5+4=9
console.log("a**=4:",a);
*/
//comparison operators
let a=5;
let b=2;
console.log("a==b",a==b);  //5==2//false

console.log("a!=b",a!=b);  //5!=2//true

let c=6;
let d="6";
console.log("c===d",c===d);   //6==="6"//false


console.log("c!==d",c!==d);   //6==="6"//false

console.log("a>b",a>b);    //5>3//true

console.log("a<b",a<b);    //5<3//false
//------------------------------------
//logical oR
let e =7;
let f =6;


let co1 = e>f;                                              //true
let co2 = e===7;                                              //true
console.log("co1 || co2=",co1 || co2);

let co3 = e<f;                                              //false
let co4 = e===4;                                              //false
console.log("co3 || co4=",co3 || co4);

let co5 = e>f;                                             //true
let co6 = e===5;                                             //false

console.log("co5 ||co6=",co5 || co6);
//--------------------------------------------
//logical or
let g =7;
let h =6;

let c1 = g>h;                                          //true
let c2 = g===7;                                         //true
console.log("c1 && c2=",c1 && c2);

let c3 = g>h;                                             //false
let c4 = g===4;                                           //false
console.log("c3 && c4=",c3 || c4);

let c5 = g>h;                                            //true
let c6 = g===5;                                          //false

console.log("c5 &&c6=",c5 || c6);
//-------------------
//logical Not
let b1=6;
let b2=5;

console.log("!(6<5)=",!(b1===6));     //true than false 

console.log("!(6>5)=",!(b1===7));   //false than true
function myfunction()  //defining function
{
    console.log('Amit sharma');       //defination of function
}
myfunction();             //calling a funtion



function op(msg){   //parameterizd function
    console.log(msg);         //defination of function
}

op('hello javascript');       //calling a function with parameter



function op(msg,n){   //parameterizd function
    console.log(msg,n);         //defination of function
}

op('hello javascript',100);       //calling a function with parameter



function sum(x,y)
{
    console.log(x+y);
}

sum(2,6);

function add(x,y) {   //local variable x,y function tak hi rahege
    s=x+y;
    console.log('befor return :');
    return s;
    console.log('after');
}

let val = add(7,8);
console.log(val);


//Arrow Function
const arrow=(x,y)=> {
    console.log(x+y);
};

arrow(6,8);

const arrows=()=>{
    console.log('hello');
}
arrows();
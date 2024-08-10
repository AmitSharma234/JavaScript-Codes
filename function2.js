function is(str){
    let count;
    for(const char of str){
    if(char==='a'|| char==='e'||char==='i'||char==='o'||char==='u')
    {
        count++;
      //  console.log('yes it is a vowels:'||char);
    }
}
console.log(count);
}

is('abs');

//for each function
let arr=[1,2,3,4,5,6];
arr.forEach(function myfun(val){   
  console.log(val)
})

let marks=[97,73,54,7];
console.log(marks);
console.log(marks.length);

let hero=["ironman","spiderman","hulk","shaktimaan"];
console.log(hero);

//looping an array by for loop
for (let i = 0;i< marks.length; i++) {
    console.log( marks[i]); 
}

//for of
for(let el of marks){
    console.log(el);
}

//for in
for(let m in marks){
    console.log(m);
}

//q1
let mi=[85,97,44,37,76,60];
let sum=0;
for( let val of marks){
    sum=sum+val;
}
let avg=sum/marks.length;
console.log(sum);
console.log(avg);

/*//q2
let off=[250,645,300,900,50];
let id;
for(let s of off){
    console.log('values at index $(id)=$(s)');
    let id++;
}*/


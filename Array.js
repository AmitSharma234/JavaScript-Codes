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


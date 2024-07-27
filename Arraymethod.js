//Array Methods 
//Push():Add elements to end
let item=['potato','apple','carrot','tomato'];
item.push('chips'); //add one item
console.log(item);

item.push('chips','burger','panner');//add multiple items
console.log(item);

//pop():Delete from end & return 
let food=['potato','apple','carrot','tomato'];
food.pop(); 
console.log(food);

//tostring():converts arrry to string
let mar=[98,56,34,89,54];
console.log(mar.toString());

//concat():joins multiple array & return result
let m=['pen','pencil','easer','whitener'];
let s=['pad','book','book','stand'];
let hr=m.concat(s);
console.log(hr);

//unshift():add to start like push()
let s1=['pen','pencil','easer','whitener'];
let s2=s1.unshift('antman');
console.log(s2);

//shift():delete from start & return like pop()
let st1=['pen','pencil','easer','whitener'];
let st2=s1.shift('ant');
console.log(st2);









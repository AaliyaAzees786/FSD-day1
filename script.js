console.log('Hi Welcome');
var a=8;
let g=45;
{
    var a=23;
    let g=67;
    console.log(g);
}
console.log(a);
console.log(g);
console.log(typeof(a));
let b="This is a string";
console.log(typeof(b));
let c= true;
console.log(typeof(c));

// Javascript objects
let person={
    Name: 'Aaliya',
    Age: 22,
    Location: 'TVM'
}
console.log(person.Name);

// Javascript array
let arr=['Heera','Jai',10];
console.log(arr[2]);
console.log(arr.length);
console.log(arr.pop());

// Array objects
let arr_obj=[{age:23,location:'TVM'},{age:43,location:'Kochi'}];
console.log(arr_obj[1].location);

// functions in js
function add(a,b) {
    var sum=a+b;
    return sum;
}
var sum1=add(2,3);
console.log(sum1);

// operators
var a=1;
var d=++a;
console.log(a);
console.log(d);

// if...else condition
var a1=99;
var a2=45;
if (a1>a2) {
    console.log('a1 is greater');
} else {
    console.log('a2 is greater');
}

// if...elseif...else condition
var a3=99;
var a4='99';
if (a3>a4) {
    console.log('a3 is greater');
} else if(a3==a4) {
    console.log('a3 is same as a4 and the value is '+a3);
} else{
    console.log('a4 is greater');
}

// for loop
var arr2=[10,20,40,50];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

for (const i in arr2) {
    console.log(i);
}

for (const i of arr2) {
    console.log(i);
}


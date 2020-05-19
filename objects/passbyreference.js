//pass by value

var a = 1;
var b=a; // b has the same value as a, but different address 

b++;

console.log('a', a);
console.log('b', b); 

//pass by reference

let obj1 = {name: "shelly", password:"123"};
let obj2 = obj1; //value is copied and also they reference to the same address

console.log('before changing ob2, obj1=', obj1);
console.log('before changing ob2, obj2=', obj2);

obj2.password = "asdf";

console.log('after changing ob2, obj1=', obj1);
console.log('after changing ob2, obj2=', obj2);

//since arrays are also objects, they can b passed by reference

var a=[1,2,3,4];
var b=a;

b.push(5);

console.log('a', a);

//in order to pass by value in arrays

var a=[1,2,3,4];
var b=[].concat(a);
b.push(5);

console.log('a', a);
console.log('b', b);


//pass by value in objects

let obj = {a :'a', b:'b', c:'c', d:{deep : 'try and change me'}};

//shallow cloning
let clone = Object.assign({},obj); //1st way of cloning objects
let clone2 = {...obj}; //2nd way of cloning objects
//deep cloning
let superclone = JSON.parse(JSON.stringify(obj)); //3rd and deepest way to clone the object where the objects inside the objects are also cloned

obj.c=5; //changing the value of the original object 'obj'
obj.d.deep='hahaha'; //chnaging the value of object 'd' inside the object 'obj'


console.log('clone', clone); //value of 'c' is not changed but 'd' is changed =>since the object 'd' inside the object 'obj' is not cloned, and is referencing the same address, hence its value is also changed with obj
console.log('clone2', clone2);//value of 'c' is not changed but 'd' is changed=>since the object 'd' inside the object 'obj' is not cloned, and is referencing the same address, hence its value is also changed with obj
console.log('superclone', superclone); //the value of 'c', and 'd' is not changed
console.log('obj', obj);







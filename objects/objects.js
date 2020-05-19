//.padStart() => used to add spaces before the object string
//.padEnd() => used to add spaces after the object string




//iterating objects using : Objects.keys

let obj={
	username0 : 'lily',
	usrname1 : 'miranda',
	username2 : 'Bill'
}

Object.keys(obj).forEach((key, index)=>{
	console.log(key, obj[key]);
})

//iterating only values : Object.values

Object.values(obj).forEach(value=>{
	console.log(value);
})

//iterating objects n geeting result in the for of Array : Object.entries

Object.entries(obj).forEach(value=>{
	console.log(value);
})
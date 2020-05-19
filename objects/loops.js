const array= ['apples', 'oranges', 'grapes'];

const objects = {
	apples: 10,
	oranges: 100,
	grapes: 1000
}


//used with iterable items like arrays and strings
for(items of array)
{
	console.log(items);
}


//used with non-iterable/enumerable items like objects

for(items in objects)
{
	console.log(items);
}

for(items in array)
{
	console.log(array[items]);
}
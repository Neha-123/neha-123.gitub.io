const array= [1, 2, 10, 16];

//for Each-------------------------

const forarray = [];

const newarray= array.forEach((num)=>{
	forarray.push(num * 2);
});

console.log('for each', forarray);

//Map----------------------------------------

const arraymap= array.map((num)=>{
	return num * 2;
});

console.log('map', arraymap);


//filter--------------------------------------

const filterarray = array.filter(num=>{
	return num>5;
})

console.log('filter', filterarray);

//reduce---------------------------

const reduceaarray = array.reduce((accumulator, num)=>{
	return accumulator+num;
}, 0);

console.log('reduce', reduceaarray);
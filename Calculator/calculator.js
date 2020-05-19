let buttonScreen = document.getElementsByClassName('buttonScreen');
let numbers = document.getElementsByClassName("numberButton");
let operation = document.getElementsByClassName("operationButton");
let displayScreen = document.getElementById("bigScreen");
var numberList = [];
var operationList =[];
var result;
var prev;
// let newDiv = document.createElement("canvas");

const focusHighlight = ((x,y)=>{
  newDiv.classList.add("borderAnimation");
  var ctx = newDiv.getContext("2d");
  ctx.beginPath();
  // console.log(x);
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.stroke();

}) 

const getCoordinates = (e=>{
  var x = e.clientX;
  var y = e.clientY;
  focusHighlight(x,y);
})


const displayOnBigScreen = (value => {

	if(operationList.length > 0 )
	{
		operationList.pop();
		displayScreen.innerHTML = value;
		console.log("operationList[] :",operationList);
	}
	else
	{
		numberList.pop();
		displayScreen.innerHTML = displayScreen.innerHTML + value;
	}
	
  	numberList.push(displayScreen.textContent);
  
  	console.log("inside displayOnBigScreen(), operationList[] : ", operationList);
  	

  	
  	console.log("inside displayOnBigScreen(), numberList[] : ", numberList);

})

const getNumberValue = (e =>{

	console.log(displayScreen.textContent);
	if(displayScreen.textContent == 0)
	{

	displayScreen.innerHTML= " ";
	}
	displayOnBigScreen(e.target.textContent);

})


const getOperatorValue = (e => {

	operationList.push(e.target.textContent);
	if(e.target.textContent == "+")
	{	
		prev = "+";
		console.log("in getOperatorValue()");
		result = addition(numberList);
		displayScreen.innerHTML = result;
		for(var i=0;i< numberList.length+1; i++)
		{
			numberList.pop();
		}
		numberList.push(result);
		console.log("after addition numberList[]="+ numberList);
	}
 	
 	if(e.target.textContent == "-")
 	{
 		prev = "+";
 		result = subtraction(numberList);
 		displayScreen.innerHTML = result;
 		for(var i=0;i< numberList.length+1; i++)
		{
			numberList.pop();
		}
		numberList.push(result);
		console.log("after subtraction numberList[]="+ numberList);	
 	}



	if(e.target.textContent == "=")
	{
		 console.log("inside equals operationList[]: ", operationList);
		 if(prev == "+")
		 {
			displayScreen.innerHTML = addition(numberList);
		 }
		
		 if(prev == "-")
		 {
			displayScreen.innerHTML = subtraction(numberList);
		 }
				


	}

	// console.log(result);
	
	

})



const addition = (arr => {
	var num = 0;
	for(var i=0; i<arr.length;i++)
	{
		num = num + Number(arr[i]);
	}
	return num;
})


const subtraction = (arr => {
	var num = 0;
	for(var i=0; i<arr.length;i++)
	{
		num = num - Number(arr[i]);
	}
	return num;
})


// for(var i=0;i<buttonScreen.length;i++)
// {
// 	buttonScreen[i].addEventListener('mousemove', getCoordinates);
// }


for(var i=0;i<numbers.length;i++)
{
	numbers[i].addEventListener("click", getNumberValue);
}

for(var i=0;i<operation.length;i++)
{
	operation[i].addEventListener("click", getOperatorValue);
}

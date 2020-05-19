let numbers = document.getElementsByClassName("numberButton");
let operation = document.getElementsByClassName("operationButton");
let displayScreen = document.getElementById("bigScreen");
let displaySmallScreen = document.getElementById("smallScreen");
var numberList = [];
var operationList =[];
var smallScreenList = [];
var result;
var prev;
var previousresult; // for % increase and decrease
var flag=0; // checking condition for backspace
var flagforoperator=0; // checking condition for any operator entered
var flagforequals = 0;
var secondnumber; // for calculation after equals

const getNumberValue = (e =>{

	// console.log("inside getNumberValue : displayScreen="+ displayScreen.textContent);
	if(displayScreen.textContent == 0) // when user inputs the first time
	{
		displayScreen.innerHTML= ""; // set screen empty
		if(smallScreenList.length == 0)
		{
			displaySmallScreen.innerHTML=""; 
			// console.log("inside getNumberValue :display smallScreen");
		}
	}
	displayOnBigScreen(e.target.textContent); //display the input value
	smallScreenList.push(e.target.textContent);
	console.log("inside getNumberValue :display smallScreen: "+smallScreenList);


})

const displayOnBigScreen = (value => {

	if((operationList.length > 0 &&  numberList.length < 2) || flagforoperator == 1)
	{
		// operationList.pop();
		displayScreen.innerHTML = value;
		console.log("inside displayOnBigScreen() if condition: operationList[] =",operationList);
		console.log("inside displayOnBigScreen() if condition:  numberList[] =",numberList);
	}
	else
	{
		numberList.pop();
		displayScreen.innerHTML = displayScreen.innerHTML + value;
		console.log("inside displayOnBigScreen() : operationList[]<0, operationList[] :",operationList);
		console.log("inside displayOnBigScreen() :operationList[]<0, numberList[] :",numberList);
	}
	
  	numberList.push(displayScreen.textContent);
  	flagforoperator = 0; // set value =0, when any number is entered or pushed in numberList
  	//console.log("inside displayOnBigScreen() : operationList[] =",operationList);
  	flagforequals =0;
	console.log("inside displayOnBigScreen() :  numberList[] =",numberList);
  	flag = 0; // checking condition for backspace
  	
  })


const getOperatorValue = (e => {



	if(e.target.classList.contains("clearAll"))
	{
		console.log("inside clearAll :display smallScreen"+ smallScreenList.length);
		var smallScreenListLength = smallScreenList.length;
		var numberListLength = numberList.length;
		var operationListLength = operationList.length;
		
		for(var i=0; i<numberListLength;i++)
		{
			numberList.pop();
			
		}

		for(var i=0; i<operationListLength; i++)
		{
			operationList.pop();
			
		}
		for(var i=0; i<smallScreenListLength; i++)
		{
			smallScreenList.pop();
		}
		displayScreen.innerHTML = "0";
		displaySmallScreen.innerHTML = "0";
		// console.log('numberList',numberList);
		// console.log('operationList',operationList);
		// console.log('inside clearAll :smallScreenList',smallScreenList);
	}
	else if(e.target.classList.contains("clear"))
	{
		if(smallScreenList[smallScreenList.length-1] == "=")
		{
			smallScreenListLength = smallScreenList.length;
			numberListLength = numberList.length;
			operationListLength = operationList.length;
			displaySmallScreen.innerHTML = "";
			for(var i=0;i< smallScreenList.length; i++)
			{
				smallScreenList.pop();
			}
			for(var i=0;i< numberList.length; i++)
			{
				numberList.pop();
			}
			for(var i=0;i< operationList.length; i++)
			{
				operationList.pop();
			}
			displaySmallScreen.innerHTML = "";
		}
		console.log('displayScreen.textContent.length', displayScreen.textContent.length);
		if(flagforoperator == "0") 
		{
			for(var i=0; i<displayScreen.textContent.length;i++)
			{
				smallScreenList.pop();
			}
		}
		

		displayScreen.innerHTML = "0";
		console.log('numberListLength', numberList);
	}
	else if(e.target.classList.contains("sign"))
	{
		console.log("inside sign numberList[]="+ numberList);
 			// previousresult = numberList[0];
	 	for(var i=numberList.length-1; i>=0; i--)
	 	{
	 		console.log("inside for loop: numberList"+numberList[i]);
	 		if(numberList[i] != null)
	 		{
	 			numberList[i] = Number(0) - Number(numberList[i]);
	 			displayScreen.innerHTML = numberList[i];
	 			console.log("after sign numberList[]="+ numberList);
	 			break;
	 		}
	 	}
	 	flag = 0; // checking condition for backspace
	}
		else if (e.target.classList.contains("square"))
		{
			for(var i=numberList.length-1; i>=0; i--)
	 		{
	 			console.log("inside squarefor loop: numberList"+numberList[i]);
	 			if(numberList[i] != null)
	 			{
	 				numberList[i] = Number(numberList[i]) * Number(numberList[i]);
	 				displayScreen.innerHTML = numberList[i];
	 				console.log("after square numberList[]="+ numberList);
	 				break;
	 			}
	 		}	
	 		flag = 1; // checking condition for backspace
		}
	else if(e.target.classList.contains("backSpace"))
	{
		if(flag == "0") //checking condition : if only a number is entered then use backspace, not when function is entered /result is displayed
		{
			console.log("inside backSpace numberList[]="+ numberList);
			console.log("inside backSpace operationList[]="+ operationList);
			if(numberList.length>0)
			{
				numberList.pop();
			}
			if(smallScreenList.length>0)
			{
				smallScreenList.pop();
			}
			
	 		var temp = displayScreen.textContent;
	 		// console.log('temp', temp);
	 		// console.log('temp length', displayScreen.textContent.length);
	 		var newArray=[];
	 		for(items of temp)
			{
				newArray.push(items);
			}
			newArray.pop();
			// console.log('newArray', newArray);
			var newDisplay="";
			for(items of newArray)
			{
				newDisplay = newDisplay + items;
			}
			// console.log('newDisplay', newDisplay);

			if(newDisplay.length > 0)
			{
	 			numberList.push(newDisplay);
	 			// displaySmallScreen.innerHTML = displaySmallScreen.textContent + newDisplay;
	 			smallScreenList.push(newDisplay);
	 			console.log("inside backspace :display smallScreen");
	 		}
	 		else
	 		{
	 			newDisplay="0";
	 		}
	 		displayScreen.innerHTML = newDisplay;

	 		console.log('numberList', numberList);
		} 	
	}
	else //code to push the operator in operationList
	{
		
			if(smallScreenList.length>0)
			{
				if(smallScreenList[smallScreenList.length-1] != e.target.textContent)
				{
					if(flagforoperator == 1)
					{

							smallScreenList.pop();
							operationList.pop();
						
					}
					smallScreenList.push(e.target.textContent);
					operationList.push(e.target.textContent);
					// console.log('input operationList: operationList',operationList);
					console.log('input operationList: smallScreenList',smallScreenList);
				}
			}
			else
			{
				//after giving "equalls" and displaying result, when you enter a new operator
				displaySmallScreen.innerHTML  ="";
				if(flagforoperator == 1)
				{
					smallScreenList.pop();
					operationList.pop();
				}
				smallScreenList.push(displayScreen.textContent); //display the result displayed on the big screen
				smallScreenList.push(e.target.textContent); //display the operator enetered
				operationList.push(e.target.textContent); //save the operator enetered
				for(var i=0; i<smallScreenList.length; i++)
				{
					displaySmallScreen.innerHTML = displaySmallScreen.textContent + smallScreenList[i];
				}

			}
				
		flagforoperator = 1; // set value = 1, when any operator is entered
		// if(e.target.textContent == "=")
		// {
		// 	flagforequals = 1;
		// }
		// else
		// {
		// 	flagforequals=0; //set value = 0, when instaed ofequals operator, number is entered 
		// }
		
		console.log("operator entered : " +e.target.textContent);
		console.log('operationList', operationList);
		flag = 1; // checking condition for backspace
		if(numberList.length == 2 && operationList.length == 2) 
		{
		  	console.log("inside getOperatorValue() :calling Calculation(), numberList[] :",numberList);
		  	console.log("inside getOperatorValue() :calling Calculation(), operationList[] :",operationList);
		  	Calculation();
		}
		if(e.target.classList.contains("equals"))
		{
			displayResult(); //if "=" is enetered
		}
		else //code to push the operator in operationList
		{
			flagforequals = 0;
		}


	}



	

	if(operationList.length>0)
	{
		// displaySmallScreen.innerHTML = displaySmallScreen.textContent + displayScreen.textContent;
		displaySmallScreen.innerHTML ="";
		console.log("inside displayOnBigScreen() : smallScreenList[] =",smallScreenList);
		console.log("inside displayOnBigScreen :display smallScreen");
		for(var i=0; i<smallScreenList.length; i++)
		{
			displaySmallScreen.innerHTML = displaySmallScreen.innerHTML + smallScreenList[i];
		}
	}
})


const displayResult = () => {
		

		displaySmallScreen.innerHTML = "";
		if(flagforequals == 0)
		{
			for(var i=0;i<smallScreenList.length; i++)
			{
				console.log("displaySmallScreen for 1st equals"+smallScreenList);
				displaySmallScreen.innerHTML = displaySmallScreen.innerHTML + smallScreenList[i];
				
			}
		}
		else
		{
			
			console.log("displaySmallScreen for 2nd equals"+smallScreenList)
			for(var i=0;i<smallScreenList.length; i++)
			{
				displaySmallScreen.innerHTML =displayScreen.textContent+prev+secondnumber + smallScreenList[i];
				
			

			}
			// displaySmallScreen.innerHTML = displaySmallScreen.innerHTML + prev+ secondnumber ;
		}
		smallScreenListLength= smallScreenList.length;
		for(var i=0; i<smallScreenListLength; i++)
		{
			smallScreenList.pop();
		}
		

	

		
		

		
		flag=1; // checking condition for backspace
		operationList.pop();
		
		console.log("inside equals prev: ", prev);
		if(prev == "+")
		{
			if(flagforequals == "1")
			{
				numberList[1] = secondnumber;
				displayScreen.innerHTML=addition(numberList);
				numberList[0]= displayScreen.textContent;
				
				console.log("inside equals operationList[]: ", operationList);
				console.log('inside equals numberList[]: ',numberList);
				console.log('inside equals smallScreenList[]:', smallScreenList);
			}
			else
			{
				displayScreen.innerHTML = numberList[0];
			}
			console.log('equals : operationList', operationList);
			console.log('equals : numberList', numberList);
			console.log('equals : flagforequals', flagforequals);
		}
			
		if(prev == "-")
		{
			
			if(flagforequals == "1")
			{
				numberList[1] = numberList[0];
				displayScreen.innerHTML=subtraction(numberList);
				numberList[0]= displayScreen.textContent;
			}
			else
			{
				displayScreen.innerHTML = numberList[0];
			}
		}
		if(prev == "X")
		{
			displayScreen.innerHTML = numberList[0];
			if(flagforequals == "1")
			{
				numberList[1] = numberList[0];
				addition(numberList);
			}
		}
		if(prev == "/")
		{
			displayScreen.innerHTML = numberList[0];
			if(flagforequals == "1")
			{
				numberList[1] = numberList[0];
				addition(numberList);
			}
		}
		if(prev == "%")
		{
			displayScreen.innerHTML = numberList[0];
			Calculation();
		}
		flagforequals =1;
	
}


const Calculation = () =>{

	console.log("inside Calculation()");
	console.log("inside Calculation() : operationList[]="+ operationList);
	flag=1; // checking condition for backspace
	if(operationList[0] == "+" && operationList[1] != "%")
	{	
		prev = "+";
		previousresult = numberList[0];
		secondnumber = numberList[1];
		result = addition(numberList);
		displayScreen.innerHTML = result;
		numberListLength = numberList.length;
		for(var i=0;i< numberListLength; i++)
		{
			numberList.pop();
		}
		numberList.push(result);
		
		console.log("after addition numberList[]="+ numberList);

	}
 	
 	if(operationList[0] == "-" && operationList[1] != "%")
 	{
 		prev = "-";
 		previousresult = numberList[0];
 		result = subtraction(numberList);
 		displayScreen.innerHTML = result;
 		for(var i=0;i< numberList.length+1; i++)
		{
			numberList.pop();
		}
		numberList.push(result);
		
		console.log("after subtraction numberList[]="+ numberList);	
 	}

 	if(operationList[0] == "X" && operationList[1] != "%")
 	{
 		prev = "X";
 		previousresult = numberList[0];
 		result = multiplication(numberList);
 		displayScreen.innerHTML = result;
 		for(var i=0;i< numberList.length+1; i++)
		{
			numberList.pop();
		}
		numberList.push(result);
		
		console.log("after multiplication numberList[]="+ numberList);	
 	}

 	if(operationList[0] == "/" && operationList[1] != "%")
 	{
 		prev = "/";
 		previousresult = numberList[0];
 		result = division(numberList);
 		displayScreen.innerHTML = result;
 		for(var i=0;i< numberList.length+1; i++)
		{
			numberList.pop();
		}
		numberList.push(result);
		
		console.log("after division numberList[]="+ numberList);	
 	} 	

 	if(operationList[1] == "%")
 	{
 		prev = "%";
 		if(operationList[0] == "X")
 		{
	 		result = percentage(numberList);
	 		displayScreen.innerHTML = result;
	 		for(var i=0;i< numberList.length+1; i++)
			{
				numberList.pop();
			}
			numberList.push(result);
		}
		else if(operationList[0] == "+")
		{
			result = percentageIncrease(numberList,previousresult);
	 		displayScreen.innerHTML = result;
	 		for(var i=0;i< numberList.length+1; i++)
			{
				numberList.pop();
			}
			numberList.push(result);
		}
		else if(operationList[0] == "-")
		{
			result = percentageDecrease(numberList, previousresult);
	 		displayScreen.innerHTML = result;
	 		for(var i=0;i< numberList.length+1; i++)
			{
				numberList.pop();
			}
			numberList.push(result);
		}
		operationList.pop();

		console.log("after percentage numberList[]="+ numberList);	
 	}

	

	operationList[0]=operationList[1];
	operationList.pop();
}
	
const addition = (arr => {
	var num = 0;
	console.log("inside addition(), arr[] : "+arr);
	if(arr.length == 2)
	{
		num = Number(arr[0])+ Number(arr[1]);
	}
	return num;
})	

const subtraction = (arr => {
	var num = arr[0];
	console.log("inside subtraction, arr[] : "+arr);
	if(arr.length == 2)
	{
		num = Number(arr[0]) - Number(arr[1]);
	}
	return num;
})

const multiplication = (arr => {
	var num = arr[0];
	console.log("inside multiplication, arr[] : "+arr);
	if(arr.length == 2)
	{
		num = Number(arr[0]) * Number(arr[1]);
	}
	return num;
})	

const division = (arr => {
	var num = arr[0];
	console.log("inside division, arr[] : "+arr);
	if(arr.length == 2)
	{
		if(arr[1] == 0)
		{
			num = "Cannot divide by zero";
		}
		else
		{
			num = Number(arr[0]) / Number(arr[1]);
		}
	}
	return num;
})

const percentage = (arr => {
	var num = arr[0];
	console.log("inside percentage, arr[] : "+arr);
	num = (Number(arr[0]) * Number(arr[1])) / Number(100);
	return num;
})

const percentageIncrease = (arr, previousresult) => {
	var num = arr[0];
	console.log("inside percentage  Increase, arr[] : "+arr);
	// num = ((Number(arr[0]) * Number(previousresult))/Number(100)) + Number(previousresult);
	num = ((Number(arr[0]) * Number((arr[1])))/Number(100)) + Number((arr[0]));
	return num;
}

const percentageDecrease = (arr, previousresult) => {
	var num = arr[0];
	console.log("inside percentage Decrease, arr[] : "+arr);
	// num = ((Number(arr[0]) * Number(previousresult))/Number(100)) + Number(previousresult);
	num = (Number((arr[0]) - (Number(arr[0]) * Number((arr[1])))/Number(100)));
	return num;
}





for(var i=0;i<numbers.length;i++)
{
	numbers[i].addEventListener("click", getNumberValue);  //input the numbers
}

for(var i=0;i<operation.length;i++)
{
	operation[i].addEventListener("click", getOperatorValue); //input the operator
}
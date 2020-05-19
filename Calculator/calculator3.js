let numbers = document.getElementsByClassName("numberButton"); // get value of all the numbers entered
let operation = document.getElementsByClassName("operationButton"); //get value of all operations entered
let displayScreen = document.getElementById("bigScreen"); // get value from screen
let displaySmallScreen = document.getElementById("smallScreen"); // get value from small screen
var numberList = []; // store the input numbers and result
var operationList =[]; // store the operator enetered
var smallScreenList = []; // store the values of small display screen
var flagforoperator=0; // checking condition for any operator entered
var smallScreenListLength;
var numberListLength;
var operationListLength;
var flagforequals = 0; //checking when "=" is entred
var prevOperator;
var previousresult;
var secondnumber; //storing the number for calcution after successive "="
var flagforsign=0; //checking if sign change operator is entered
var flagforsquare=0; // checking if square operator is entered
var flagforclear=0; // checking if clear operator is entered



//function to enter numbers----------------------------------------------
const getNumberValue = (e =>{
	
	//set the screen empty before user input the first time
	if(displayScreen.textContent == 0) // when value of display screen is 0
	{
		displayScreen.innerHTML= ""; // set screen empty
		if(smallScreenList.length == 0)
		{
			displaySmallScreen.innerHTML=""; 
			
		}
	}
   
	displayOnBigScreen(e.target.textContent); //display the input value
})



//function to display values on screen---------------------------------------
const displayOnBigScreen = (value => {

console.log("inside displayOnBigScreen(): operationList[] =",operationList);
console.log("inside displayOnBigScreen(): numberList[] =",numberList);
console.log("inside displayOnBigScreen(): smallScreenList[] =",smallScreenList);
console.log("inside displayOnBigScreen(): flagforoperator =",flagforoperator);
console.log("inside displayOnBigScreen(): flagforequals =",flagforequals);
console.log("inside displayOnBigScreen(): flagforclear =",flagforclear);
	if(flagforoperator == 1)
	{
		// operationList.pop();
		displayScreen.innerHTML = value;
		console.log("inside displayOnBigScreen() if condition: operationList[] =",operationList);
		console.log("inside displayOnBigScreen() if condition:  numberList[] =",numberList);
	}
	else if(flagforoperator == 0)// when more than 1 digit is entred
	{
		
      if(flagforequals == 1)
      {
         clearAllScreen();
         displayScreen.innerHTML = value;
      }
      else if(flagforequals == 0 && flagforclear==0)
      {
          numberList.pop(); 
          smallScreenList.pop();
		    displayScreen.innerHTML = displayScreen.innerHTML + value;
      }
      else if(flagforequals == 0 && flagforclear==1)
      {
          // numberList.pop(); 
          // smallScreenList.pop();
          displayScreen.innerHTML = value;
          flagforclear=0;
      }


		console.log("inside displayOnBigScreen() : operationList[]<0, operationList[] :",operationList);
		console.log("inside displayOnBigScreen() :operationList[]<0, numberList[] :",numberList);
	}
	
  	numberList.push(displayScreen.textContent);//push the input value to the numberlist
  	smallScreenList.push(displayScreen.textContent);//push the input value to the smallscreen array
  	flagforoperator = 0; // set value =0, when any number is entered or pushed in numberList

})


//function inputs the operator value and check which operator does what function-------------------------------
const getOperatorValue = (e => {
	if(e.target.classList.contains("clearAll"))
	{
		clearAllScreen();
      flagforequals =0;
      flagforsign = 0;
      flagforsquare=0;
      flagforclear=0;
	}
	else if(e.target.classList.contains("clear"))
	{
		clearBigScreen();
      flagforequals =0;
      flagforsign = 0;
      flagforsquare=0;
      flagforclear=1;
	}
	else if(e.target.classList.contains("sign"))
	{
      var callfunction=0;
      if(numberList.length == 0 && displayScreen.textContent == 0) //when the display is zero and no value is entered in the numberlist, donot perform sign funtion
      {
         callfunction=1;
      }
      if(callfunction ==0)
      {
   		sign();
         flagforequals =0;
         flagforsign=1;
         flagforsquare=0;
         flagforclear=0;
      }
	}
	else if(e.target.classList.contains("square"))
	{
		square();
      flagforsquare = 1;
      flagforequals =0;
      flagforsign = 0;
      flagforclear=0;
	}
	else if(e.target.classList.contains("backSpace") && flagforoperator == 0) //backspace is entered and before that no operator is entered
	{
		backspace();
      flagforequals =0;
      flagforsign = 0;
      flagforsquare=0;
      flagforclear=0;
	}
   else if(e.target.classList.contains("equals"))
   {
      equals();
      flagforequals =1;
      flagforsign=0;
      flagforsquare=0;
      flagforclear=0;
      
   }
	else //code to push the operator in operationList
	{
		if(flagforequals == 1) // if operator is entered after "="
      {
         smallScreenListLength = smallScreenList.length;
         for(var i=0; i<smallScreenListLength; i++)
         {
           smallScreenList.pop(); 
         }
         smallScreenList.push(numberList[0]);
         console.log('after equals: smallScreenList', smallScreenList);
      }
      console.log('flagforsign', flagforsign);
      if(flagforoperator==1) // if operator is entered successively or same operator is enetered
      {
         console.log('if enter same operator');
         if(smallScreenList[smallScreenList.length-1] ==operationList[operationList.length-1])
         {
            smallScreenList.pop();
            operationList.pop();
         }
       
      }
      
      if(displayScreen.textContent ==0)
      {
         numberList.push("0");
         smallScreenList.push("0");
      }
      operationList.push(e.target.textContent); //calculative operations are entred in the list
      flagforoperator=1; // flag is set as 1, as an operator for calculation is entred
	   smallScreenList.push(e.target.textContent); // operator is push in small screen array

      console.log('inside enter operator: operationList',operationList);
      console.log('inside enter operator: numberList',numberList);
		displayonSmallScreen();
      if(flagforoperator == 1 && numberList.length ==2) // when we have entered two numbers or have two numbers avaible for calculation and an operator is entered 
      {
		   calculation();
      }
      // else if(flagforoperator == 1 && displayScreen.textContent == "0") // when you enter operator after entering "CE" 
      // {
      //    numberList.push("0"); // push zero because the screen is cleared
      //    smallScreenList.push("0"); // push zero is small screen array
      //    smallScreenList.push(e.target.textContent);
      //    calculation();
      //    displayonSmallScreen();
      // }
      flagforequals =0;
      flagforsign =0;
	}
})


//function to clear the screen-------------------------------------------------------------------------
const clearAllScreen = ()=>
{
   console.log('inside clearAll : smallScreen', smallScreenList);
	smallScreenListLength = smallScreenList.length;
	numberListLength = numberList.length;
	operationListLength = operationList.length;

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
	displaySmallScreen.innerHTML = "";
}



//function to clear only Big screen--------------------------------------------------------------
const clearBigScreen = ()=>
{
	if(flagforequals ==1) //in case "=" is entred, clear small and big screen
   {
      clearAllScreen();
   }
   else //clear only big screen
   {
      console.log('inside clearBigScreen: flagforoperator', flagforoperator);
      console.log('inside clearBigScreen: numberList', numberList);
      console.log('inside clearBigScreen: smallScreenList', smallScreenList)
      displayScreen.innerHTML = "0"; 
      if(flagforoperator == 0)
      {
         numberList.pop(); //if the next operator is not entered, need to pop the number we entered
         smallScreenList.pop();

         console.log('after clearBigScreen : numberList', numberList);
         console.log('after clearBigScreen : smallScreenList', smallScreenList);
         console.log('after clearBigScreen : operationList', operationList);
         // flagforoperator=1;
      }
   }  
}



//function to change the sign of input number------------------------------------
const sign = ()=>
{

   console.log('inside sign: numberList', numberList);
   var index = Number(numberList.length)-Number(1); // get the index of the last input value
   console.log('index', index);
   var numberValue = numberList[index].toString();
   var modValue;
   console.log('flagforsign',flagforsign);
   console.log('flagforoperator',flagforoperator);

   if(numberValue.startsWith("-")) 
   {
      modValue = numberValue.substr(1, numberValue-1); //inside negate(), value is always +ve
   }
   else
   {
      modValue = numberValue;
   }

   var string = "negate("+modValue+")";

   if( flagforoperator == 1) //when during calculation sign is changed, display as negate(value)
   {
      
      if(flagforsign == 1)
      {
        string = "negate("+smallScreenList[smallScreenList.length-1]+")";
        smallScreenList.pop();
      }
      else //when flagforsign=0, flagforoperator=1
      {
         string = "negate("+numberList[index]+")";
         numberList.push(numberList[index]);
      }
      smallScreenList.push(string);
      displayonSmallScreen();
   }
   if(flagforequals == 1) //after "=", array is cleared and new values are entered
   {
      smallScreenListLength = smallScreenList.length;
      for(var i=0; i<smallScreenListLength; i++)
      {
         smallScreenList.pop();
      }
      smallScreenList.push(string);      
      displayonSmallScreen();
      console.log('in sign, smallScreenList', smallScreenList);
      flagforequals=0;
      
   }
   if(flagforsign == 1 && flagforoperator ==0) // append negate(value) string when sign is entered succecively
   {
      console.log('sec time sign');
        string = "negate("+smallScreenList[smallScreenList.length-1]+")";
        smallScreenList.pop();
        smallScreenList.push(string);      
       displayonSmallScreen();
   }
      
   numberList[index] = Number(0)-numberList[index]; // change the sign and add it to the number Lists
   if(flagforoperator == 0 && flagforequals == 0) 
   {
       smallScreenList.pop(); //delete the previous entred number from small array list
       smallScreenList.push(numberList[index]); // insert the changed number in small array
       console.log('flagforsign', flagforsign);
       console.log('changed sign value : smallScreenList', smallScreenList);
   }
   
   displayScreen.innerHTML=numberList[index]; // display the changed sign value
   console.log('after sign: numberList', numberList);
}


//function to square the input number------------------------------------
const square = () =>
{
   var squareResult =0;
   var numberValue = numberList[numberList.length-1]

   var string;
   console.log('flagforoperator', flagforoperator);
   console.log('flagforsquare', flagforsquare);
   if(displayScreen.textContent == 0)
   {
      numberValue=0;
   }
   if(flagforequals ==1)
   {
      smallScreenListLength= smallScreenList.length;
      for(var i=0; i<smallScreenListLength; i++)
      {
         smallScreenList.pop();
      } 
   }
	if(flagforsquare ==0 && flagforoperator ==0)
   {
      string = "sqr("+numberValue+")";
      smallScreenList.pop();
   }
   else if(flagforsquare ==0 && flagforoperator ==1)
   {
      string = "sqr("+numberValue+")";
   }
   else if(flagforsquare ==1 && flagforoperator ==0)
   {
      string = "sqr("+smallScreenList[smallScreenList.length-1]+")";
      smallScreenList.pop();
   }
   else if(flagforsquare ==1 && flagforoperator ==1)
   {
      string = "sqr("+numberValue+")";
      flagforoperator =0;
   }

   
   smallScreenList.push(string);
   squareResult = Number(numberValue) * Number(numberValue);
   numberList.pop();
   numberList.push(squareResult);
   console.log('in square numberList', numberList);
   displayScreen.innerHTML = squareResult;
   displayonSmallScreen();
}


//function for backspace------------------------------------
const backspace = (num =>
{
	if(flagforequals == 1) //when backspace is entered after entering "="
   {
      displaySmallScreen.innerHTML = "";
      smallScreenListLength = smallScreenList.length;
      for(var i=0; i<smallScreenListLength; i++) // small screen array is emptied after "="
      {
         smallScreenList.pop();
      }
      smallScreenList.push(numberList[0]); //the result after "=" will be entered in the small array
      console.log('inside backspace: when flagforequals=1', smallScreenList);
   }
   else //when backspace is entered after entering a number
   {
      console.log('inside backspace: when flagforequals=0', smallScreenList);
      var temp = displayScreen.textContent;
      var newArray=[];
      for(items of temp)
      {
         newArray.push(items); //storing the display screen content in newArray[]
      }
      newArray.pop(); //deleting the last digit
      var newDisplay="";
      for(items of newArray)
      {
         newDisplay = newDisplay + items; // creating a string to display the new array
      }
      if(newDisplay.length > 0)
      {
         numberList.push(newDisplay);//adding number after deletion, in the numberList
         smallScreenList.push(newDisplay);//adding number after deletion, in the small screen array
         console.log("inside backspace :display smallScreen");
      }
      else
      {
         newDisplay="0"; //after deletion when no number is left
      }
      displayScreen.innerHTML = newDisplay;

      console.log('inside backspace: numberList', numberList);
      console.log('inside backspace: smallScreenList', smallScreenList);
   }
})


////function all calculations------------------------------------
const calculation = () =>
{
	if(operationList[0] == "+" && operationList[1] != "%") //checking for addition
   {  
      prevOperator = "+";
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
   if(operationList[0] == "-" && operationList[1] != "%") //checking for subtraction
   {
      prevOperator = "-";
      previousresult = numberList[0];
      secondnumber = numberList[1];
      result = subtraction(numberList);
      displayScreen.innerHTML = result;
      numberListLength = numberList.length;
      for(var i=0;i< numberListLength; i++)
      {
         numberList.pop();
      }
      numberList.push(result);
      console.log("after subtraction numberList[]="+ numberList); 
   }
   if(operationList[0] == "X" && operationList[1] != "%") //checking for multiplication
   {
      prevOperator = "X";
      previousresult = numberList[0];
      secondnumber = numberList[1];
      result = multiplication(numberList);
      displayScreen.innerHTML = result;
      numberListLength = numberList.length;
      for(var i=0;i< numberListLength; i++)
      {
         numberList.pop();
      }
      numberList.push(result);
      console.log("after multiplication numberList[]="+ numberList); 
   }
   if(operationList[0] == "/" && operationList[1] != "%") //checking for division
   {
      prevOperator = "/";
      previousresult = numberList[0];
      secondnumber = numberList[1];
      result = division(numberList);
      displayScreen.innerHTML = result;
      numberListLength = numberList.length;
      for(var i=0;i< numberListLength; i++)
      {
         numberList.pop();
      }
      numberList.push(result);
      console.log("after division numberList[]="+ numberList); 
   } 
   if(operationList[1] == "%") //checking for percentage
   {
      prevOperator = "%";
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
      else if(operationList[0] == "+") //checking for percentage increase
      {
         result = percentageIncrease(numberList,previousresult);
         displayScreen.innerHTML = result;
         for(var i=0;i< numberList.length+1; i++)
         {
            numberList.pop();
         }
         numberList.push(result);
      }
      else if(operationList[0] == "-") //checking for percentage decrease
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
   else if(operationList[0] == "%")
   {
      displayScreen.innerHTML ="0";
      displaySmallScreen.innerHTML = "0";
      numberList.pop();
      smallScreenList.pop();
   }
   operationList[0]=operationList[1];
   operationList.pop();
   console.log('after calculation: operationList', operationList);
}


//function when "=" is entered---------------------------------------------------------------
const equals = () =>
{
   console.log('enter equals:flagforequals',flagforequals);
   if(flagforequals == 1) // when "=" is entered sec time
   {
      numberList.push(secondnumber); // push the prev sec number for calculation
      smallScreenListLength = smallScreenList.length;
      for(var i=0; i<smallScreenListLength; i++) // clear the small array
      {
         smallScreenList.pop();
      }
      
      console.log('after pushing sec number: numberList', numberList);
   }
   else // when "=" entered for first time
   {
       numberList.push(numberList[0]); //push the result in numberList as a second number for calculation

   }     
   // console.log('flagforsign', flagforsign);
   if((flagforoperator ==1 || flagforequals == 1 )  && flagforsign ==0) // when u enter another operator or when "=" entered for more than once or when you enter sign for the first time
   {
      smallScreenList.push(numberList[0]); //push the result in the array
      displayonSmallScreen();
      console.log('operation after =: smallScreenList',smallScreenList);
      console.log('operation after =: numberList',numberList);
   }   
   calculation(); //calculate using the result that was pushed
   if( flagforoperator == 1 && flagforequals == 1) //after enter "=", when another operator is entred
   {
      smallScreenList.pop();
      smallScreenList.push(numberList[0]);

   }
   if(flagforequals == 1) //when "=" entered for nore than 1 time
   {
      smallScreenList.push(prevOperator);
      smallScreenList.push(secondnumber);

   }
   smallScreenList.push("=");
   displayonSmallScreen(); //then display

   console.log('after equals :numberList', numberList);
   console.log('after equals :operationList', operationList);
   console.log('after equals :smallScreenList', smallScreenList);
}

//function for addition---------------------------------------------------------
const addition = (arr => {
   var num = 0;
   console.log("inside addition(), arr[] : "+arr);
   num = Number(arr[0])+ Number(arr[1]);
   return num;
})


//function for subtraction---------------------------------------------------------
const subtraction = (arr => {
   var num = 0;
   console.log("inside subtraction, arr[] : "+arr);
   if(Number(arr[0])>=0 && Number(arr[1])>=0)//if both numbers are positive
   {
      num = Number(arr[0]) - Number(arr[1]);
   }
   else
   {
      num = Number(arr[0])+ Number(arr[1]);
   }
   return num;
})

//function for multiplication---------------------------------------------------------
const multiplication = (arr => {
   var num = 0;
   console.log("inside multiplication, arr[] : "+arr);
   num = Number(arr[0]) * Number(arr[1]);
   return num;
})

//function for division---------------------------------------------------------
const division = (arr => {
   console.log("inside division, arr[] : "+arr);
   if(arr[1] == 0 && arr[0] != 0)
   {
      num = "Cannot divide by zero";
   }
   else if(arr[1] == 0 && arr[0] == 0)
   {
      num = "Result is undefined";
   }
   else
   {
      num = Number(arr[0]) / Number(arr[1]);
   }
   return num;
})


//function for percentage---------------------------------------------------------
const percentage = (arr => {
   var num = arr[0];
   console.log("inside percentage, arr[] : "+arr);
   num = (Number(arr[0]) * Number(arr[1])) / Number(100);
   return num;
})


//function for percent Increase---------------------------------------------------------
const percentageIncrease = (arr, previousresult) => {
   var num = arr[0];
   console.log("inside percentage  Increase, arr[] : "+arr);
   // num = ((Number(arr[0]) * Number(previousresult))/Number(100)) + Number(previousresult);
   num = ((Number(arr[0]) * Number((arr[1])))/Number(100)) + Number((arr[0]));
   return num;
}


//function for percent decrease---------------------------------------------------------
const percentageDecrease = (arr, previousresult) => {
   var num = arr[0];
   console.log("inside percentage Decrease, arr[] : "+arr);
   // num = ((Number(arr[0]) * Number(previousresult))/Number(100)) + Number(previousresult);
   num = (Number((arr[0]) - (Number(arr[0]) * Number((arr[1])))/Number(100)));
   return num;
}

//function to display on small screen----------------------------------------------------
const displayonSmallScreen = () =>{
	displaySmallScreen.innerHTML = "";
	for(var i=0; i<smallScreenList.length; i++)
	{
		displaySmallScreen.innerHTML = displaySmallScreen.textContent + smallScreenList[i];
	}
	console.log('displayonSmallScreen: smallScreenList', smallScreenList);
}


// entering values using mouseclick------------------------------------------------------
for(var i=0;i<numbers.length;i++)
{
	numbers[i].addEventListener("click", getNumberValue);  //input the numbers
}

for(var i=0;i<operation.length;i++)
{
	operation[i].addEventListener("click", getOperatorValue); //input the operator
}
var button = document.getElementById("enter"); // retrive the id of button so that we can select button and perform events on it
var input = document.getElementById("enteritem");  // // retrive the id of textfield so that we can select textfield and perform events on it
var ul= document.getElementById("list");  // now getting the value of ul element so that we can attach the above li element to it
var listitem = document.getElementsByTagName("li");
 var deleteitem = document.getElementsByClassName("Delete");






//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteitem.length; i++){
	deleteitem[i].addEventListener("click", removeParent);
}


function removeParent(evt) {
  // evt.target.removeEventListener("click", removeParent);
  evt.target.parentNode.remove();
  
}



//Add new list items with delete button
function inputsize()
{
	return input.value.length;
}

function createButton()
{
	var but = document.createElement("button"); //creating a delete button
		but.innerHTML = "Delete Me";
		but.onclick = removeParent; // adding funvtion to delete the current list item on clicking the button
		return but;
}

function createList()
{
		var li = document.createElement("li");  // creating a li element
		li.appendChild(document.createTextNode(input.value)); // adding the text to the li element
		
		
		
		// var bre = document.createElement("br"); //creating break line
		// li.appendChild(bre); // adding break line
		li.appendChild(createButton()); //adding the above created delete button to li

		ul.appendChild(li); // attaching the new formed li element to the ul element


		input.value=""; // after clicking the text field will be null
}





function additemAfterClick()
{
	console.log("CLICK!");

	if (inputsize() > 0) // when we donot enter a text, nothing below will work
	{
		console.log(input.value); 
		createList();
	}
}




function additemAfterkeypress(event)
{
	console.log("CLICK!");

	if (inputsize() > 0 && event.keyCode === 13) // when we donot enter a text, nothing below will work && the keycode of "enter key" is 13, so when we use enter key only below function works
	{
		console.log(input.value); 
		createList();
	}
}

function strike(e)
{
	
	if(e.target.TagName="li")
	{
		e.target.classList.toggle("done");
	}
	
}




button.addEventListener("click", additemAfterClick);  // we are adding event to the button by performing a function on it when it gets clicked


input.addEventListener("keypress", additemAfterkeypress);  // we are adding event to the textfield by performing a function on it when a key is pressed it performs the below function
	
ul.addEventListener("click", strike); 

// deleteitem.addEventListener("click", deleteList);




var btn = document.getElementsByClassName("button");
var list =document.getElementsByClassName("Droplist");
var li = document.getElementsByTagName("a");
var text = document.getElementById("content");
var project = document.getElementById("project");
var size = document.getElementById("size");
var navigation = document.getElementById("navBar");
var scrollbtn = document.getElementById("scrollbtn");

function scroll(e) 
{

	// e.target.classList.add("buttonActive");	
	for(i=0; i<btn.length; i++)
	{

		if(e.target.parentElement.id == btn[i].parentElement.id) //if the selected button's parent div element has id which is equal to the id of the button of loop, perform the below
		{
			// console.log("inside if statement: "+e.target.parentElement.id+" | "+btn[i].parentElement.id);
			// e.target.classList.add("buttonActive");

			btn[i].classList.add("buttonActive"); //changine the background on clicking the button

			// console.log(e.target.classList);

			if(btn[i].parentElement.classList.contains("dropdownDiv"))
			{
				

				btn[i].parentElement.classList.toggle("dropdownDivActive")	;
				if (window.innerWidth < 1230)
				 {
				 	navigation.classList.add("navBarActive");
				 }

			}

		}
		else
		{
			// console.log("inside else statement: "+ btn[i].parentElement.id);
			btn[i].classList.remove("buttonActive"); //change the button background to normal when unselected/ different button is selected
			if (btn[i].parentElement.classList.contains("dropdownDiv"))
			{
				if (window.innerWidth < 1230)
				 {
				 	navigation.classList.remove("navBarActive");
				 }
				btn[i].parentElement.classList.remove("dropdownDivActive");
			}


		}



		// if(btn[i].classList.contains("buttonActive"))
		// {
		// 	navigation.classList.add("navBarActive");
		// }
		// else
		// {
		// 	navigation.classList.remove("navBarActive");
		// }

	}
	



	// for(i=0; i<btn.length; i++)
	// {

	// 	if(e.target.parentElement.id != btn[i].parentElement.id)
	// 	{
	// 		console.log("inside else statement: "+ btn[i].parentElement.id);
	// 		e.target.classList.remove("buttonActive");
	// 	}
	// }
}

function blurEffect(e) 
{



	for (var i = 0; i< btn.length; i++) 
	{
		
				btn[i].parentElement.classList.remove("dropdownDivActive");
			
	}

	

}

function background(e)
{
	for (var i = 0; i< li.length; i++) {
		if(e.target.id == li[i].id)
		{
			li[i].parentElement.classList.add("buttonlistActive"); //changing the background of the selected list item
			if (window.innerWidth < 1230)
				 {
				 	navigation.classList.add("navBarActive");
				 }
		}
		else
		{
			li[i].parentElement.classList.remove("buttonlistActive");
			// navigation.classList.add("navBarActive");
		}
	}
}



function screensize(e)
{
	size.innerHTML  = "Screen Size: " + window.innerWidth;
	console.log(window.innerWidth);
}

function defaultsize(e)
{
	size.innerHTML  = "Screen Size: ";
}

function onload() 
{
	btn[0].classList.add("buttonActive");
}

function scrollbtnclick(e)
{
	navigation.classList.toggle("navBarActive");
}


function scrollFunction(e) 
{

	// console.log("scroll height: "+text.scrollHeight);
	// console.log("clientHeight: "+text.clientHeight);
	// console.log("offsetHeight: "+text.offsetHeight);
	
	console.log(text.scrollTop);

	let fat = document.getElementById("fat");
	console.log(elementInViewport2(fat));
	 if (elementInViewport2(fat))
	 	//(text.scrollTop >= 20 && text.scrollTop	<212)
	 {
	 	
	 	btn[0].classList.add("buttonActive");
	 	// li[1].parentElement.classList.add("buttonlistActive");
	 }
	 else
	 {
	 	btn[0].classList.remove("buttonActive");
	 }

	 if (text.scrollTop >= 212 && text.scrollTop <404)
	 {
	 	
	 	btn[1].classList.add("buttonActive");
	 	// li[1].parentElement.classList.add("buttonlistActive");
	 }
	 else
	 {
	 	btn[1].classList.remove("buttonActive");
	 }

	 if (text.scrollTop >= 404 && text.scrollTop < 595)
	 {
	 	
	 	btn[2].classList.add("buttonActive");
	 	btn[2].parentElement.classList.add("dropdownDivActive");
	 	// li[1].parentElement.classList.add("buttonlistActive");
	 	if (text.scrollTop < 595)
	 	{
	 		li[0].parentElement.classList.add("buttonlistActive");
	 	}
	 	else
	 	{
	 		li[0].parentElement.classList.remove("buttonlistActive");
	 	}
	 	if (text.scrollTop >= 595 && text.scrollTop < 676)
	 	{
	 		li[1].parentElement.classList.add("buttonlistActive");
	 	}
	 	else
	 	{
	 		li[1].parentElement.classList.remove("buttonlistActive");
	 	}
	 	if (text.scrollTop >= 595 && text.scrollTop < 676)
	 	{
	 		li[2].parentElement.classList.add("buttonlistActive");
	 	}
	 	else
	 	{
	 		li[2].parentElement.classList.remove("buttonlistActive");
	 	}

	 }
	 else
	 {
	 	btn[2].classList.remove("buttonActive");
	 	btn[2].parentElement.classList.remove("dropdownDivActive");
	 }
}


for (var i = 0; i < btn.length; i++) 
{
	btn[i].addEventListener("click", scroll);
	// btn[i].addEventListener("focusout", blurEffect);
}

for (var i = 0; i< list.length; i++) 
{
	list[i].addEventListener("focusout", blurEffect);
}

for (var i = 0; i< li.length; i++) 
{
	li[i].addEventListener("click", background);
}

project.addEventListener("mouseover", screensize);
project.addEventListener("mouseout", defaultsize);
scrollbtn.addEventListener("click", scrollbtnclick);
text.addEventListener("scroll", scrollFunction); //to highlight the nav bar when scrolled

window.onload=onload(); //on loading the window, the onload() function will be called


function elementInViewport2(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  
  el = el.offsetParent;
   
  
  return (
    top < (el.scrollTop + el.offsetHeight) &&
    (top + height) > text.scrollTop 
  );
}


function changeNavItem () {
	let navItems = document.querySelectorAll(".nav-action-item");
}
var btn = document.getElementsByClassName("button");
var btndiv = document.getElementsByClassName("buttonDiv");
var navigation = document.getElementById("navBar");
var li = document.getElementsByTagName("a");
var navbtn = document.getElementById("navbtn");
var contentdiv = document.getElementById("content");
var contSection = document.getElementsByClassName("content-section");
var section = document.getElementsByClassName("section");

var evrnt = document.getElementById("btn2");


function scrollbar(e) {
	
	e.preventDefault();
	for(var i=0; i<btn.length; i++)
	{
		if(!(btn[i].classList.contains("buttondrop")))
		{
			if (e.target.getAttribute("href") === btn[i].getAttribute("href")) {
	                document.querySelector(btn[i].getAttribute("href")).scrollIntoView({ behavior: 'smooth'})
	            }
		}
	}
}


function buttonative(e) {
	

	for(i=0; i<btn.length; i++)
	{
		if(e.target.parentElement.id == btn[i].parentElement.id) //if the selected button's parent div element has id which is equal to the id of the button of loop, perform the below
		{
			btn[i].classList.add("buttonActive"); //changine the background on clicking the button
			

		}
		else
		{
			btn[i].classList.remove("buttonActive"); //change the button background to normal when unselected/ different button is selected
			
		}

	}


}

function dropbuttonactive(e) {
	
	for(var i=0; i<btndiv.length; i++)
	{
		if(btndiv[i].classList.contains("dropdownDiv") && (e.target.parentElement.id == btndiv[i].id))
		{
			btndiv[i].firstElementChild.classList.add("buttonActive");
			btndiv[i].classList.toggle("dropdownDivActive");
			if (window.innerWidth < 1230)
			{
				navigation.classList.add("navBarActive");
			}
		}
		else if((e.target.parentElement.id != btndiv[i].id) && (btndiv[i].classList.contains("dropdownDiv")))
		{
			btndiv[i].firstElementChild.classList.remove("buttonActive");
			btndiv[i].classList.remove("dropdownDivActive");
			if (window.innerWidth < 1230)
			{
				navigation.classList.remove("navBarActive");
			}
		}
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
			
		}
	}
}


function navbtnclick(e)
{
	navigation.classList.toggle("navBarActive");
}


function handleScroll(e) {
	
	for(var i=0; i<section.length; i++)
	{
		var viewportOffset = section[i].getBoundingClientRect();


		if (window.innerWidth < 1230)
		{
			if (viewportOffset.top < 277 && viewportOffset.top > -`${viewportOffset.height - 277}` ) 
			{		
			
				if(document.querySelector(`a[href='#${contSection[i].id}']`).parentElement.nodeName=="LI")
				{
					
					document.querySelector(".buttondrop").classList.add("buttonActive");
					document.querySelector(`a[href='#${contSection[i].id}']`).parentElement.classList.add("buttonlistActive");
				}
				else
				{
	                document.querySelector(`a[href='#${contSection[i].id}']`).classList.add("buttonActive");
	                document.querySelector(".buttondrop").classList.remove("buttonActive");
	                

	            } 
         	}
        	else
        	{


            	document.querySelector(`a[href='#${contSection[i].id}']`).parentElement.classList.remove("buttonlistActive");
            	document.querySelector(`a[href='#${contSection[i].id}']`).classList.remove("buttonActive");

 
            }
		}
		else
		{
			
				if (viewportOffset.top < 117 && viewportOffset.top > -`${viewportOffset.height - 117}` ) 
				{		
					
					if(document.querySelector(`a[href='#${contSection[i].id}']`).parentElement.nodeName=="LI")
					{
						
						document.querySelector(".buttondrop").classList.add("buttonActive");
						document.querySelector(`a[href='#${contSection[i].id}']`).parentElement.classList.add("buttonlistActive");
					}
					else
					{
		                document.querySelector(`a[href='#${contSection[i].id}']`).classList.add("buttonActive");
		                document.querySelector(".buttondrop").classList.remove("buttonActive");
		                

		            } 
		         }
		        else {


		            	document.querySelector(`a[href='#${contSection[i].id}']`).parentElement.classList.remove("buttonlistActive");
		            	document.querySelector(`a[href='#${contSection[i].id}']`).classList.remove("buttonActive");

		 
		            }
		}
	}
}



for(var i=0; i<btn.length; i++)
{
	// console.log("button id: "+btn[i].id);
	// btn[i].addEventListener("click", scrollbar);
	btn[i].addEventListener("click", buttonative);
	btn[i].addEventListener("click", dropbuttonactive);
}

for (var i = 0; i< li.length; i++) 
{
	li[i].addEventListener("click", background);
}

navbtn.addEventListener("click", navbtnclick);

contentdiv.addEventListener("scroll", handleScroll);
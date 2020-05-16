var btnvalue = document.getElementsByClassName("btn");
var firstlist = document.getElementsByClassName("firstlist");
var projectName = document.getElementById("project");
var screensize = document.getElementById("example");
var scrollbtn = document.getElementById("scrollbtn");
var container = document.getElementById("container");

// var frameclass = document.getElementsByClassName("frame");

function show(e) {


	if (window.innerWidth < 903) {

		if(e.target.classList.contains("rightdrop"))
		{
			e.target.nextElementSibling.classList.remove("rightlist");
		}

		console.log(e.target.parentElement.classList);
		e.target.parentElement.classList.toggle("dropNew");
		e.target.nextElementSibling.classList.toggle("firstListNew");



		for(i=0; i< firstlist.length; i++)
		{
			if(firstlist[i].id != e.target.nextElementSibling.id )
			{
				// console.log(firstlist[i].id);
				firstlist[i].classList.remove("firstListNew");
				firstlist[i].previousElementSibling.classList.remove("btnNew");
				firstlist[i].parentElement.classList.remove("dropNew");
			}

		}
	}

else{
		// console.log(e.target.nextElementSibling.id);
		e.target.classList.toggle("btnNew");
		// console.log(e.target.classList);
		e.target.nextElementSibling.classList.toggle("firstListNew");
		// console.log(e.target.parentElement.classList);
		// console.log(e.target.firstElementChild.id);
		// console.log(e.target.nextElementSibling.id);


		for(i=0; i< firstlist.length; i++)
		{
			if(firstlist[i].id != e.target.nextElementSibling.id )
			{
				console.log(firstlist[i].id);
				firstlist[i].classList.remove("firstListNew");
				firstlist[i].previousElementSibling.classList.remove("btnNew");
			}

		}
	}
	

	
}


function blurEffect(e)
{		

	if (window.innerWidth > 903)
	{
			for(i=0; i< firstlist.length; i++)
			{
					if(firstlist[i].classList.contains("firstListNew"))
					{
						// console.log(firstlist[i].id);
						firstlist[i].classList.remove("firstListNew");
					}

					if(firstlist[i].previousElementSibling.classList.contains("btnNew"))
					{
						// console.log(firstlist[i].id);
						firstlist[i].previousElementSibling.classList.remove("btnNew");
					}


					if(firstlist[i].parentElement.classList.contains("dropNew"))
					{
						firstlist[i].parentElement.classList.remove("dropNew");
					}
					
				

			}
	}

	// else
	// {
	// 	for(i=0; i< firstlist.length; i++)
	// 		{
	// 				if(firstlist[i].classList.contains("firstListNew"))
	// 				{
	// 					// console.log(firstlist[i].id);
	// 					firstlist[i].classList.remove("firstListNew");
	// 				}
	// 		}	
	// }

}

// function showDrop(e)
// {
// 	// frameclass
	
// }
function showContainer(e)
{
	container.classList.toggle("containerNew");
}

function screen(e)
{
	
		screensize.innerHTML = "Screen Size: " + window.innerWidth;

		// if (window.innerWidth<= "903px") {

		// 	for(i=0; i< btnvalue.length; i++)
		// 	{
		// 		btnvalue[i].addEventListener("click", showDrop);
		// 		btnvalue[i].addEventListener("focusout", blurEffect);
		// 		console.log(btnvalue[i]);
		// 	}

		// }

	
}

function defaultName(e)
{
	screensize.innerHTML="Screen Size:"
}


for(i=0; i< btnvalue.length; i++)
	{
		btnvalue[i].addEventListener("click", show);
		btnvalue[i].addEventListener("focusout", blurEffect);
		console.log(btnvalue[i]);
	}

	// for(i=0; i< btnvalue.length; i++)
	// {
	// 	btnvalue[i].addEventListener("focusout", blurEffect);
		
	// }
	


	projectName.addEventListener("mouseover", screen);
	projectName.addEventListener("mouseout", defaultName);
	scrollbtn.addEventListener("click", showContainer);

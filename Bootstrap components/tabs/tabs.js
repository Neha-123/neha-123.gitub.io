var btn = document.getElementsByClassName("btn");
var list = document.getElementsByClassName("dropList");
var content = document.getElementsByClassName("content");
var listContent = document.getElementsByClassName("listContent");
var listelement = document.getElementsByClassName("listclass");

function show(e) 
{


	for(var i=0; i< btn.length; i++)
	{

		
	if((e.target.id == btn[i].id) && !(btn[i].parentElement.classList.contains("dropdownbtnDiv")))
	{
	showcontent(i);
	 btn[i].classList.add("btnActive");
	 console.log("loop1");

	}
	else if((e.target.id == btn[i].id) && (btn[i].parentElement.classList.contains("dropdownbtnDiv")))
	{
		btn[i].classList.add("btnActive");
		// listShow(i);
		btn[i].parentElement.classList.toggle("dropdownbtnDivActive");
		btn[i].nextElementSibling.classList.toggle("dropListActive");
		
		console.log("loop2 : else if");

		

	}
	else if((e.target.id != btn[i].id) && !(e.target.parentElement.classList.contains("dropdownbtnDiv")))
		//!(e.target.id == btn[2].id) ) 
	{
			
			hidecontent(i);
			btn[i].classList.remove("btnActive");
			console.log("loop 3 : removing button from else if | "+btn[i].id);
			if(btn[i].parentElement.classList.contains("dropdownbtnDivActive"))
			{
			btn[i].parentElement.classList.remove("dropdownbtnDivActive");
			btn[i].nextElementSibling.classList.remove("dropListActive");
			btn[i].classList.remove("btnselectedActive");
			}
			else
			{
				btn[i].classList.remove("btnselectedActive");
				for(var j=0; j<listelement.length; j++)
				{
						listcontenthide(j);
						listelement[j].classList.remove("listElementActive");
				}
			}
			// else
			// {
			// 	for(var i=0; i<listelement.length; i++)
			// 	{
			// 		listcontenthide(i);
			// 	}
		
			// }
			
		
			
		
	}
	else
	{
		btn[i].classList.remove("btnActive");

		console.log("loop 4 : removing button");

		
	}


		// if(e.target.id == btn[i].id) 
		// 	//&& !(btn[i].parentElement.classList.contains("dropdownbtnDiv")))
		// {
		// 	btn[i].classList.add("btnActive");
			
		// 	if(!(btn[i].parentElement.classList.contains("dropdownbtnDiv")))
		// 	{
		// 		console.log("showing content");
		// 		showcontent(i);
		// 	}
			
		// }
		// // else if ((e.target.id == btn[i].id) && (btn[i].parentElement.classList.contains("dropdownbtnDiv")))
		// // {
		// // 	console.log("green");
		// // 	// console.log("else inactive");
		// // 	// btn[i].classList.remove("btnActive");
		// // 	// hidecontent(i);
			
		// // }
		// else if((e.target.id != btn[i].id) && (btn[i].parentElement.classList.contains("dropdownbtnDiv")))
		// {
		// 	// showcontent(i);
		// 	console.log("inactive: "+btn[i].id);
		// 	hidecontent(i);
		// 	btn[i].classList.remove("btnActive");
		// }

		// if(btn[i].parentElement.classList.contains("dropdownbtnDiv") && (e.target.id == btn[i].id))
		// {
		// 	console.log("green");
		// }



	}




	// for(i=0; i< btn.length; i++)
	// {
	// 	if(e.target.id == btn[i].id)
	// 	{	
	// 		btn[i].classList.add("btnActive");
	// 		if(btn[i].parentElement.classList.contains("dropdownbtnDiv"))
	// 		{
	// 			btn[i].parentElement.classList.toggle("dropdownbtnDivActive");
	// 			btn[i].nextElementSibling.classList.toggle("dropListActive");
	// 		}

	// 	}
	// 	else
	// 	{
	// 		btn[i].classList.remove("btnActive");
	// 		if(btn[i].parentElement.classList.contains("dropdownbtnDiv"))
	// 		{
	// 			// btn[i].classList.remove("btnActive");
	// 			btn[i].parentElement.classList.remove("dropdownbtnDivActive");
	// 			btn[i].nextElementSibling.classList.remove("dropListActive");
	// 		}
	// 	}
	// }
}



function showcontent(n)
{
	content[n].classList.remove("fade");
	// content[n].style.transition= "all 5s";
	// content[n].style.display = "block";
	setTimeout(function()
	{
		content[n].classList.add("contentShow");
	}, 500);
	
}


function hidecontent(n) 
{
	// content[n].style.display = "none";
	content[n].classList.add("fade");
	setTimeout(function()
	{
		content[n].classList.remove("contentShow");
	}, 400);
	
	// content[n].style.transition= "display 2s";
}


function listcontentshow(n)
{
	// listContent[n].parentElement.style.display = "block";
	listContent[n].parentElement.classList.remove("fade");
	setTimeout(function()
	{
		listContent[n].parentElement.classList.add("contentShow");
	}, 500);
}


function listcontenthide(n)
 {
	// listContent[n].parentElement.style.display = "none";
	listContent[n].parentElement.classList.add("fade");
	setTimeout(function()
	{
		listContent[n].parentElement.classList.remove("contentShow");
	}, 400);
	
}

function listShow(e)
 {

 	console.log(e.target.id);
 	for(var j=0; j< btn.length; j++)
 	{


 		if(!(btn[j].parentElement.classList.contains("dropdownbtnDiv")))
 		{
 			hidecontent(j);
 		}
 		else
 		{
 			if(btn[j].parentElement.classList.contains("dropdownbtnDivActive"))
 			{
 				btn[j].classList.add("btnselectedActive");
 				btn[j].parentElement.classList.remove("dropdownbtnDivActive")
 				btn[j].nextElementSibling.classList.remove("dropListActive");
 			}
 			else
 			{
 				btn[j].classList.remove("btnselectedActive");
 			}	
 			btn[j].classList.remove("btnActive");
 			// btn[j].parentElement.classList.remove("dropdownbtnDivActive")
 		// 	btn[j].parentElement.classList.remove("dropdownbtnDivActive");
			// btn[j].nextElementSibling.classList.remove("dropListActive");
 		}
 	}

 	for(var i=0; i<listelement.length; i++)
	{
		if(e.target.id == listelement[i].id)
		{
			listcontentshow(i);
			listelement[i].classList.add("listElementActive");
			
			
		}
		else
		{
			listcontenthide(i)
			listelement[i].classList.remove("listElementActive");
			
			
		}

		
		
	
	}
			// if(!(e.target.parentElement.previousSibling.classList.contains("dropListActive")))
			// {
			// 	listContent[i].parentElement.style.display = "none";
			// }








 // 	for (var i = 0; i< btn.length; i++)
 // 	{
 // 		if(btn[i].parentElement.classList.contains("dropdownbtnDiv"))
 // 		{
	//  		if(btn[i].nextElementSibling.classList.contains("dropListActive"))	
	//  		{	
	// 		 	for(var j=0; j< listelement.length; j++)
	// 			{
				
	// 				if(e.target.id == listelement[j].id)
	// 				{
	// 					console.log("targetid : "+e.target.id);
	// 					console.log("listid : "+listelement[j].id);
	// 					listelement[j].classList.add("listElementActive");
					
	// 					listContent[j].parentElement.style.display = "block";
	// 				}
	// 				else
	// 				{
	// 					listelement[j].classList.remove("listElementActive");
	// 					listContent[j].parentElement.style.display = "none";
	// 				}
	// 			}
	// 		}

	// 		else
	// 		{
	// 			for(var j=0; j< listelement.length; j++)
	// 			{
	// 				if(listelement[j].classList.contains("listElementActive"))
	// 				{
	// 					listelement[j].classList.remove("listElementActive");
	// 					listContent[j].parentElement.style.display = "none";
	// 				}
	// 			}
	// 		}
	// }

	

			// else
		// {
		// 	for(var j=0; j< listelement.length; j++)
		// 	{
		// 		listelement[j].classList.remove("listElementActive");
		// 		listContent[j].parentElement.style.display = "none";
		// 	}
		// }
	
}

function onload()
{
	showcontent(0);
	 btn[0].classList.add("btnActive");
}




for(i=0; i<btn.length; i++)
{
	btn[i].addEventListener("click", show);
	// btn[i].addEventListener("click", showcontent);
	// btn[i].addEventListener("focusout", blurEffect);
}

for(var i=0; i<listelement.length; i++)
{
	listelement[i].addEventListener("click", listShow);
	
}

window.onload=onload();
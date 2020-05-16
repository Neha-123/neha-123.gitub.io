
var btn = document.getElementsByClassName("button");
var spantext = document.getElementsByClassName("text");
var arrow = document.createElement("div");
var arrownode = document.createTextNode(" ");
arrow.appendChild(arrownode);


function show(n)
{
	spantext[n].classList.add("active");
			setTimeout(function()
			{
				spantext[n].classList.add("fade");
				
				spantext[n].appendChild(arrow);
				// arrow.classList.add("arrownode");
			}, 200);
}


function hide(n)
{
	spantext[n].classList.remove("fade");
			
			setTimeout(function()
			{
				spantext[n].classList.remove("active");
				
				// spantext[n].appendChild(newItem);
				// newItem.classList.remove("tooltiptextArrow");
			}, 400);
}



function showtext(e) {
	for(var i=0; i<btn.length; i++)
	{
		if(e.target.firstElementChild.id==btn[i].firstElementChild.id)
		{
			

			show(i);
			
			

			if(e.target.firstElementChild.id=="left")
			{
				// console.log(e.target.firstElementChild.id);
				
				
				arrow.classList.add("leftarrow");
			}
			if(e.target.firstElementChild.id=="top")
			{
				// console.log(e.target.firstElementChild.id);
				
				
				arrow.classList.add("toparrow");
			}
			if(e.target.firstElementChild.id=="bottom")
			{
				// console.log(e.target.firstElementChild.id);
				
				
				arrow.classList.add("bottomarrow");
			}
			if(e.target.firstElementChild.id=="right")
			{
				// console.log(e.target.firstElementChild.id);
				
				
				arrow.classList.add("rightarrow");
			}
		}
	}	

}

function hidetext(e) {
	for(var i=0; i<btn.length; i++)
	{
		if(e.target.firstElementChild.id==btn[i].firstElementChild.id)
		{
			
			// console.log(e.target.firstElementChild.id);
			// e.target.firstElementChild.style.display="none";
			hide(i);
		}
	}
}



for(var i=0; i<btn.length; i++)
{
	btn[i].addEventListener("mouseenter", showtext);
	btn[i].addEventListener("mouseout", hidetext);
}
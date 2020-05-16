var tootip = document.getElementsByClassName("popup");
var tootiptext = document.getElementsByClassName("tooltiptext");
var newItem = document.createElement("div");  
var textnode = document.createTextNode(" ");
newItem.appendChild(textnode);

function show(n)
{
			
			tootiptext[n].classList.add("active");
			setTimeout(function()
			{
				tootiptext[n].classList.add("fade");
				
				tootiptext[n].appendChild(newItem);
				newItem.classList.add("tooltiptextArrow");
			}, 200);
}


function hide(n)
{
			tootiptext[n].classList.remove("fade");
			
			setTimeout(function()
			{
				tootiptext[n].classList.remove("active");
				
				tootiptext[n].appendChild(newItem);
				newItem.classList.remove("tooltiptextArrow");
			}, 400);
}



function showtext(e) {
	
	for(var i=0; i<tootip.length; i++)
	{
		if(e.target.id == tootip[i].id)
		{
			show(i);
			// newItem.style.color="red";
			// newItem.style.position= "absolute";


		}
	}
}


function hidetext(e) {
	for(var i=0; i<tootip.length; i++)
	{
		if(e.target.id == tootip[i].id)
		{
			hide(i);
		}
	}
}

for(var i=0; i< tootip.length; i++)
{
	tootip[i].addEventListener("mouseenter", showtext);
	tootip[i].addEventListener("mouseout", hidetext);
}
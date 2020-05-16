var btn = document.getElementsByClassName("button");
var spantext = document.getElementsByClassName("text");
var item = document.createElement("i");
var text = document.createTextNode(" ");
item.appendChild(text);


function show(n)
{
	if(spantext[n].classList.contains("active"))
	{
		spantext[n].classList.remove("fade");
			
			setTimeout(function()
			{
				spantext[n].classList.remove("active");
				
				// spantext[n].appendChild(newItem);
				// newItem.classList.remove("tooltiptextArrow");
			}, 400);
	}
	else
	{
			spantext[n].classList.add("active");
			setTimeout(function()
			{
				spantext[n].classList.add("fade");
				
				spantext[n].appendChild(item);
				// arrow.classList.add("arrownode");
			}, 200);
		}
}



function toggle(e) {
	
	for(var i=0; i<btn.length; i++)
	{
		if(e.target.id == btn[i].id)
		{
			btn[i].classList.toggle("buttonActive");

			show(i);
			// e.target.firstElementChild.classList.toggle("active");	
			// e.target.firstElementChild.appendChild(item);

			if(spantext[i].id == "right")
			{
				item.classList.toggle("rightArrow");
			}
			if(spantext[i].id == "top")
			{
				item.classList.toggle("topArrow");
			}
			if(spantext[i].id == "bottom")
			{
				item.classList.toggle("bottomArrow");
			}
			if(spantext[i].id == "left")
			{
				item.classList.toggle("leftArrow");
			}
		}
		else
		{
			console.log("else condition");
		}
	}
}

// function mousedown(e) {
// 	e.target.classList.add("buttonActive");
// }

// function mouseup(e) {
// 	e.target.classList.remove("buttonActive");
// }



for(var i=0; i<btn.length; i++)
{
	btn[i].addEventListener("click", toggle);
	// btn[i].addEventListener("mousedown", mousedown);
	// btn[i].addEventListener("mouseup", mouseup);
	
}
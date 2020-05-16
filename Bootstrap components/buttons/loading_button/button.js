
var btn  = document.getElementById("load");
// var sheets = document.styleSheets;



function setProperty(e)
{
	// btn.style.background = "#4d88ff";
	// btn.style.cursor = "not-allowed";
	btn.innerHTML ="loading....";
	btn.classList.add("load");
	
	    window.setTimeout(defaultButton, 3000);

}

function defaultButton()
{		
		btn.innerHTML ="Loading State";
		btn.classList.remove("load");
		
		
}




btn.addEventListener("click", setProperty);
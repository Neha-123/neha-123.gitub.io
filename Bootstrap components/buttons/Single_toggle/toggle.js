var btn= document.getElementById("load");


function toggle(e)
{
	btn.classList.toggle("toggleButton"); //The classList property returns the class name(s) of an element, as a DOMTokenList object. 
										  //This property is useful to add, remove and toggle CSS classes on an element.

}

btn.addEventListener("click", toggle);
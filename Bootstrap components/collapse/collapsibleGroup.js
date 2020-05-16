var boxdiv= document.getElementById("box");
// var btn1=document.getElementById("item1");
// var btn2=document.getElementById("item2");
// var btn3=document.getElementById("item3");
var btn=document.getElementsByClassName("item1");
var containerdiv= document.getElementById("container");
// var texdiv = document.getElementById("div1");

function expand(e) 
{
	
	// div1.classList.toggle("divNew");
	e.target.parentElement.classList.toggle("divNew");
	

	if (e.target.parentElement.classList.contains("divNew")) 
			{
				boxdiv.classList.add("boxNew");	
				containerdiv.classList.add("containerNew");
			}
		else
		{
			boxdiv.classList.remove("boxNew");	
				containerdiv.classList.remove("containerNew");
		}

		for(var i=0; i<btn.length; i++)
		{
			if (btn[i].id != e.target.id)
			{
 				btn[i].parentElement.classList.remove("divNew");
			}

		}





	
	// if (e.target.parentElement.nextElementSibling!=null)
	// {

	// 	e.target.parentElement.nextElementSibling.classList.remove("divNew");
	// }

	// if (e.target.parentElement.previousElementSibling!=null) 
	// {

	// 	e.target.parentElement.previousElementSibling.classList.remove("divNew");
	// }

	



	// console.log(e.target.tagName);
	// console.log(e.target.classList);
	// console.log(e.target.id);
	// console.log(btn[1].id);
	// console.log(e.target.parentElement.classList);
	// console.log(btn[1].parentElement.classList.value);
	// console.log(e.target.parentElement);
	// console.log(e.target.parentElement.nextElementSibling);
	// console.log(e.target.parentElement.previousElementSibling);
	
	
	
}



for (var i = 0; i < btn.length; i++) {

// console.log(btn[i].classList);
btn[i].addEventListener("click", expand);

}

// btn1.addEventListener("click", expand);
// btn2.addEventListener("click", expand);
// btn3.addEventListener("click", expand);

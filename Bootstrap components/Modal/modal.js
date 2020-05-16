var btn = document.getElementsByClassName("btn");
var modal = document.getElementsByClassName("modal");
var container = document.getElementsByClassName("modal-container");
var box= document.getElementsByClassName("box");
var cross = document.getElementsByClassName("cross");
var closebutton= document.getElementsByClassName("closebutton");

function launchmodal(e) {


	btn[0].classList.add("btnactive");
	container[0].classList.add("in");
	
	
	container[0].classList.remove("hide")
	setTimeout(function(){
		modal[0].classList.add("open")
		container[0].classList.remove("fade")

	}, 20)
	
	

}

function closemodal(e) {
	
	btn[0].classList.remove("btnactive");
	
	container[0].classList.remove("in");
	modal[0].classList.remove("open")
	container[0].classList.add("fade")


	setTimeout(function()
	{
		container[0].classList.add("hide")
	}, 200);

}



function keyclose(e) {
	var x = e.keyCode;
  if (x == 27) {
    closemodal(e);
  }
}


function clickoutsideclose(e) {
	if(e.target.classList.contains("modal-container"))
	{
		closemodal(e);
	}
}


for(var i=0; i<btn.length; i++)
{
	btn[i].addEventListener("click", launchmodal);

}

cross[0].addEventListener("click", closemodal);
closebutton[0].addEventListener("click", closemodal);
document.addEventListener("keydown", keyclose);
document.addEventListener("click", clickoutsideclose);
// modal[0].addEventListener("blur", closemodal);


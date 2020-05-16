var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var container = document.getElementById("box");
var content = document.getElementById("hide");

function slide(e) {
	container.classList.toggle("active");
	// content.classList.toggle("show");
}


btn1.addEventListener("click", slide);
btn2.addEventListener("click", slide);
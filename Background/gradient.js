var input1 = document.getElementById("color1");
var input2 = document.getElementById("color2");
var body = document.getElementById("background");
var css = document.querySelector("h3");


function setBackground(e)
{
	body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value +")"; // setting gradient background
	css.textContent= body.style.background ; //displaying CSS linear gradient property between h3 tags
}


window.onload = setBackground; //colour inputs match the background generated on the first page load. 


input1.addEventListener("input",setBackground); //set the 1 half of the background acc to input1 (on clicking input1)
input2.addEventListener("input",setBackground); // set the other half of the background acc to input2 (on clicking input2)


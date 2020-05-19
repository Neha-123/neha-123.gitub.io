var label = document.getElementsByClassName("label");
var input = document.getElementsByClassName("checkBox");

console.log(label);

for (var i = 0; i < label.length; i++) {
	label[i].addEventListener("click", function () {
 		
	})
}

for (var i = 0; i < input.length; i++) {
	input[i].addEventListener("change", function () {
 		if(this.checked)
 		{
 			this.closest("div").classList.add("checked");
 		}
 		else
 		{
 			this.closest("div").classList.remove("checked");	
 		}
	})
}

 
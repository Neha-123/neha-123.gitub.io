var imgitem = document.getElementsByClassName("item");
var listitems = document.getElementsByClassName("listitems");
var arrow = document.getElementsByClassName("arrow");
var img = document.getElementsByClassName("image");




function showimagefromright(n)
{
	
	// imgitem[n].classList.add("active");
	imgitem[n].classList.add("posright");
	setTimeout(function()
	{
		// console.log(n);	
	
		imgitem[n].classList.add("active");

		
		
	}, 500)	

	setTimeout(function()
	{
		// console.log("inside in : "+n);	
		imgitem[n].classList.add("in");
		
		
		
	}, 600)	


}

function hideimagetoleft(n)
{
	imgitem[n].classList.remove("in");
	imgitem[n].classList.remove("posright");
	imgitem[n].classList.add("outtoleft");
	setTimeout(function()
	{
	
		imgitem[n].classList.remove("active");
		imgitem[n].classList.remove("outtoleft");

	}, 500)
}


function showimagefromleft(n)
{
	
	// imgitem[n].classList.add("active");
	imgitem[n].classList.add("posleft");
	setTimeout(function()
	{
		// console.log(n);	
	
		imgitem[n].classList.add("active");

		
		
	}, 500)	

	setTimeout(function()
	{
		// console.log("inside in : "+n);	
		imgitem[n].classList.add("in");
		
		
		
	}, 600)	


}


function hideimagetoright(n)
{
	imgitem[n].classList.remove("in");
	imgitem[n].classList.remove("posleft");
	imgitem[n].classList.add("outtoright");
	setTimeout(function()
	{
	
		imgitem[n].classList.remove("active");
		imgitem[n].classList.remove("outtoright");

	}, 500)
}




function listimage(e) 
{
	
function getflag()
	{
		var x=0;
		for(var i=0; i<listitems.length; i++)
		{
			if(listitems[i].classList.contains("listactive"))
			{
				 x=i;	
			}
		}
		return x;
	}

	var flag=getflag();
	var newflag=flag;
	// clearInterval(infinite);


for(var i=0; i<listitems.length; i++)
{
	if(e.target.id == listitems[i].id )
	{
		if(flag<i)
		{
			showimagefromright(i);
			listitems[i].classList.add("listactive");
			listitems[flag].classList.remove("listactive");
			hideimagetoleft(flag);
		}
		else
		{
			showimagefromleft(i);
			hideimagetoright(flag);
			listitems[i].classList.add("listactive");
			listitems[flag].classList.remove("listactive");
		}
	}
}






}


function arrowclick(e)
{
	// clearInterval(infinite);
	console.log("inside arrow");

	// load.pause();

	for( i=0; i<imgitem.length; i++)
	{
		if(listitems[i].classList.contains("listactive"))
		{
			listitems[i].classList.remove("listactive");
			if(e.target.classList.contains("arrowleft"))
			{				
				hideimagetoright(i);
				if(i==0)
				{
					i=2;
					
				}
				else
				{
					i=i-1;
					
				}
				
				listitems[i].classList.add("listactive");
				showimagefromleft(i);
				
			}
			else
			{
				
				hideimagetoleft(i);
				if(i==2)
				{
					i=0;
					
					listitems[i].classList.add("listactive");
					showimagefromright(i);
				}
				else
				{
					i=i+1;
					
					listitems[i].classList.add("listactive");
					showimagefromright(i);
				}
			}
		}

		
	}
	
	console.log("inside arrow");

	// load(0);
		
}




function load(i)
{
	imgitem[i].classList.add("active");
	listitems[i].classList.add("listactive");


	// setTimeout(function()
	// {
	// 	imgitem[i].classList.add("active");
	// }, 200);
	
	
 // infinite =	setInterval(function()
	// 		{  
	// 			console.log("onload working..");

	// 			if(imgitem[i].classList.contains("active"))
	// 			{
	// 				imgitem[i].classList.remove("active");
	// 				i=i+1;
	// 			}
	// 				if(i==3)
	// 				{
	// 					i=0;
					
	// 				}
	// 				imgitem[i].classList.add("active");
				

	// 	}, 3000);	



	// setInterval(function()
	// 	{  
	// 		if(i==3)
	// 		{
	// 			i=0;
				
	// 		}
	// 		imgitem[i].classList.add("active");

	// 	}, 3000);	
	




}


for(var i=0; i<listitems.length; i++)
{
	listitems[i].addEventListener("click", listimage);
}

for(var i=0; i<arrow.length;i++)
{
	arrow[i].addEventListener("click", arrowclick);

}

window.onload=load(0);


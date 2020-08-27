let menu=document.getElementById("menu");

 
function openmenu(){
	menu.style.display="block";

}

function closemenu(){
	if(window.matchMedia("(max-width:1000px)").matches)
	menu.style.display="none";

}

 
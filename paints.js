function Menu(){
	document.getElementById("menu").classList.toggle("icon");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("drop").style.display = "block";
}
function drop(){
	document.getElementById("drop").classList.toggle("hola");
	setTimeout(Menu,100)
}
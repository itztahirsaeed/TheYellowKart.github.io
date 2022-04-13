function toggleMobileMenu(menu){
	menu.classList.toggle('open');
	var x = document.getElementById("d1");
	
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
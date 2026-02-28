const menuButton =
document.getElementById("menu-botton");

const nav =
document.getElementById("nav-menu");

menuButton.addEventListener("click",()=>{

if(nav.style.display === "block"){

nav.style.display = "none";

}else{

nav.style.display = "block";

}

});
const openIcon = document.getElementById("ham_bars");
const closeIcon = document.getElementById("ham_xmark")
const menu = document.querySelector(".nav_links");
const hamburger = document.querySelector(".hamburger")
const allLinks = document.querySelectorAll(".menu_link")

function toggleMenu(){
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        closeIcon.style.display = "none";
        openIcon.style.display = "block";
      } else {
        menu.classList.add("active");
        closeIcon.style.display = "block";
        openIcon.style.display = "none";
      }
}


hamburger.addEventListener("click",toggleMenu);
allLinks.forEach((link) =>{
    link.addEventListener("click",toggleMenu)
})
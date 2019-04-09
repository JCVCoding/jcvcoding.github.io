// DROP DOWN MENU FUNCTIONALITY

//VARIABLES
const navBar = document.getElementById("navbar");

//function
const openNav = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navBar.style.top = "0";
    } else {
        navBar.style.top = "-60px";
    }
}

//call function
window.onscroll = () => {
    openNav();
}



const header = document.querySelector(".header"); //header at top of page
const scrollUpArrow = document.querySelector(".page-break__btn"); //scroll up button
//scroll up function
scrollUpArrow.addEventListener("click", () => {
    header.scrollIntoView({behavior:"smooth"});
});

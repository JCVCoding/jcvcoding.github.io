
//SMOOTH SCROLL FUNCTIONALITY

//VARIABLES

//page sections
const aboutMeSection = document.getElementById("scrollStop"); //about me section header
const header = document.querySelector(".header"); //header at top of page
const workSection = document.getElementById("work")//top of work section
const contactSection = document.getElementById("contact__header")//top of contact section
//arrows
const scrollUpArrow = document.querySelector(".page-break__btn"); //scroll up button
const scrollDownArrow = document.querySelector(".hero__btn"); //scroll down button
//nav links
const aboutMeNavLink = document.getElementById("about-link"); //about section nav link
const workNavLink = document.getElementById("work-link"); //work section nav link
const contactNavLink = document.getElementById("contact-link"); //contact section nav link
const logo = document.getElementById("logo"); //home logo nav link

//FUNCTIONS

//arrows
scrollDownArrow.addEventListener("click", () => {  //scroll down function
    aboutMeSection.scrollIntoView({behavior:"smooth"});
});

scrollUpArrow.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});


//nav links
aboutMeNavLink.addEventListener("click", () => {
    aboutMeSection.scrollIntoView({behavior:"smooth"});
});

workNavLink.addEventListener("click", () => {
    workSection.scrollIntoView({behavior:"smooth"});
});

contactNavLink.addEventListener("click", () => {
    contactSection.scrollIntoView({behavior:"smooth"});
});

logo.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});


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


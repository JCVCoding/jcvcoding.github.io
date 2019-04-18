// //toggle menu functionality

// //variables
// const toggleButton = document.querySelector(".toggle-menu__icon"); //button 
// const toggleButton_top = document.querySelector(".toggle-menu__icon--top");//top part
// const toggleButton_middle = document.querySelector(".toggle-menu__icon--middle");//middle part   
// const toggleButton_bottom = document.querySelector(".toggle-menu__icon--bottom");//bottom part
// let btnState = false; //boolean that keeps track of button state   

// //function
// const toggleOn = () => {
//     //top bar
//     toggleButton_top.style.transform = "rotate(45deg)";
//     toggleButton_top.style.transition = "transform .5s";

//     //middle bar
//     toggleButton_middle.style.visibility = "hidden";
//     toggleButton_middle.style.opacity = "0";
//     toggleButton_middle.style.transition = "opacity .5s, visibility .5s";

//     //bottom bar
//     toggleButton_bottom.style.top = "0";
//     toggleButton_bottom.style.transform = "rotate(135deg)";
//     toggleButton_bottom.style.transition = "top .5s, transform .5s";
// };

// const toggleOff = () => {
//     //top bar
//     toggleButton_top.style.transform = "rotate(180deg)";
//     toggleButton_top.style.transition = "transform .5s";

//     //middle bar
//     toggleButton_middle.style.visibility = "visible";
//     toggleButton_middle.style.opacity = "1";
//     toggleButton_middle.style.transition = "opacity .5s, visibility .5s";

//     //bottom bar
//     toggleButton_bottom.style.top = "1rem";
//     toggleButton_bottom.style.transform = "rotate(-180deg)";
//     toggleButton_bottom.style.transition = "top .5s, transform .5s";
// }

// toggleButton.addEventListener("click", () => {
//     if (btnState) {
//         toggleOff();
//         btnState = false;
//     } else {
//         toggleOn();
//         btnState = true;
//     }
// });

//SMOOTH SCROLL FUNCTIONALITY

//VARIABLES

//page sections
const aboutMeSection = document.getElementById("scrollStop"); //about me section header
const header = document.querySelector(".header"); //header at top of page
const workSection = document.getElementById("work")//top of work section
const contactSection = document.getElementById("contact")//top of contact section
//arrows
const scrollUpArrow = document.querySelector(".page-break__btn"); //scroll up button
const scrollDownArrow = document.querySelector(".hero__btn"); //scroll down button
//nav links
const aboutMeNavLink = document.getElementById("about-link"); //about section nav link
const workNavLink = document.getElementById("work-link"); //work section nav link
const contactNavLink = document.getElementById("contact-link"); //work section nav link

//FUNCTIONS

//arrows
scrollDownArrow.addEventListener("click", () => {  //scroll down function
    aboutMeSection.scrollIntoView({behavior:"smooth"});
});

scrollUpArrow.addEventListener("click", () => {
    header.scrollIntoView({behavior:"smooth"});
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


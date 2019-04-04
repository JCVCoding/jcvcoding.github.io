//toggle menu functionality

//variables
const toggleButton = document.querySelector(".toggle-menu__icon"); //button 
const toggleButton_top = document.querySelector(".toggle-menu__icon--top");//top part
const toggleButton_middle = document.querySelector(".toggle-menu__icon--middle");//middle part   
const toggleButton_bottom = document.querySelector(".toggle-menu__icon--bottom");//bottom part
let btnState = false; //boolean that keeps track of button state   

//function
const toggleOn = () => {
    //top bar
    toggleButton_top.style.transform = "rotate(45deg)";
    toggleButton_top.style.transition = "transform .5s";

    //middle bar
    toggleButton_middle.style.visibility = "hidden";
    toggleButton_middle.style.opacity = "0";
    toggleButton_middle.style.transition = "opacity .5s, visibility .5s";

    //bottom bar
    toggleButton_bottom.style.top = "0";
    toggleButton_bottom.style.transform = "rotate(135deg)";
    toggleButton_bottom.style.transition = "top .5s, transform .5s";
};

const toggleOff = () => {
    //top bar
    toggleButton_top.style.transform = "rotate(180deg)";
    toggleButton_top.style.transition = "transform .5s";

    //middle bar
    toggleButton_middle.style.visibility = "visible";
    toggleButton_middle.style.opacity = "1";
    toggleButton_middle.style.transition = "opacity .5s, visibility .5s";

    //bottom bar
    toggleButton_bottom.style.top = "1rem";
    toggleButton_bottom.style.transform = "rotate(-180deg)";
    toggleButton_bottom.style.transition = "top .5s, transform .5s";
}

toggleButton.addEventListener("click", () => {
    if (btnState) {
        toggleOff();
        btnState = false;
    } else {
        toggleOn();
        btnState = true;
    }
});

//scroll functionality

//variables
const aboutMeSection = document.getElementById("about-me"); //about me section header
const scrollDownArrow = document.querySelector(".hero__btn"); //scroll down button

const header = document.querySelector(".header"); //header at top of page
const scrollUpArrow = document.querySelector(".page-break__btn"); //scroll up button

//functions 
scrollDownArrow.addEventListener("click", () => {  //scroll down function
    aboutMeSection.scrollIntoView({behavior:"smooth"});
});

//scroll up function
scrollUpArrow.addEventListener("click", () => {
    header.scrollIntoView({behavior:"smooth"});
});

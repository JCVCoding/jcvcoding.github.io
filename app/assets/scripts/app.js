//toggle menu functionality

//variables
const toggleButton = document.querySelector(".toggle-menu__icon"); //button 
const toggleButton_top = document.querySelector(".toggle-menu__icon--top");//top part
const toggleButton_middle = document.querySelector(".toggle-menu__icon--middle");//middle part   
const toggleButton_bottom = document.querySelector(".toggle-menu__icon--bottom");//bottom part
let btnState = false; //boolean that keeps track of button state   

//function
const toggleOn = () => {
    toggleButton_top.style. = "red";
    toggleButton_middle.style.backgroundColor = "red";
    toggleButton_bottom.style.transition = "red";
};

const toggleOff = () => {

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


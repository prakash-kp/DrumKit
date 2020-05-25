// To get all the drum buttons
var buttons = document.querySelectorAll(".drum");

//Adding click event listener to each drum button
buttons.forEach((btn) => {
    btn.addEventListener("click",function(){
        var key = this.innerHTML;
        playKeySound(key);
        buttonAnimation(key);
    });
});

//Adding keydown event listener
document.addEventListener("keydown",function(event){
    var keyboardKeys = event.key;
    playKeySound(keyboardKeys);
    buttonAnimation(keyboardKeys);
});

// Function to play sound based on the key pressed and button clicked
function playKeySound(k){

    switch (k) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:

    }
}
//Function to add animation on keypress/button click
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}
let clicked = document.querySelectorAll(".drums").length;

for(let i = 0; i < clicked; i++)
{
    document.querySelectorAll(".drums")[i].addEventListener("click", function() {
       let buttonClicked = this.innerHTML.trim().toLowerCase();
        makeSound(buttonClicked);

        buttonAnimation(buttonClicked);
    });
}



/*  document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("I got clicked");


    var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
} */


document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key){
    switch(key)
       {
        case "w":   let tom1 = new Audio("./sounds/tom-1.mp3");
                    tom1.play();
                    break;

        case "a":   let tom2 = new Audio("./sounds/tom-2.mp3");
                    tom2.play();
                    break;

        case "s":   let tom3 = new Audio("./sounds/tom-3.mp3");
                    tom3.play();
                    break;

        case "d":   let tom4 = new Audio("./sounds/tom-4.mp3");
                    tom4.play();
                    break;

        case "j":   let kick = new Audio("./sounds/snare.mp3");
                    kick.play();
                    break;

        case "k":   let snare = new Audio("./sounds/crash.mp3");
                    snare.play();
                    break;

        case "l":   let crash = new Audio("./sounds/kick-bass.mp3");
                    crash.play();
                    break;

        default:
            console.log(key);

       }
}


function buttonAnimation(currentKey){
    let activebutton = document.querySelector("." + currentKey);

    activebutton.classList.add("pressed");

    setTimeout(function()
    {
        activebutton.classList.remove("pressed");
    },100);
}
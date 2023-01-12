/* <button class="w drum">w</button>
    <button class="a drum">a</button>
    <button class="s drum">s</button>
    <button class="d drum">d</button>
    <button class="j drum">j</button>
    <button class="k drum">k</button>
    <button class="l drum">l</button> */
    var numberofdrumbuttons = document.querySelectorAll(".drum").length;
for(let i =0;i<numberofdrumbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        let selector = this.innerHTML;
        makesound(selector);
        animation(selector);
        
    })

}
document.addEventListener("keypress",function(event){
      makesound(event.key);
      animation(event.key);
})
function makesound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
             audio.play();
             break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;        
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default :
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();

    }
}

function animation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}
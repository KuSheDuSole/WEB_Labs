let buttons = document.querySelectorAll(".change-object-panel-btn");
let resbtn = document.querySelector(".btn-restart");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function(){
        this.style.animation = "Btn-Fade 1s forwards";
    })
})
resbtn.addEventListener("click", function(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.animation = "Btn-Fade-reset 1s forwards";
    }
})
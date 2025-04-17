let tab = document.getElementsByClassName("event-table")[0];
tab.addEventListener("click", function(event){
    let tar = event.target;
    let now = document.querySelector(".bu-img");
    if (tar.tagName != 'TD') return;
    tar.classList.toggle('bu-img');
    now.classList.toggle('bu-img');
})
let h4_sug = document.querySelector(".h4-sug");
let sug_bl = document.querySelector(".sug-bl");
let sweets = document.querySelectorAll(".sweets");
let sug_end = document.querySelector(".sug-end");

h4_sug.addEventListener("click", function(){
    let block = h4_sug.nextElementSibling;
    h4_sug.classList.toggle('sug-h4-active');
    block.classList.toggle('sug-block');
    if (block.classList.contains('sug-block'))block.style.display = 'block';
    else block.style.display = 'none';

})

sug_bl.addEventListener('click', check_Empty)
sweets.forEach(item =>{
    item.addEventListener('click', function(){
        invisible(item, rm_obj);
    })
});
function invisible(item, callback){
    item.style.opacity = '0';
    callback(item);
}
function rm_obj(element){
    setTimeout(()=>{
        element.remove();
    }, 500);
}
function check_Empty(){
    if (document.querySelectorAll(".sweets").length === 1){
        setTimeout(()=>{
            sug_end.style.display = 'block';
        }, 600)
    }
}
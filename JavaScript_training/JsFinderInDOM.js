function DOMFinder(){
    let pics = document.querySelectorAll("img");
    let label = `Количество картинок в DOM дереве: ${pics.length}`;
    document.getElementsByClassName("Dom-Finder")[0].textContent = label;
}
setInterval(DOMFinder, 1000);
let creating_button = document.querySelector('.btn-creating-line button')
let creating_panel = document.querySelector('.creating-panel');

creating_button.addEventListener("click", () => {
    while(true){
        let input = prompt("Введите абзац, для выхода нажмите ESC");
        if (input === null) break;

        let paragraph = document.createElement('p');    
        paragraph.textContent = input;
        let paragraph_div = document.querySelector('.cre');
        paragraph_div.insertBefore(paragraph, paragraph_div.firstChild);

        let currentHeight = parseInt(getComputedStyle(creating_panel).height);
        creating_panel.style.height = (currentHeight + 65) + 'px';
    }
});
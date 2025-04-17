function Dating(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let data = date.getDate();
    let weekday = date.toLocaleDateString('ru-RU', {weekday : 'long'});
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let fulldate = ` ${data}-${month}-${year}, ${weekday}`;
    let fulltime = `${hours}/${min}/${sec} `;
    if (hours >= 13) {
        hours -= 12;
        hours = String(hours).padStart(2,"0");
        min = String(min).padStart(2,"0");
        sec = String(sec).padStart(2,"0");
        fulltime = `${hours}/${min}/${sec} `;
        fulltime += "pm";
    }
    else fulltime += "am";
    document.getElementsByClassName('date-date')[0].textContent = fulldate;
    document.getElementsByClassName('date-time')[0].textContent = fulltime;

}
setInterval(Dating, 1000);
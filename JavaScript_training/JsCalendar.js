function CreateCalendar(elem, year, month){
    elem = document.getElementsByClassName(elem)[0];

    let mon = month - 1;
    let d = new Date(year, mon);
    let str_mon = d.toLocaleDateString('ru-RU', {month : 'long'})

    let table = `
        <table>
            <thead>
                <tr>
                    <th><button class="cal-btn-l">❮</button></th>
                    <th colspan="5">${str_mon} ${year}</th>
                    <th><button class="cal-btn-r">❯</button></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Пн</th>
                    <th>Вт</th>
                    <th>Ср</th>
                    <th>Чт</th>
                    <th>Пт</th>
                    <th>Сб</th>
                    <th>Вс</th>
                </tr>
                <tr>
    `;
    let lastDayPrevMonth = new Date(year, mon, 0);
    let prevMonthDay = lastDayPrevMonth.getDate() - getDay(d) + 1;
    for(let i = 0; i < getDay(d); i++){
        table += `<td style="color: rgb(142, 142, 142)">${prevMonthDay}</td>`;
        prevMonthDay++;
    }

    while(d.getMonth() == mon){
        table += '<td>' + d.getDate() + '</td>';
        if (getDay(d) % 7 == 6)table += '</tr><tr>';
        d.setDate(d.getDate() + 1);
    }
    d.setDate(d.getDate() - 1);
    while(d.getDay() != 0){
        d.setDate(d.getDate() + 1);
        table += `<td style="color: rgb(142, 142, 142)">${d.getDate()}</td>`;
    }

    table += '</tr> </tbody> </table>';
    elem.innerHTML = table;

    document.querySelector(".cal-btn-l").addEventListener("click", function() {
        now.setMonth(now.getMonth() - 1);
        CreateCalendar('calendar-cal', now.getFullYear(), now.getMonth() + 1);
    });

    document.querySelector(".cal-btn-r").addEventListener("click", function() {
        now.setMonth(now.getMonth() + 1);
        CreateCalendar('calendar-cal', now.getFullYear(), now.getMonth() + 1);
    });
}

function getDay(date){
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}
let now = new Date()
CreateCalendar('calendar-cal', now.getFullYear(), now.getMonth() + 1);
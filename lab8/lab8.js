function showDate() {
    let out = document.getElementById('current-date');
    let arabicOut = document.getElementById('arabic-date');
    let germanyOut = document.getElementById('germany-date');
    let greekOut = document.getElementById('greek-date');
    let englishOut = document.getElementById('english-date');
    let today = new Date();
    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    arabicOut.innerHTML = 'Дата и время для арабской локали: ' + today.toLocaleString('ar-MA');
    germanyOut.innerHTML = 'Дата и время для немецкой локали: ' + today.toLocaleString('de-AT');
    greekOut.innerHTML = 'Дата и время для греческой локали: ' + today.toLocaleString('el-GR')
    englishOut.innerHTML = 'Дата и время для американской локали: ' + today.toLocaleString('en-US')

    document.getElementById('year').innerHTML = 'Текущий год: ' + today.getFullYear();
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    document.getElementById('month').innerHTML = 'Текущий месяц: ' + months[today.getMonth()];
    document.getElementById('day').innerHTML = 'Текущий день: ' + today.getDate();
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    document.getElementById('weekDay').innerHTML = 'Текущий день недели: ' + weekDays[today.getDay()];


    document.getElementById('dayButton').addEventListener('click', function() {
        YEAR = document.getElementById('YEAR').value; 
        MONTH = document.getElementById('MONTH').value;
        DAY = document.getElementById('DAY').value;

        const date = new Date(YEAR, MONTH - 1, DAY);
        const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const dayOfWeek = daysOfWeek[date.getDay()];

        document.getElementById('result').innerHTML = dayOfWeek;
    })
}
function showDaysCount() {
    let birthdays =  document.getElementById('birhday');
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);

    birthdays.innerHTML = 'Дней с момента рождения: ' + daysCount;

    document.getElementById('clear').addEventListener('click', function() {
        birthdays.innerHTML = '';
        inputDate.value = 0;
    })
}
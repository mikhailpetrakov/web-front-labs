function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;

}

function showSecond() {
    let big = new Date();
    document.getElementById('bigTime').innerHTML = big.getSeconds();
}


function timeArrow() {
    time = document.getElementById('timeArrow');
    time.style.transform = `rotate(${180 + (new Date().getSeconds() * 6)}deg) translate(0, 50px)`;
}

setInterval(showTime, 1000);
setInterval(showSecond, 1000);
setInterval(timeArrow, 1000);

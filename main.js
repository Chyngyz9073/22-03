let counter = 0;
let timerId;
function incrementCounter() {
    counter++;
    document.getElementById('counter').innerText = counter;
}
document.getElementById('startBtn').addEventListener('click', function() {
    timerId = setInterval(incrementCounter, 1000);
});
document.getElementById('stopBtn').addEventListener('click', function() {
    clearInterval(timerId);
});

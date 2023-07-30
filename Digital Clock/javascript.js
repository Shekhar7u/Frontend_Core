let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let AMPM = document.getElementById('AMPM');

function clock() {
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    let ampm = "AM"
    //Check for AM or PM
    if (hr > 12) {
        hr = hr - 12
        ampm = "PM"
    }
    //Get doubledigit to display
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    // Display the  value
    hours.innerText = hr;
    minutes.innerText = min;
    seconds.innerText = sec;
    AMPM.innerText = ampm;
    //to Automatically refresh the clock
    setTimeout(() => {

        clock();
    }, 100)
}
//calling this function
clock();
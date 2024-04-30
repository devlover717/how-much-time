var daysValue = document.querySelector('#daysVal'); 
var hoursValue = document.querySelector('#hoursVal');
var minutesValue = document.getElementById('minutesVal'); 
var secondsValue = document.querySelector('#secondsVal');


var endDate = '1 January 2025'; 

function time() {
    var end = new Date(endDate); 
    end = end.getTime(); 
    end = end / 1000; 
    end = Math.floor(end);

    
    var now = new Date(); 
    now = now.getTime(); 
    now = now / 1000; 
    now = Math.floor(now)

    var diff = end - now; 

    //days 
    var days = diff / (60 * 60 * 24); 
    days = Math.floor(days); 
    daysValue.innerHTML = days

    // hours 
    var hours = (diff / (60*60)) % 24;
    hours = Math.floor(hours); 
    hoursValue.innerHTML = hours;

    // minutes 
    var minutes = (diff / 60) % 60; 
    minutes = Math.floor(minutes);
    minutesValue.innerHTML = minutes; 

    // seconds 
    var seconds = diff % 60; 
    seconds = Math.floor(seconds); 
    secondsValue.innerHTML = seconds; 

}

time()


setInterval(time, 1000);


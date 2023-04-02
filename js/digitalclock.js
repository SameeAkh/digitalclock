function currentTime() {
    let theTime = new Date();

    let theDayNum = theTime.getDay();
    let thehour = theTime.getHours();
    let theMinutes = theTime.getMinutes();
    let theSeconds = theTime.getSeconds();

    let theDay = ['SUNDAY', 'MON', 'TUE' , 'WED', 'THU', 'FRI', 'SAT'];
    
    let AmPm = "AM";

    if(thehour >= 12){
        AmPm = "PM"
        

    }
    
    if (thehour > 12) {
        thehour = thehour % 12
    }

    if (thehour < 10){
        thehour = "0" + thehour;
    }
    if (theMinutes < 10){
        theMinutes = "0" + theMinutes;
    }
    if (theSeconds < 10){
        theSeconds = "0" + theSeconds;
    }

    document.getElementById('hour').innerHTML = thehour;

    document.getElementById('day').innerHTML = theDay[theDayNum];

    document.getElementById('minute').innerHTML = theMinutes;

    document.getElementById('second').innerHTML = theSeconds;

    document.getElementById('ampm').innerHTML = AmPm;

    let evenseconds = theSeconds % 2;

    if(evenseconds === 0) {
        document.getElementById('colon1').style.color = "red";
        document.getElementById('colon2').style.color = "red";

    }
    else {
        document.getElementById('colon1').style.color = "black";
        document.getElementById('colon2').style.color = "black";
    }

 

}
setInterval(() => {
    currentTime();
}, 1000);



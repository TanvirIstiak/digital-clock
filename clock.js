// first method for creating digital clock

// let showClock=document.getElementById("show-clock")
// let showDate=document.getElementById("date")
// runClock =()=>{
//    let clockTime=new Date()
//    let localeTime=clockTime.toLocaleTimeString()
//    showClock.innerHTML=localeTime;
//    setInterval(runClock,1000) 
// }

// runClock()

// runDate = () =>{
//     let clockDate=new Date()
//    let localeDate=clockDate.toLocaleDateString()
//    showDate.innerHTML=localeDate;
//    setInterval(runClock,1000) 
// }

// runDate()

//second method of creating a digital clock

let showClock=document.getElementById("show-clock")
let showDate=document.getElementById("date")

function showTime  () {
    //get time output
    let time=new Date()
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let second=time.getSeconds(); 

    //conditions for time
    if(hours===0){
        hours=12;
    }
    if(hours>12){
        hours=hours-12
    }
    
    //ternary oparator   for time
    hours = hours<10 ? "0"+hours:hours;
    minutes = minutes<10 ? "0"+minutes:minutes;
    second = second<10 ? "0"+second:second; 
    //make a digital timing clock by tamplate literal
    let fullTime=`${hours}:${minutes}:${second}`
    showClock.innerHTML=fullTime

    //get date output
    let date=time.getDate();
    let month=time.getMonth();
    let year=time.getFullYear();

    //ternary oparator for date
    date=date<10 ? "0"+date : date;
    month=date<10 ? "0"+month : month;
    //make date by tamplate literal
    let fullDate=`${date}:${month}:${year}`
    showDate.innerHTML=fullDate
    setInterval (showTime,1000)
}

showTime()
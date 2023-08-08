

'use strict'

let alarmArray = [];
const date = new Date();
const newdate = date.toLocaleTimeString();
let currenttime = document.getElementById("currentTimeDisplay");
currenttime.textContent = newdate;

// function to add zeroes before number if number is less tha  10
function addZero(type) {
    if (type < 10)
        return "0" + type;
    return type;
}

// set interval is call every second to increse the timer and to check if we do have any alarm to be rang
setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = "AM";

    if (hours >= 12) {
        hours = hours - 12;
        ampm = 'PM';
    }
    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)

    let data = hours + ":" + minutes + ":" + seconds + ":" + ampm;
    currenttime.textContent = data;

    let indexTobeRemoved=-1;
    let listitemTobeRemoved=null;
    alarmArray.map((item,index) => {
        if (item[1] == data) {
            Swal.fire({
              
                title: "Alarm Rang",
                text: item[1]
            });           
           
            indexTobeRemoved=index;
            listitemTobeRemoved=item[0];
        }
        
    });
    //if alarm is rang then remoing it from DOM as well from array 
    if(indexTobeRemoved!=-1){
      alarmArray.splice(indexTobeRemoved,1)
      document.getElementById("listofalarms").removeChild(listitemTobeRemoved);

    }
}, 1000)

let setalarm = document.getElementById("setalarm");

// after clicking on set alarm button we need to add the rspecting values into list along with the delete button
setalarm.addEventListener("click", () => {

    let hour = document.getElementById("hourinput").value;
    let minute = document.getElementById("minuteinput").value;
    let second = document.getElementById("secondinput").value;
    let ampm = document.getElementById("ampminput").value;

    if(hour=="" || minute=="" || second==""){
        Swal.fire({
            icon: 'error',
            title: 'Empty Input...',
            text: 'please fill out all the field!'
        })
         return ;
    }

    if(hour>=12 || minute>=60 || second>=60){
        Swal.fire({
            icon: 'error',
            title: 'Invalid Input...',
            text: 'please fill the valid time!'
        })
         return;
    }
    let deletebtn = document.createElement("button");
    deletebtn.classList.add('btn');
    deletebtn.classList.add('btn-outline-danger');
    deletebtn.classList.add('btn-sm');

    deletebtn.textContent = "delete";

    let listofalarms = document.getElementById("listofalarms");
    let listitem = document.createElement("li");
    listitem.classList.add('listAlarm');
    let myspan = document.createElement("span");

    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);

    let text = document.createTextNode(hour + ":" + minute + ":" + second + ":" + ampm);

    let iconbutton = document.createElement("i");
    iconbutton.classList.add("fa","fa-clock-o","alarmIcon");
    let parentDiv=document.createElement("div");
    parentDiv.classList.add('alarmParentDiv');
    parentDiv.appendChild(iconbutton);
    parentDiv.appendChild(text);


    listitem.appendChild(parentDiv);
     listitem.appendChild(deletebtn);


    listofalarms.appendChild(listitem);
    listitem.appendChild(myspan);

    // creating array with two object 1. lisiitem which is added 2. is time data 
    let data = hour + ":" + minute + ":" + second + ":" + ampm;
    let obj = [
        listitem,
        data
    ]
    myspan.textContent = data
    myspan.hidden = true;

    alarmArray.push(obj);

    document.getElementById("hourinput").value = "";
    document.getElementById("minuteinput").value = "";
    document.getElementById("secondinput").value = "";

    // delete click listener for removing alarm from DOM and
    // also filter function is used to remove same from alarm array
    deletebtn.addEventListener('click', () => {
        alarmArray = alarmArray.filter((item) => item[1] != data);
        document.getElementById("listofalarms").removeChild(listitem);

    });
});






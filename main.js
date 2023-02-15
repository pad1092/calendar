const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "Octobor", "November", "December"];

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();
var firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
var lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
var lastDayOfMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
var lastDateofPreMonth = new Date(currYear, currMonth, 0).getDate();
const renderCalender = (calendarData) => {
    
    const currentDate = document.querySelector(".calendar-currDate");
    const day = document.querySelector('.calendar-days')
    currentDate.innerText = `${months[currMonth]} ${currYear}`;

    let liTag = "";

    let dateOfPreMonth = new Date(currYear, currMonth - 1);
    let dateOfNextMonth = new Date(currYear,currMonth + 1);
    let dateOfCurrMonth = new Date(currYear, currMonth);

    // render data of pre month
    for (let i = firstDayOfMonth; i > 0; i--) {

        // value of calendar: nbHard - nbSoft - nbActive - nbPassive
        var nbHard = nbSoft =  nbActive = nbPassive = '';
        // check digit < 10, 1 to 01...
        var monthTime = dateOfPreMonth.getMonth()+1 < 10 ? `0${dateOfPreMonth.getMonth()+1}` : `${dateOfPreMonth.getMonth()+1}`;
        var dayTime = lastDateofPreMonth - i + 1 < 10 ? `0${lastDateofPreMonth - i + 1}` : `${lastDateofPreMonth - i + 1}`;
        var currDate = `${dateOfPreMonth.getFullYear()}-${monthTime}-${dayTime}`;

        var data = calendarData.find(element => element.date.split(" ")[0] === currDate);
        if (data != undefined){
            nbHard = data.nbHard == undefined ? '' : data.nbHard;
            nbSoft = data.nbSoft == undefined ? '' : data.nbSoft;
            nbActive = data.nbActive == undefined ? '' : data.nbActive;
            nbPassive = data.nbPassive == undefined ? '' : data.nbPassive;
        }
        liTag +=
            `
                <li class="calendar--inactive">
                    <div class="calendar-day">
                        <span>${lastDateofPreMonth - i + 1}</span>
                    </div>
                    <div class="calendar-activities">
                        <div class="calendar-activity calendar-activity-hard">
                            <span class="calendar-activity-hard">H</span>
                            <div class="calendar-activity-qty">${nbHard}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-soft">
                            <span  class="calendar-activity-soft">S</span>
                            <div class="calendar-activity-qty">${nbSoft}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-active">
                            <span class="calendar-activity-active">A</span>
                            <div class="calendar-activity-qty">${nbActive}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-passive">
                            <span class="calendar-activity-passive">P</span>
                            <div class="calendar-activity-qty">${nbPassive}</div>
                        </div>
                    </div>
                </li>
            `;
    }

    // render data of curr month
    for (let i = 1; i <= lastDateofMonth; i++) {
        var nbHard = nbSoft =  nbActive = nbPassive = '';
        var monthTime = dateOfCurrMonth.getMonth()+1 < 10 ? `0${dateOfCurrMonth.getMonth()+1}` : `${dateOfCurrMonth.getMonth()+1}`;
        var dayTime = i < 10 ? `0${i}` : `${i}`;
        var currDate = `${dateOfCurrMonth.getFullYear()}-${monthTime}-${dayTime}`;

        var data = calendarData.find(element => element.date.split(" ")[0] === currDate);
        if (data != undefined){
            nbHard = data.nbHard == undefined ? '' : data.nbHard;
            nbSoft = data.nbSoft == undefined ? '' : data.nbSoft;
            nbActive = data.nbActive == undefined ? '' : data.nbActive;
            nbPassive = data.nbPassive == undefined ? '' : data.nbPassive;
        }
        liTag +=
            `
                <li class="${i == new Date().getDate() ? 'calendar--active' : ''}">
                    <div class="calendar-day">
                        <span>${i}</span>
                    </div>
                    <div class="calendar-activities">
                        <div class="calendar-activity calendar-activity-hard">
                            <span class="calendar-activity-hard">H</span>
                            <div class="calendar-activity-qty">${nbHard}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-soft">
                            <span  class="calendar-activity-soft">S</span>
                            <div class="calendar-activity-qty">${nbSoft}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-active">
                            <span class="calendar-activity-active">A</span>
                            <div class="calendar-activity-qty">${nbActive}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-passive">
                            <span class="calendar-activity-passive">P</span>
                            <div class="calendar-activity-qty">${nbPassive}</div>
                        </div>
                    </div>
                </li>
            `;
    }

    // render data of next month
    for (let i = 1; i <= 7 - lastDayOfMonth - 1; i++) {
        // value of calendar: nbHard - nbSoft - nbActive - nbPassive
        var nbHard = nbSoft =  nbActive = nbPassive = '';
        // check digit < 10, 1 to 01...
        var monthTime = dateOfNextMonth.getMonth()+1 < 10 ? `0${dateOfNextMonth.getMonth()+1}` : `${dateOfNextMonth.getMonth()+1}`;
        var dayTime = i < 10 ? `0${i}` : `${i}`;
        var currDate = `${dateOfNextMonth.getFullYear()}-${monthTime}-${dayTime}`;
        
        var data = calendarData.find(element => element.date.split(" ")[0] === currDate);
        if (data != undefined){
            nbHard = data.nbHard == undefined ? '' : data.nbHard;
            nbSoft = data.nbSoft == undefined ? '' : data.nbSoft;
            nbActive = data.nbActive == undefined ? '' : data.nbActive;
            nbPassive = data.nbPassive == undefined ? '' : data.nbPassive;
        }
        liTag +=
            `
                <li class="calendar--inactive">
                    <div class="calendar-day">
                        <span>${i}</span>
                    </div>
                    <div class="calendar-activities">
                        <div class="calendar-activity calendar-activity-hard">
                            <span class="calendar-activity-hard">H</span>
                            <div class="calendar-activity-qty">${nbHard}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-soft">
                            <span  class="calendar-activity-soft">S</span>
                            <div class="calendar-activity-qty">${nbSoft}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-active">
                            <span class="calendar-activity-active">A</span>
                            <div class="calendar-activity-qty">${nbActive}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-passive">
                            <span class="calendar-activity-passive">P</span>
                            <div class="calendar-activity-qty">${nbPassive}</div>
                        </div>
                    </div>
                </li>
            `;
    }
    day.innerHTML = liTag;

};


function getCalendarData(type) {
    firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    lastDayOfMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    lastDateofPreMonth = new Date(currYear, currMonth, 0).getDate();

    // data of sending to server
    let endDate = "";
    let startDate = "";

    let dateOfPreMonth = firstDayOfMonth == 0 ? lastDateofPreMonth : lastDateofPreMonth - firstDayOfMonth + 1;
    let dateOfNextMonth = lastDayOfMonth == 6 ? 1 : 7 - lastDayOfMonth - 1

    if (currMonth == 11) {
        endDate = `${dateOfNextMonth}-${months[0].substring(0, 3)}-${currYear - 1}`;
        startDate = `${dateOfPreMonth}-${months[currMonth - 1].substring(0, 3)}-${currYear}`;
    }
    else if (currMonth == 0) {
        startDate = `${dateOfPreMonth}-${months[11].substring(0, 3)}-${currYear - 1}`;
        endDate = `${dateOfNextMonth}-${months[currMonth + 1].substring(0, 3)}-${currYear}`;
    }
    else {
        startDate = `${dateOfPreMonth}-${months[currMonth - 1].substring(0, 3)}-${currYear}`;
        endDate = `${dateOfNextMonth}-${months[currMonth + 1].substring(0, 3)}-${currYear}`;
    }

    
    // renderCalender(calendarData);
    callServer(startDate, endDate, type);
}

function prevMonth() {
    currMonth -= 1;
    if (currMonth < 0) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    }
    getCalendarData("get");
}
function nextMonth() {
    currMonth += 1;
    if (currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    }
    getCalendarData("get");
}

function insertCalender() {
    clearInterval(insertCalendarInterval);
    let calendar = `
        <div id="calendar">
            <div class="calendar-header">
                <a class="calendar-icon " role="button" onclick="prevMonth()">&#8249;</a>  
                <h3 class="calendar-currDate">February 2023</h4>
                <a class="calendar-icon" role="button" onclick="nextMonth()">&#8250;</a>
            </div>  
            <div class="calendar-body">
                <ul class="calendar-weeks">
                    <li>Sunday</li>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                </ul>
                <div class="calendar-days-wrapper">
                    <ul class="calendar-days">
                   
                    </ul>
                </div>
            </div>
        </div>
    `
    document.querySelector(".calendar-wrapper").innerHTML = calendar;
    getCalendarData("init");
}
const insertCalendarInterval = setInterval(function () {
    if (document.querySelector(".calendar-wrapper") != undefined) {
        insertCalender();
    }
}, 1000)

// call server-side method
function callServer(startDate, endDate, type) {
    var component = AdfPage.PAGE.findComponentByAbsoluteId("pt1:myInput");
    var data = {
        pStartDate: startDate,
        pEndDate: endDate
    };
    if (type == "init")
        AdfCustomEvent.queue(component, "initCalendarData", data, true);
    else if (type == "get")
        AdfCustomEvent.queue(component, "getCalendarData", data, true);
}

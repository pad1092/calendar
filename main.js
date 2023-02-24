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
    let dateOfNextMonth = new Date(currYear, currMonth + 1);
    let dateOfCurrMonth = new Date(currYear, currMonth);

    // render data of pre month
    for (let i = firstDayOfMonth; i > 0; i--) {

        // value of calendar: nbHard - nbSoft - nbActive - nbPassive
        var nbHard = nbSoft = nbActive = nbPassive = '';
        // check digit < 10, 1 to 01...
        var monthTime = dateOfPreMonth.getMonth() + 1 < 10 ? `0${dateOfPreMonth.getMonth() + 1}` : `${dateOfPreMonth.getMonth() + 1}`;
        var dayTime = lastDateofPreMonth - i + 1 < 10 ? `0${lastDateofPreMonth - i + 1}` : `${lastDateofPreMonth - i + 1}`;
        var currDate = `${dateOfPreMonth.getFullYear()}-${monthTime}-${dayTime}`;

        var data = calendarData.find(element => element.date.split(" ")[0] === currDate);
        if (data != undefined) {
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
                            <i class="fa-solid fa-circle-minus --fa-style ico-hard"></i>
                            <!-- <span class="calendar-activity-hard">H</span> --!>
                            <div class="calendar-activity-qty">${nbHard}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-soft">
                        <i class="fa-solid fa-circle-info --fa-style ico-soft"></i>
                            <div class="calendar-activity-qty">${nbSoft}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-active">
                        <i class="fa-sharp fa-solid fa-circle-check --fa-style ico-active"></i>
                            <div class="calendar-activity-qty">${nbActive}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-passive">
                        <i class="fa-sharp fa-solid fa-circle-xmark --fa-style ico-passive"></i>
                            <div class="calendar-activity-qty">${nbPassive}</div>
                        </div>
                    </div>
                </li>
            `;
    }

    // render data of curr month
    for (let i = 1; i <= lastDateofMonth; i++) {
        var nbHard = nbSoft = nbActive = nbPassive = '';
        var monthTime = dateOfCurrMonth.getMonth() + 1 < 10 ? `0${dateOfCurrMonth.getMonth() + 1}` : `${dateOfCurrMonth.getMonth() + 1}`;
        var dayTime = i < 10 ? `0${i}` : `${i}`;
        var currDate = `${dateOfCurrMonth.getFullYear()}-${monthTime}-${dayTime}`;

        var data = calendarData.find(element => element.date.split(" ")[0] === currDate);
        if (data != undefined) {
            nbHard = data.nbHard == undefined ? '' : data.nbHard;
            nbSoft = data.nbSoft == undefined ? '' : data.nbSoft;
            nbActive = data.nbActive == undefined ? '' : data.nbActive;
            nbPassive = data.nbPassive == undefined ? '' : data.nbPassive;
        }
        let isToday = i === new Date().getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear()
            ? "calendar--active" : "";
        liTag +=
            `
                <li class="${isToday}">
                    <div class="calendar-day">
                        <span>${i}</span>
                    </div>
                    <div class="calendar-activities">
                        <div class="calendar-activity calendar-activity-hard">
                            <i class="fa-solid fa-circle-minus --fa-style ico-hard"></i>
                            <!-- <span class="calendar-activity-hard">H</span> --!>
                            <div class="calendar-activity-qty">${nbHard}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-soft">
                        <i class="fa-solid fa-circle-info --fa-style ico-soft"></i>
                            <div class="calendar-activity-qty">${nbSoft}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-active">
                        <i class="fa-sharp fa-solid fa-circle-check --fa-style ico-active"></i>
                            <div class="calendar-activity-qty">${nbActive}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-passive">
                        <i class="fa-sharp fa-solid fa-circle-xmark --fa-style ico-passive"></i>
                            <div class="calendar-activity-qty">${nbPassive}</div>
                        </div>
                    </div>
                </li>
            `;
    }

    // render data of next month
    for (let i = 1; i <= 7 - lastDayOfMonth - 1; i++) {
        // value of calendar: nbHard - nbSoft - nbActive - nbPassive
        var nbHard = nbSoft = nbActive = nbPassive = '';
        // check digit < 10, 1 to 01...
        var monthTime = dateOfNextMonth.getMonth() + 1 < 10 ? `0${dateOfNextMonth.getMonth() + 1}` : `${dateOfNextMonth.getMonth() + 1}`;
        var dayTime = i < 10 ? `0${i}` : `${i}`;
        var currDate = `${dateOfNextMonth.getFullYear()}-${monthTime}-${dayTime}`;

        var data = calendarData.find(element => element.date.split(" ")[0] === currDate);
        if (data != undefined) {
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
                            <i class="fa-solid fa-circle-minus --fa-style ico-hard"></i>
                            <!-- <span class="calendar-activity-hard">H</span> --!>
                            <div class="calendar-activity-qty">${nbHard}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-soft">
                        <i class="fa-solid fa-circle-info --fa-style ico-soft"></i>
                            <div class="calendar-activity-qty">${nbSoft}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-active">
                        <i class="fa-sharp fa-solid fa-circle-check --fa-style ico-active"></i>
                            <div class="calendar-activity-qty">${nbActive}</div>
                        </div>
                        <div class="calendar-activity calendar-activity-passive">
                        <i class="fa-sharp fa-solid fa-circle-xmark --fa-style ico-passive"></i>
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
    // calendarData = []
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
    setValueMonthInput(currMonth, currYear);
    getCalendarData("get");
}
function nextMonth() {
    currMonth += 1;
    if (currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    }
    setValueMonthInput(currMonth, currYear);
    getCalendarData("get");
}
function monthSelection(value) {
    if (value != '') {
        currMonth = parseInt(value.split("-")[1]) - 1;
        currYear = parseInt(value.split("-")[0]);
        getCalendarData("get");
    }
}

function waitingServer(){
    document.querySelector(".calendar-days-wrapper").style.opacity = 0;
    document.querySelectorAll(".month-control").forEach(elm => {
        elm.onclick = null;
    })
}
function serverResponsed(){
    document.querySelector(".calendar-days-wrapper").style.opacity = 1;
    var preMonthBtn = document.querySelectorAll(".month-control")[0];
    var nextMonthBtn = document.querySelectorAll(".month-control")[1];
    preMonthBtn.onclick = function(){
        prevMonth();
    }
    nextMonthBtn.onclick = function(){
        nextMonth();
    }
}

function setValueMonthInput(monthVal, yearVal) {
    monthVal += 1;
    monthVal = monthVal < 10 ? `0${monthVal}` : monthVal
    document.getElementById("month-input").value = `${yearVal}-${monthVal}`
}
function insertCalender() {
    clearInterval(insertCalendarInterval);
    let calendar = `
        <div id="calendar">
            <div class="calendar-header">
                <a class="calendar-icon " role="button" onclick="prevMonth()">&#8249;</a>
                <h3 class="calendar-currDate">February 2023</h4>
                    <input id="month-input" type="month" onchange="monthSelection(value)"
                        style="position: absolute;  opacity: 0; width: 170px; font-size: 20px;">
                    <i class="fa-solid fa-calendar-days" style="margin-bottom: 2px; padding: 4px; font-size: 16px;"></i>
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
                <div style="width: 1134px; background-color: #ccc; height: 4px;"></div>
                <div id="calendar-desc">
                    <div class="desc-item calendar-desc-hard">
                        <i class="fa-solid fa-circle-minus --fa-style ico-hard"></i>
                        <span>Soft</span>
                    </div>
                    <div class="desc-item calendar-desc-soft">
                        <i class="fa-solid fa-circle-info --fa-style ico-soft"></i>
                        <span>Hard</span>
                    </div>
                    <div class="desc-item calendar-desc-active">
                        <i class="fa-sharp fa-solid fa-circle-check --fa-style ico-active"></i>
                        <span>Active</span>
                    </div>
                    <div class="desc-item calendar-desc-passive">
                        <i class="fa-sharp fa-solid fa-circle-xmark --fa-style ico-passive"></i>
                        <span>Passive</span>
                    </div>
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

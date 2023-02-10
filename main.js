const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "Octobor", "November", "December"];

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const renderCalender = () => {
    const currentDate = document.querySelector(".calendar-currDate");
    const day = document.querySelector('.calendar-days')

    currentDate.innerText = `${months[currMonth]} ${currYear}`;

    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayOfMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofPreMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";
    console.log(lastDayOfMonth)

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag +=
            `
                <li class="calendar--inactive">
                    <div class="calendar-day">
                        <span>${lastDateofPreMonth - i + 1}</span>
                    </div>
                    <div class="calendar-activities">
                        <div class="calendar-activity calendar-activity-hard">
                            <span class="calendar-activity-hard">H</span>
                            <div class="calendar-activity-qty">0</div>
                        </div>
                        <div class="calendar-activity calendar-activity-soft">
                            <span  class="calendar-activity-soft">S</span>
                            <div class="calendar-activity-qty">0</div>
                        </div>
                        <div class="calendar-activity calendar-activity-active">
                            <span class="calendar-activity-active">A</span>
                            <div class="calendar-activity-qty">0</div>
                        </div>
                        <div class="calendar-activity calendar-activity-passive">
                            <span class="calendar-activity-passive">P</span>
                            <div class="calendar-activity-qty">0</div>
                        </div>
                    </div>
                </li>
            `;
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        liTag +=
            `
                <li class="">
                    <div class="calendar-day">
                        <span>${i}</span>
                    </div>
                    <div class="calendar-activities">
                        <div class="calendar-activity calendar-activity-hard">
                            <span class="calendar-activity-hard">H</span>
                            <div class="calendar-activity-qty">0</div>
                        </div>
                        <div class="calendar-activity calendar-activity-soft">
                            <span  class="calendar-activity-soft">S</span>
                            <div class="calendar-activity-qty">0</div>
                        </div>
                        <div class="calendar-activity calendar-activity-active">
                            <span class="calendar-activity-active">A</span>
                            <div class="calendar-activity-qty">0</div>
                        </div>
                        <div class="calendar-activity calendar-activity-passive">
                            <span class="calendar-activity-passive">P</span>
                            <div class="calendar-activity-qty">0</div>
                        </div>
                    </div>
                </li>
            `;
    }
    for (let i = 1; i <= 7 - lastDayOfMonth - 1; i++) {
        liTag +=
            `
                <li class="calendar--inactive">
                    <div class="calendar-day">
                        <span>${i}</span>
                    </div>
                    <div class="calendar-activities">
                        <div class="calendar-activity calendar-activity-hard">
                            <span class="calendar-activity-hard">H</span>
                            <div class="calendar-activity-qty">0</div>
                        </div>
                        <div class="calendar-activity calendar-activity-soft">
                            <span  class="calendar-activity-soft">S</span>
                            <div class="calendar-activity-qty">0</div>
                        </div>
                        <div class="calendar-activity calendar-activity-active">
                            <span class="calendar-activity-active">A</span>
                            <div class="calendar-activity-qty">0</div>
                        </div>
                        <div class="calendar-activity calendar-activity-passive">
                            <span class="calendar-activity-passive">P</span>
                            <div class="calendar-activity-qty">0</div>
                        </div>
                    </div>
                </li>
            `;
    }
    day.innerHTML = liTag;

};


function prevMonth() {
    currMonth -= 1;
    if (currMonth < 0) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    }
    renderCalender();
}
function nextMonth() {
    currMonth += 1;
    if (currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    }
    renderCalender();
}

function insertCalender() {
    let calendar = `
        <div id="calendar">
            <div class="calendar-control">
                <span role="button" onclick="prevMonth()">Prev</span>
                <span role="button" onclick="nextMonth()">Next</span>
            </div>
            <div class="calendar-header">
                February 2023
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
                <div class="" style="overflow-y: scroll; height: 300px; margin-bottom: 12px;">
                    <ul class="calendar-days">
                    
                    </ul>
                </div>
            </div>
        </div>
    `
    // document.querySelector("#wrapper").innerHTML = calendar;
    renderCalender();
}

insertCalender();
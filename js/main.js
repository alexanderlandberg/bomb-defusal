// --- START ---
"use strict";

// -- VARIABLES --

// Selectors
let timer = document.querySelector("#countdown");
let strikes = document.querySelector("#strikes");

// Extras
let serialNumber = "";
let parellelPortActive = false;
let amountBeaten = 0;
let strikeAmount = 0;
let batteryAmount = 0;
let litIndicatorArray = [];
let timer_interval;
let timer_interval_mili;
let mazeSelected = {
    status: false,
    containerNum: undefined
};
// const countdown_time = 1900;
const evenNumb = "02468";
const oddNumb = "13579";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function initStart(parm) {

    // Create serial number
    makeSerialNumber();

    // Add components to bomb
    addComponents();

    console.log(parm)
    // Add modules
    for (let i = 0; i < parm.modules.length; i++) {
        parm.modules[i].func()
    }

    // passwordModule.func()
    // mazeModule.func()
    // buttonModule.func()
    // wireSequencesModule.func()
    // complicatedWiresModule.func()
    // morseCodeModule.func()
    // memoryModule.func()
    // wireModule.func()
    // keypadsModule.func()
    // simonSaysModule.func()
    // whosOnFirstModule.func()

    // Start timer
    countdown(parm.time);
}
// ----------------------------------------------------------------
// -------------------DELETE LATER---------------------------------
// ----------------------------------------------------------------
let bombSettings = {
    "time": 300000,
    "modules": [mazeModule, mazeModule, mazeModule],
}
initStart(bombSettings)
document.querySelector("#ui").style.display = "none";
// ----------------------------------------------------------------
// -------------------DELETE LATER---------------------------------
// ----------------------------------------------------------------

// --- EXTRAS ---

// Serial Number
function makeSerialNumber() {
    for (var i = 0; i < 5; i++) {
        serialNumber += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    };
    serialNumber += (Math.floor(Math.random() * 10));
};

// Countdown

function countdown(parm) {

    let time_left = parm;
    timer_interval = setInterval(function () {

        if (time_left > 60000) {
            let minutes = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((time_left % (1000 * 60)) / 1000);
            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            time_left = time_left - 1000;
            timer.innerHTML = "0" + minutes + ":" + seconds;

        } else {
            clearInterval(timer_interval);
            timer_interval_mili = setInterval(function () {

                // let minutes = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((time_left % (1000 * 60)) / 1000);
                let mili = ((time_left % 1000) / 10);
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                if (mili < 10) {
                    mili = "0" + mili;
                }

                timer.innerHTML = seconds + ":" + mili;

                time_left = time_left - 10;

                if (time_left <= 0) {
                    clearInterval(timer_interval_mili);
                    timer.innerHTML = "xx:xx";
                    // dead()
                }

            }, 10);
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(timer_interval);
    clearInterval(timer_interval_mili);
}

// Strikes
function strikeFunc() {
    strikeAmount++;
    if (strikeAmount == 3) {
        // dead()
        // stopCountdown()
    } else if (strikeAmount < 3) {
        strikes.innerHTML += "x";
    }
}

// Bomb Explosion
function dead() { }

// Module Beaten
function moduleBeaten() {
    amountBeaten++;
    checkForDisarmed();
}

// Check if bomb is done 
function checkForDisarmed() {
    if (amountBeaten >= document.querySelectorAll(".svg_container").length) {
        console.log("Done")
        stopCountdown()
        document.querySelector("#congratz").style.display = "block";
    } else {
        console.log("Keep going")
    }
}

// Add components to bomb 
function addComponents() {
    let batteryArray = [{
        "battery": "aa"
    }, {
        "battery": "aa_x2"
    }, {
        "battery": "d"
    }, {
        "battery": "9v"
    }]
    let portArray = [{
        "port": "dvi-d"
    }, {
        "port": "parallel_port"
    }, {
        "port": "ps-2"
    }, {
        "port": "stereo-rca"
    }]
    let indicatorLabelArray = ["SND", "CLR", "CAR", "IND", "FRQ", "SIG", "NSA", "MSA", "TRN", "BOB", "FRK"];

    let components = document.querySelectorAll(".components");

    // console.log("test", components[((Math.floor(Math.random() * 4) + 1) - 1)])

    // Add serial
    components[((Math.floor(Math.random() * 4) + 1) - 1)].innerHTML += `<div class="serial_number" style="grid-area: area${(Math.floor(Math.random() * 4) + 1)}"><span>serial nr.</span><div><span>${serialNumber}</span></div></div>`

    // Add batteries
    let battery_amount = ((Math.floor(Math.random() * 5) + 1) - 1);

    for (let i = 0; i < battery_amount; i++) {
        let new_bat = batteryArray[((Math.floor(Math.random() * 4) + 1) - 1)].battery;

        if (new_bat == "aa_x2") {
            batteryAmount++;
            batteryAmount++;
        } else {
            batteryAmount++;
        }

        let selectedComponentSide = components[((Math.floor(Math.random() * 4) + 1) - 1)];

        if (selectedComponentSide.parentNode.classList.contains("cube__face--right") || selectedComponentSide.parentNode.classList.contains("cube__face--left")) {
            // console.log("højre og venstre")
            if (!(selectedComponentSide.children.length >= 4)) {
                selectedComponentSide.innerHTML += `<div class="battery_container"><div class="battery b__${new_bat}"></div></div>`
            }
        } else {
            // console.log("top og bund")
            if (!(selectedComponentSide.children.length >= 6)) {
                selectedComponentSide.innerHTML += `<div class="battery_container"><div class="battery b__${new_bat}"></div></div>`
            }
        }

    }

    // Add Indicators 
    for (let i = 0; 3 > i; i++) {
        let litOrUnlit = (Math.random() > 0.5) ? "indicator_lit" : "indicator_unlit";
        let indicatorLabel = indicatorLabelArray[Math.floor(Math.random() * indicatorLabelArray.length)];
        if (Math.random() < 0.33) {
            let selectedComponentSide = components[((Math.floor(Math.random() * 4) + 1) - 1)];
            if (selectedComponentSide.parentNode.classList.contains("cube__face--right") || selectedComponentSide.parentNode.classList.contains("cube__face--left")) {
                if (!(selectedComponentSide.children.length >= 4)) {
                    selectedComponentSide.innerHTML += `<div class="indicator_container"><div class="${litOrUnlit}"></div><div class="indicator_label">${indicatorLabel}</div></div>`
                    if (litOrUnlit == "indicator_lit") {
                        litIndicatorArray.push(indicatorLabel)
                    }
                }
            } else {
                if (!(selectedComponentSide.children.length >= 6)) {
                    selectedComponentSide.innerHTML += `<div class="indicator_container"><div class="${litOrUnlit}"></div><div class="indicator_label">${indicatorLabel}</div></div>`
                    if (litOrUnlit == "indicator_lit") {
                        litIndicatorArray.push(indicatorLabel)
                    }
                }
            }
        }
    }

    // Add Ports

    for (let i = 0; portArray.length > i; i++) {
        if (Math.random() < 0.33) {

            let selectedComponentSide = components[((Math.floor(Math.random() * 4) + 1) - 1)];
            if (selectedComponentSide.parentNode.classList.contains("cube__face--right") || selectedComponentSide.parentNode.classList.contains("cube__face--left")) {
                // console.log("højre og venstre")
                if (!(selectedComponentSide.children.length >= 4)) {
                    selectedComponentSide.innerHTML += `<div class="port_container"><div class="ports port__${portArray[i].port}"></div></div>`
                    if (portArray[i].port == "parallel_port") {
                        parellelPortActive = true;
                    }
                }
            } else {
                // console.log("top og bund")
                if (!(selectedComponentSide.children.length >= 6)) {
                    selectedComponentSide.innerHTML += `<div class="port_container"><div class="ports port__${portArray[i].port}"></div></div>`
                    if (portArray[i].port == "parallel_port") {
                        parellelPortActive = true;
                    }
                }
            }
        }
    }
}

// Get Data
function data() {
    let dataArray = [{
        "Serial Number": serialNumber,
        "Battery Amount": batteryAmount,
        "Modules Beaten": amountBeaten,
        "Strike Amount": strikeAmount,
        "Parellel port is active": parellelPortActive,
        "Lit Indicators": litIndicatorArray
    }]

    return dataArray;
}
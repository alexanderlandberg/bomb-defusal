const ui = document.querySelector("#ui"),
    s_random = document.querySelector("#select_random"),
    s_create = document.querySelector("#select_create"),
    s_lvl_easy = document.querySelector("#lvl_easy"),
    s_lvl_normal = document.querySelector("#lvl_normal"),
    s_lvl_hard = document.querySelector("#lvl_hard"),
    s_random_chooser = document.querySelector("#random_chooser"),
    s_create_chooser = document.querySelector("#create_chooser"),
    s_start_container = document.querySelector("#start_container");

let selectedGameMode;
let selectedLevel;

const moduleList = [mazeModule, wireSequencesModule, complicatedWiresModule, morseCodeModule, memoryModule, whosOnFirstModule, wireModule, buttonModule, keypadsModule, simonSaysModule, passwordModule]
const easyList = [wireModule, buttonModule, keypadsModule, simonSaysModule]
const normalList = [mazeModule, wireSequencesModule, complicatedWiresModule, morseCodeModule, memoryModule, whosOnFirstModule, wireModule, buttonModule, keypadsModule, simonSaysModule, passwordModule]
const hardList = [mazeModule, wireSequencesModule, complicatedWiresModule, morseCodeModule, memoryModule, whosOnFirstModule, passwordModule]
let createModuleList = [];


function minusOneModule(parm, parm2) {
    if (parm2.parentNode.children[0].innerHTML != 0) {
        document.querySelector("#module_list > p").style.color = "black";
        if (parm2.parentNode.children[0].innerHTML == 1) {
            s_start_container.classList.add("hide");
        }

        parm2.parentNode.children[0].innerHTML--;
        //createModuleList.splice(parm)
        var item = parm

        var index = createModuleList.indexOf(item);
        if (index !== -1) createModuleList.splice(index, 1);
    } else {

        // document.querySelector("#module_list > p").style.color = "red";
    }
    console.log(createModuleList, parm2);
    document.querySelector("#module_list > p > span").innerHTML = createModuleList.length;
}

function plusOneModule(parm, parm2) {
    if (createModuleList.length < 11) {
        document.querySelector("#module_list > p").style.color = "black";
        if (parm2.parentNode.children[0].innerHTML == 0) {
            s_start_container.classList.remove("hide");
        }
        createModuleList.push(parm);
        parm2.parentNode.children[0].innerHTML++;
    } else {

        document.querySelector("#module_list > p").style.color = "red";
    }

    document.querySelector("#module_list > p > span").innerHTML = createModuleList.length;
    console.log(createModuleList, parm2);
}

function selectGameMode(parm) {

    if (parm == s_random) {
        s_random.children[0].style.display = "block";
        s_create.children[0].style.display = "none";
        s_random_chooser.classList.remove("hide");
        s_create_chooser.classList.add("hide");
        if (selectedGameMode == "create") {
            createModuleList = []
            for (let i = 0; i < document.querySelectorAll("#module_list ul li").length; i++) {
                document.querySelectorAll("#module_list ul li")[i].children[0].innerHTML = "0"
                document.querySelector("#module_list > p > span").innerHTML = createModuleList.length;
                document.querySelector("#timer_minute_range").value = 5;
                document.querySelector("#timer_minute_amount").innerHTML = 5 + ((this.value == 1) ? " Minute" : " Minutes");
            }
            s_lvl_easy.children[0].style.display = "none";
            s_lvl_normal.children[0].style.display = "none";
            s_lvl_hard.children[0].style.display = "none";
            s_start_container.classList.add("hide");
        }
        selectedGameMode = "random";
    } else if (parm == s_create) {
        s_random.children[0].style.display = "none";
        s_create.children[0].style.display = "block";
        s_random_chooser.classList.add("hide");
        s_create_chooser.classList.remove("hide");
        if (selectedGameMode == "random") {
            s_start_container.classList.add("hide");
        }
        selectedGameMode = "create";
    } else if (parm == s_lvl_easy) {
        s_lvl_easy.children[0].style.display = "block";
        s_lvl_normal.children[0].style.display = "none";
        s_lvl_hard.children[0].style.display = "none";
        s_start_container.classList.remove("hide");
        selectedLevel = "easy";
    } else if (parm == s_lvl_normal) {
        s_lvl_easy.children[0].style.display = "none";
        s_lvl_normal.children[0].style.display = "block";
        s_lvl_hard.children[0].style.display = "none";
        s_start_container.classList.remove("hide");
        selectedLevel = "normal";
    } else if (parm == s_lvl_hard) {
        s_lvl_easy.children[0].style.display = "none";
        s_lvl_normal.children[0].style.display = "none";
        s_lvl_hard.children[0].style.display = "block";
        s_start_container.classList.remove("hide");
        selectedLevel = "hard";
    }
}

function bombReady() {

    let bombSettings = {
        "time": 0,
        "modules": [],

    }

    if (selectedGameMode == "random") {

        if (selectedLevel == "easy") {
            bombSettings.time = 300000;
            for (let i = 0; i < 3; i++) {
                bombSettings.modules.push(easyList[Math.floor(Math.random() * easyList.length)])
            }
        } else if (selectedLevel == "normal") {
            bombSettings.time = 300000;
            for (let i = 0; i < 6; i++) {
                bombSettings.modules.push(normalList[Math.floor(Math.random() * normalList.length)])
            }
        } else {
            bombSettings.time = 240000;
            for (let i = 0; i < 9; i++) {
                bombSettings.modules.push(hardList[Math.floor(Math.random() * hardList.length)])
            }
        }
    } else if (selectedGameMode == "create") {
        bombSettings.time = document.querySelector("#timer_minute_range").value * 60 * 1000;
        bombSettings.modules = createModuleList;
    }

    ui.children[0].style.display = "none";
    ui.style.backgroundColor = "black";
    ui.style.opacity = "0";
    setTimeout(() => {
        ui.style.display = "none";
    }, 2000);

    console.log(bombSettings)

    initStart(bombSettings)
}


const slider = document.querySelector("#timer_minute_range");
const output = document.querySelector("#timer_minute_amount");
output.innerHTML = slider.value + " Minutes";

slider.oninput = function () {
    output.innerHTML = this.value + ((this.value == 1) ? " Minute" : " Minutes");


}
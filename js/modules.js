// ------- MAZE MODULE --------
mazeModule = {
    func: function () {
        let moduleCounter = document.querySelectorAll(".module_container>div").length;

        // Create module
        let newDiv = document.createElement("div");
        newDiv.classList.add(`svg_container`);
        newDiv.classList.add(`svg_container${moduleCounter}`);
        newDiv.innerHTML = `<div class="svg_subcontainer">${backgroundSvg}</div><div class="maze_container"><div class="maze_bg"></div><div class="maze"><div class="maze_triangle"><div></div></div><div class="maze_square"><div></div></div></div><div class="maze_rings"></div><div class="maze_button_top"></div><div class="maze_button_right"></div><div class="maze_button_bottom"></div><div class="maze_button_left"></div><div class="keyboard_button">Enable keyboard arrows</div></div>`;

        // Add to DOM
        if (moduleCounter < 6) {
            document.querySelector("#front_module_container").appendChild(newDiv);
        } else if (moduleCounter < 12) {
            document.querySelector("#back_module_container").appendChild(newDiv);
        }

        // Variables
        const square = document.querySelector(`.svg_container${moduleCounter} .maze_square`);
        const triangle = document.querySelector(`.svg_container${moduleCounter} .maze_triangle`);
        const buttons = document.querySelectorAll(`.svg_container${moduleCounter} div[class^="maze_button_"]`);
        const mazeRings = document.querySelector(`.svg_container${moduleCounter} .maze_rings`);
        const svgSubcontainer = document.querySelector(`.svg_container${moduleCounter} .svg_subcontainer`);

        const mazeCoordinates = {
            maze1: {
                x1: {
                    y6: "ES",
                    y5: "NS",
                    y4: "NS",
                    y3: "NS",
                    y2: "NES",
                    y1: "NE"
                },
                x2: {
                    y6: "EW",
                    y5: "ES",
                    y4: "NE",
                    y3: "E",
                    y2: "EW",
                    y1: "W"
                },
                x3: {
                    y6: "SW",
                    y5: "NW",
                    y4: "SW",
                    y3: "NEW",
                    y2: "SW",
                    y1: "NE"
                },
                x4: {
                    y6: "ES",
                    y5: "NE",
                    y4: "ES",
                    y3: "NW",
                    y2: "ES",
                    y1: "NW"
                },
                x5: {
                    y6: "EW",
                    y5: "EW",
                    y4: "EW",
                    y3: "E",
                    y2: "W",
                    y1: "E"
                },
                x6: {
                    y6: "W",
                    y5: "SW",
                    y4: "NSW",
                    y3: "NSW",
                    y2: "NS",
                    y1: "NW"
                }
            },
            maze2: {
                x1: {
                    y6: "E",
                    y5: "ES",
                    y4: "NS",
                    y3: "NES",
                    y2: "NS",
                    y1: "N"
                },
                x2: {
                    y6: "ESW",
                    y5: "NW",
                    y4: "ES",
                    y3: "NW",
                    y2: "S",
                    y1: "NE"
                },
                x3: {
                    y6: "W",
                    y5: "ES",
                    y4: "NW",
                    y3: "ES",
                    y2: "NS",
                    y1: "NW"
                },
                x4: {
                    y6: "ES",
                    y5: "NW",
                    y4: "ES",
                    y3: "NW",
                    y2: "ES",
                    y1: "NE"
                },
                x5: {
                    y6: "ESW",
                    y5: "NE",
                    y4: "EW",
                    y3: "S",
                    y2: "NW",
                    y1: "EW"
                },
                x6: {
                    y6: "W",
                    y5: "SW",
                    y4: "NSW",
                    y3: "NS",
                    y2: "NS",
                    y1: "NW"
                }
            },
            maze3: {
                x1: {
                    y6: "ES",
                    y5: "N",
                    y4: "ES",
                    y3: "NS",
                    y2: "NS",
                    y1: "NE"
                },
                x2: {
                    y6: "EW",
                    y5: "S",
                    y4: "NSW",
                    y3: "NS",
                    y2: "NE",
                    y1: "EW"
                },
                x3: {
                    y6: "SW",
                    y5: "NS",
                    y4: "NS",
                    y3: "NS",
                    y2: "NW",
                    y1: "EW"
                },
                x4: {
                    y6: "S",
                    y5: "NE",
                    y4: "ES",
                    y3: "NS",
                    y2: "NS",
                    y1: "NW"
                },
                x5: {
                    y6: "ES",
                    y5: "NW",
                    y4: "SW",
                    y3: "NS",
                    y2: "NS",
                    y1: "NE"
                },
                x6: {
                    y6: "SW",
                    y5: "NS",
                    y4: "NS",
                    y3: "NS",
                    y2: "NS",
                    y1: "NW"
                }
            },
            maze4: {
                x1: {
                    y6: "ES",
                    y5: "NS",
                    y4: "NS",
                    y3: "NS",
                    y2: "NES",
                    y1: "NE"
                },
                x2: {
                    y6: "SW",
                    y5: "NS",
                    y4: "NE",
                    y3: "E",
                    y2: "EW",
                    y1: "EW"
                },
                x3: {
                    y6: "E",
                    y5: "ES",
                    y4: "NW",
                    y3: "EW",
                    y2: "EW",
                    y1: "W"
                },
                x4: {
                    y6: "EW",
                    y5: "EW",
                    y4: "ES",
                    y3: "NES",
                    y2: "EW",
                    y1: "E"
                },
                x5: {
                    y6: "EW",
                    y5: "EW",
                    y4: "W",
                    y3: "EW",
                    y2: "SW",
                    y1: "NW"
                },
                x6: {
                    y6: "SW",
                    y5: "NSW",
                    y4: "NS",
                    y3: "NSW",
                    y2: "NS",
                    y1: "N"
                }
            },
            maze5: {
                x1: {
                    y6: "E",
                    y5: "ES",
                    y4: "NES",
                    y3: "NS",
                    y2: "NS",
                    y1: "N"
                },
                x2: {
                    y6: "EW",
                    y5: "EW",
                    y4: "SW",
                    y3: "NE",
                    y2: "ES",
                    y1: "NE"
                },
                x3: {
                    y6: "EW",
                    y5: "EW",
                    y4: "E",
                    y3: "EW",
                    y2: "EW",
                    y1: "EW"
                },
                x4: {
                    y6: "EW",
                    y5: "ESW",
                    y4: "NW",
                    y3: "SW",
                    y2: "NEW",
                    y1: "EW"
                },
                x5: {
                    y6: "ESW",
                    y5: "NW",
                    y4: "ES",
                    y3: "N",
                    y2: "W",
                    y1: "EW"
                },
                x6: {
                    y6: "SW",
                    y5: "N",
                    y4: "SW",
                    y3: "NS",
                    y2: "NS",
                    y1: "NW"
                }
            },
            maze6: {
                x1: {
                    y6: "S",
                    y5: "NS",
                    y4: "NES",
                    y3: "NE",
                    y2: "ES",
                    y1: "NE"
                },
                x2: {
                    y6: "ES",
                    y5: "NS",
                    y4: "NW",
                    y3: "SW",
                    y2: "NW",
                    y1: "EW"
                },
                x3: {
                    y6: "SW",
                    y5: "NS",
                    y4: "N",
                    y3: "ES",
                    y2: "N",
                    y1: "EW"
                },
                x4: {
                    y6: "E",
                    y5: "ES",
                    y4: "NS",
                    y3: "NSW",
                    y2: "NS",
                    y1: "NW"
                },
                x5: {
                    y6: "ESW",
                    y5: "NW",
                    y4: "ES",
                    y3: "NS",
                    y2: "NE",
                    y1: "E"
                },
                x6: {
                    y6: "SW",
                    y5: "NS",
                    y4: "NW",
                    y3: "S",
                    y2: "NSW",
                    y1: "NW"
                }
            },
            maze7: {
                x1: {
                    y6: "ES",
                    y5: "NS",
                    y4: "NE",
                    y3: "ES",
                    y2: "NS",
                    y1: "NE"
                },
                x2: {
                    y6: "EW",
                    y5: "ES",
                    y4: "NW",
                    y3: "SW",
                    y2: "S",
                    y1: "EW"
                },
                x3: {
                    y6: "EW",
                    y5: "W",
                    y4: "ES",
                    y3: "NES",
                    y2: "NE",
                    y1: "EW"
                },
                x4: {
                    y6: "SW",
                    y5: "NE",
                    y4: "W",
                    y3: "EW",
                    y2: "EW",
                    y1: "EW"
                },
                x5: {
                    y6: "ES",
                    y5: "NW",
                    y4: "ES",
                    y3: "NW",
                    y2: "SW",
                    y1: "NEW"
                },
                x6: {
                    y6: "SW",
                    y5: "NS",
                    y4: "NW",
                    y3: "S",
                    y2: "NS",
                    y1: "NW"
                }
            },
            maze8: {
                x1: {
                    y6: "S",
                    y5: "NES",
                    y4: "NS",
                    y3: "NS",
                    y2: "NS",
                    y1: "NE"
                },
                x2: {
                    y6: "ES",
                    y5: "NEW",
                    y4: "ES",
                    y3: "NE",
                    y2: "S",
                    y1: "NEW"
                },
                x3: {
                    y6: "EW",
                    y5: "SW",
                    y4: "EW",
                    y3: "SW",
                    y2: "NE",
                    y1: "EW"
                },
                x4: {
                    y6: "SW",
                    y5: "NE",
                    y4: "EW",
                    y3: "E",
                    y2: "EW",
                    y1: "EW"
                },
                x5: {
                    y6: "ES",
                    y5: "NW",
                    y4: "SW",
                    y3: "NEW",
                    y2: "EW",
                    y1: "EW"
                },
                x6: {
                    y6: "SW",
                    y5: "NS",
                    y4: "NS",
                    y3: "NW",
                    y2: "W",
                    y1: "W"
                }
            },
            maze9: {
                x1: {
                    y6: "S",
                    y5: "NS",
                    y4: "NES",
                    y3: "NS",
                    y2: "NS",
                    y1: "NE"
                },
                x2: {
                    y6: "ES",
                    y5: "NS",
                    y4: "NEW",
                    y3: "S",
                    y2: "NS",
                    y1: "NW"
                },
                x3: {
                    y6: "EW",
                    y5: "ES",
                    y4: "NW",
                    y3: "ES",
                    y2: "NS",
                    y1: "NE"
                },
                x4: {
                    y6: "EW",
                    y5: "W",
                    y4: "ES",
                    y3: "NW",
                    y2: "ES",
                    y1: "NW"
                },
                x5: {
                    y6: "ESW",
                    y5: "NS",
                    y4: "NW",
                    y3: "E",
                    y2: "SW",
                    y1: "NE"
                },
                x6: {
                    y6: "SW",
                    y5: "NS",
                    y4: "NS",
                    y3: "NSW",
                    y2: "N",
                    y1: "W"
                }
            }
        };

        let currentSquareX,
            currentSquareY,
            currentTriangleX,
            currentTriangleY,
            mazeNumber;

        const keysObj = {
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        }

        init();



        function init() {
            createMap();
            addEventListeners();
        }

        function addEventListeners() {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("click", moveSquare);
            }

            // add keyboard
            document.querySelector(`.svg_container${moduleCounter} .keyboard_button`).addEventListener("click", toggleKeyboard)
        }

        function createMap() {
            currentSquareX = Math.floor(Math.random() * 6) + 1;
            currentSquareY = Math.floor(Math.random() * 6) + 1;
            currentTriangleX = Math.floor(Math.random() * 6) + 1;
            currentTriangleY = Math.floor(Math.random() * 6) + 1;
            mazeNumber = Math.floor(Math.random() * 9) + 1;

            square.style.gridArea = `${currentSquareY} / ${currentSquareX} / 7 / 7`;
            triangle.style.gridArea = `${currentTriangleY} / ${currentTriangleX} / 7 / 7`;
            mazeRings.style.backgroundImage = `url(../media/module_maze/maze_rings${mazeNumber}.svg)`;
            //mazeRings.style.backgroundImage = `url(../media/module_maze/maze_rings${mazeNumber}_grid.svg)`;

            // Extra randomise if square and triangle are next to each other
            if (Math.abs(currentSquareX - currentTriangleX) <= 1 && Math.abs(currentSquareY - currentTriangleY) <= 1) {
                createMap()
            }
        }

        function moveSquare(keyNum, isKey) {

            let direction;

            if (isKey) {
                direction = keyNum;
            } else {
                if (this.classList.contains("maze_button_top")) {
                    direction = "up";
                } else if (this.classList.contains("maze_button_right")) {
                    direction = "right";
                } else if (this.classList.contains("maze_button_bottom")) {
                    direction = "down";
                } else {
                    direction = "left";
                }
            }

            // Reset square style
            square.style.borderTop = "";
            square.style.borderRight = "";
            square.style.borderBottom = "";
            square.style.borderLeft = "";
            square.children[0].style.top = "7px";
            square.children[0].style.left = "7px";

            // Going up
            if (direction === "up") {
                if (mazeCoordinates[`maze${mazeNumber}`][`x${currentSquareX}`][`y${currentSquareY}`].includes("N")) {
                    currentSquareY++;
                    square.style.gridArea = `${currentSquareY} / ${currentSquareX} / 7 / 7`;
                    checkForDone();
                } else {
                    square.style.borderBottom = "1px solid red";
                    if (currentSquareY == 6) {
                        square.children[0].style.top = "8px";
                    }
                    wrongClick();
                }

                // Going Right
            } else if (direction === "right") {
                if (mazeCoordinates[`maze${mazeNumber}`][`x${currentSquareX}`][`y${currentSquareY}`].includes("E")) {
                    currentSquareX++;
                    square.style.gridArea = `${currentSquareY} / ${currentSquareX} / 7 / 7`;
                    checkForDone();
                } else {
                    square.style.borderRight = "1px solid red";
                    if (currentSquareX == 6) {
                        square.children[0].style.left = "8px";
                    }
                    wrongClick();
                }

                // Going Down
            } else if (direction === "down") {
                if (mazeCoordinates[`maze${mazeNumber}`][`x${currentSquareX}`][`y${currentSquareY}`].includes("S")) {
                    currentSquareY--;
                    square.style.gridArea = `${currentSquareY} / ${currentSquareX} / 7 / 7`;
                    checkForDone();
                } else {
                    square.style.borderTop = "1px solid red";
                    if (currentSquareX == 6) {
                        square.children[0].style.top = "6px";
                    }
                    wrongClick();
                }

                // Going Left
            } else {
                if (mazeCoordinates[`maze${mazeNumber}`][`x${currentSquareX}`][`y${currentSquareY}`].includes("W")) {
                    currentSquareX--;
                    square.style.gridArea = `${currentSquareY} / ${currentSquareX} / 7 / 7`;
                    checkForDone();
                } else {
                    square.style.borderLeft = "1px solid red";
                    if (currentSquareY == 6) {
                        square.children[0].style.left = "6px";
                    }
                    wrongClick();
                }
            }
        }

        function handleArrowKeys(e) {
            moveSquare(keysObj[e.keyCode], true);
            console.log(keysObj[e.keyCode])
        }

        function toggleKeyboard() {
            console.log(mazeSelected)
            if (mazeSelected.status === false && mazeSelected.containerNum === undefined) {
                console.log("new maze selected");

                svgSubcontainer.style.boxShadow = "0px 0px 3px 3px red";

                window.addEventListener("keydown", handleArrowKeys);
                document.querySelector(`.svg_container${moduleCounter} .keyboard_button`).innerHTML = "Disable keyboard arrows";


                mazeSelected.status = true;
                mazeSelected.containerNum = moduleCounter;
            } else if (mazeSelected.status === true && mazeSelected.containerNum === moduleCounter) {
                console.log("maze deselected");

                svgSubcontainer.style.boxShadow = "";
                window.removeEventListener("keydown", handleArrowKeys);
                document.querySelector(`.svg_container${moduleCounter} .keyboard_button`).innerHTML = "Enable keyboard arrows";

                mazeSelected.status = false;
                mazeSelected.containerNum = undefined;
            } else {
                console.log("another maze is used");
            }

        }

        function checkForDone() {
            if (
                currentTriangleX == currentSquareX &&
                currentTriangleY == currentSquareY
            ) {
                moduleDone();
            }
        }

        function wrongClick() {
            // Red light
            let red_light = document.querySelector(`.svg_container${moduleCounter} .svg_subcontainer .red_light`);
            red_light.style.opacity = "1";
            setTimeout(function () {
                red_light.style.opacity = "0";
            }, 1000);

            // Shake
            let container = document.querySelector(`.svg_container${moduleCounter}`);
            container.classList.add("shake");
            setTimeout(function () {
                container.classList.remove("shake");
            }, 100);

            // Add strike
            strikeFunc();
        }

        function moduleDone() {
            // Remove eventlisteners
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].removeEventListener("click", moveSquare);
            }
            window.removeEventListener("keydown", handleArrowKeys);

            // Style
            square.style.display = "none";
            document.querySelector(`.svg_container${moduleCounter} .svg_subcontainer .green_light`).style.opacity = "1";
            svgSubcontainer.style.boxShadow = "";
            document.querySelector(`.svg_container${moduleCounter} .keyboard_button`).style.display = "none";

            // Reset data
            mazeSelected = {
                status: false,
                containerNum: undefined
            };

            // Module Beaten
            moduleBeaten();
        }
    }
}

// ------- WIRE SEQUENCES MODULE --------
wireSequencesModule = {
    func: function () {

        let moduleCounter = document.querySelectorAll(".module_container>div").length;

        // Create module
        let newDiv = document.createElement("div");
        newDiv.classList.add(`svg_container`);
        newDiv.classList.add(`svg_container${moduleCounter}`);
        newDiv.innerHTML = `<div class="svg_subcontainer">${wireSequencesSvg}</div><div class="wire_sequences_container"><div class="right_overlay"></div><div class="left_overlay"></div></div>`;

        // Add to DOM

        if (moduleCounter < 6) {
            document.querySelector("#front_module_container").appendChild(newDiv);
        } else if (moduleCounter < 12) {
            document.querySelector("#back_module_container").appendChild(newDiv);
        }

        // Variables
        const wireList = document.querySelectorAll(
            `.svg_container${moduleCounter} .Wire_container path`
        );
        const rightOverlay = document.querySelector(
            `.svg_container${moduleCounter} .right_overlay`
        );
        const leftOverlay = document.querySelector(
            `.svg_container${moduleCounter} .left_overlay`
        );
        const arrowUp = document.querySelector(
            `.svg_container${moduleCounter} .Arrow_up`
        );
        const arrowDown = document.querySelector(
            `.svg_container${moduleCounter} .Arrow_down`
        );
        const numberLabels = document.querySelectorAll(
            `.svg_container${moduleCounter} .number_label`
        );
        const stripLabel = document.querySelectorAll(
            `.svg_container${moduleCounter} .strip_label`
        );

        const wireStyling = [
            [{
                d: "M0,0S12.956-1.366,27.456-1.366,58,0,58,0",
                transform: "translate(1239px, 82px)",
                dasharray: "35px",
                dashoffset: "22px"
            },
            {
                d: "M0,0A168.465,168.465,0,0,1,29.921,10.678,190.738,190.738,0,0,1,58,27.988",
                transform: "translate(1239px, 82px)",
                dasharray: "38px",
                dashoffset: "23px"
            },
            {
                d: "M0,0A194.849,194.849,0,0,1,31.651,24.153C46.151,38.153,58,56,58,56",
                transform: "translate(1239px, 82px)",
                dasharray: "62px",
                dashoffset: "54px"
            }
            ],
            [{
                d: "M0,28s16.029-9.54,30.529-16.54A281.456,281.456,0,0,1,58,0",
                transform: "translate(1239px, 82px)",
                dasharray: "35px",
                dashoffset: "20px"
            },
            {
                d: "M0,0A235.111,235.111,0,0,0,27.661,1.765C42.161,1.765,58,0,58,0",
                transform: "translate(1239px, 110px)",
                dasharray: "40px",
                dashoffset: "30px"
            },
            {
                d: "M0,0S13.942,8.554,28.442,15.554,58,28,58,28",
                transform: "translate(1239px, 110px)",
                dasharray: "45px",
                dashoffset: "35px"
            }
            ],
            [{
                d: "M0,28.092l58-56.1",
                transform: "translate(1239px, 110px)",
                dasharray: "62px",
                dashoffset: "54px"
            },
            {
                d: "M0-.006l58-28",
                transform: "translate(1239px, 138px)",
                dasharray: "48px",
                dashoffset: "40px"
            },
            {
                d: "M0,0A182.834,182.834,0,0,1,27.546-2.25,254.549,254.549,0,0,1,58,0",
                transform: "translate(1239px, 138px)",
                dasharray: "40px",
                dashoffset: "30px"
            }
            ]
        ];
        const colorArray = ["black", "blue", "red"];

        let wireArray = [];
        let panelStep = 0;

        init();

        function init() {
            chooseWires();
            changePanel();
        }

        function chooseWires() {
            let k = 0;

            // Choose letter and color
            for (let i = 0; i < 12; i++) {
                if (k == 3) {
                    k = 0;
                }

                let randomNr = Math.floor(Math.random() * wireList.length);
                let dValue = `path("` + wireStyling[k][randomNr].d + `")`;
                let transformValue = wireStyling[k][randomNr].transform;
                let dasharrayValue = wireStyling[k][randomNr].dasharray;
                let dashoffsetValue = wireStyling[k][randomNr].dashoffset;
                let colorValue =
                    colorArray[Math.floor(Math.random() * colorArray.length)];

                wireArray.push({
                    d: dValue,
                    transform: transformValue,
                    color: colorValue,
                    number: randomNr,
                    cut: false,
                    dasharray: dasharrayValue,
                    dashoffset: dashoffsetValue
                });

                k++;
            }

            // Remove 3 wires so there is only 9 wires.
            let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            for (let i = 0; i < 3; i++) {
                wireArray[
                    numbers.splice(Math.floor(Math.random() * numbers.length), 1)
                ] = {
                    cut: true
                };
            }

            // Cut or not
            for (let i = 0; i < wireArray.length; i++) {
                if (wireArray[i].cut != true) {
                    if (cutOrNot(panelStep * 3 + i)) {
                        //console.log("wire" + (i + 1), "CUT");
                        wireArray[i].cutIt = true;
                    } else {
                        //console.log("wire" + (i + 1), "NOT");
                        wireArray[i].cutIt = false;
                    }
                }
            }

            // Add eventlisteners to wires
            addEventListeners();
        }

        function addEventListeners() {
            // Buttons
            arrowUp.addEventListener("click", panelUp);
            arrowDown.addEventListener("click", panelDown);

            //console.log(wireArray);
            for (let i = 0; i < wireList.length; i++) {
                wireList[i].addEventListener("click", cutWire);
            }
        }

        function changePanel() {
            // Add overlay and remove eventlisteners
            rightOverlay.style.transform = "scaleX(1)";
            leftOverlay.style.transform = "scaleX(1)";
            arrowUp.removeEventListener("click", panelUp);
            arrowDown.removeEventListener("click", panelDown);

            // Change panel
            setTimeout(() => {
                for (let i = 0; i < wireList.length; i++) {
                    if (wireArray[panelStep * 3 + i].d) {
                        wireList[i].style.d = wireArray[panelStep * 3 + i].d;
                        wireList[i].style.transform = wireArray[panelStep * 3 + i].transform;
                        wireList[i].style.stroke = wireArray[panelStep * 3 + i].color;
                        if (wireArray[panelStep * 3 + i].cut) {
                            wireList[i].style.strokeDasharray =
                                wireArray[panelStep * 3 + i].dasharray;
                            wireList[i].style.strokeDashoffset =
                                wireArray[panelStep * 3 + i].dashoffset;
                            wireList[i].removeEventListener("click", cutWire);
                        } else {
                            wireList[i].style.strokeDasharray = "";
                            wireList[i].style.strokeDashoffset = "";
                            wireList[i].addEventListener("click", cutWire);
                        }
                    } else {
                        wireList[i].style.d = "";
                        wireList[i].style.transform = "";
                        wireList[i].style.stroke = "";
                        wireList[i].style.strokeDasharray = "";
                        wireList[i].style.strokeDashoffset = "";
                    }
                    numberLabels[i].innerHTML = panelStep * 3 + i + 1;
                }
            }, 300);

            // Remove overlay and add eventlisteners
            setTimeout(() => {
                rightOverlay.style.transform = "scaleX(0)";
                leftOverlay.style.transform = "scaleX(0)";
                arrowUp.addEventListener("click", panelUp);
                arrowDown.addEventListener("click", panelDown);
            }, 600);
        }

        function panelUp() {
            if (panelStep != 0) {
                panelStep--;
                changePanel();
            }
        }

        function panelDown() {
            let rightWireAmount = 0;

            for (let i = 0; i < wireList.length; i++) {
                if (
                    wireArray[panelStep * 3 + i].cut ==
                    wireArray[panelStep * 3 + i].cutIt ||
                    wireArray[panelStep * 3 + i].cut
                ) {
                    rightWireAmount++;
                }
            }

            if (rightWireAmount == wireList.length) {
                stripLabel[panelStep].style.fill = "#00FF00";

                if (panelStep != 3) {
                    panelStep++;
                    changePanel();
                } else {
                    moduleDone();
                }
            } else {
                wrongClick();
            }
        }

        function cutWire() {
            for (let i = 0; i < wireList.length; i++) {
                if (this.classList.contains(`wire${i + 1}`)) {
                    wireList[i].style.strokeDasharray =
                        wireArray[panelStep * 3 + i].dasharray;
                    wireList[i].style.strokeDashoffset =
                        wireArray[panelStep * 3 + i].dashoffset;

                    wireList[i].removeEventListener("click", cutWire);

                    wireArray[panelStep * 3 + i].cut = true;

                    // Was it wrong?
                    if (!wireArray[panelStep * 3 + i].cutIt) {
                        wrongClick();
                    }
                }
            }
        }

        function cutOrNot(wireCounter) {
            let blackAmount = 0;
            let blueAmount = 0;
            let redAmount = 0;

            // Check how many of each color has occured untill the clicked wire
            for (let i = 0; i < wireCounter + 1; i++) {
                if (wireArray[i].color == "black") {
                    blackAmount++;
                } else if (wireArray[i].color == "blue") {
                    blueAmount++;
                } else if (wireArray[i].color == "red") {
                    redAmount++;
                }
            }

            // Check occurance and return true or false.

            let x = wireArray[wireCounter].number;
            let a = 0;
            let b = 1;
            let c = 2;

            if (wireArray[wireCounter].color == "black") {
                if (blackAmount == 1) {
                    if (x == a || x == b || x == c) {
                        return true;
                    }
                } else if (blackAmount == 2) {
                    if (x == a || x == c) {
                        return true;
                    }
                } else if (blackAmount == 3) {
                    if (x == b) {
                        return true;
                    }
                } else if (blackAmount == 4) {
                    if (x == a || x == c) {
                        return true;
                    }
                } else if (blackAmount == 5) {
                    if (x == b) {
                        return true;
                    }
                } else if (blackAmount == 6) {
                    if (x == b || x == c) {
                        return true;
                    }
                } else if (blackAmount == 7) {
                    if (x == a || x == b) {
                        return true;
                    }
                } else if (blackAmount == 8) {
                    if (x == c) {
                        return true;
                    }
                } else if (blackAmount == 9) {
                    if (x == c) {
                        return true;
                    }
                }
            } else if (wireArray[wireCounter].color == "blue") {
                if (blueAmount == 1) {
                    if (x == b) {
                        return true;
                    }
                } else if (blueAmount == 2) {
                    if (x == a || x == c) {
                        return true;
                    }
                } else if (blueAmount == 3) {
                    if (x == b) {
                        return true;
                    }
                } else if (blueAmount == 4) {
                    if (x == a) {
                        return true;
                    }
                } else if (blueAmount == 5) {
                    if (x == b) {
                        return true;
                    }
                } else if (blueAmount == 6) {
                    if (x == b || x == c) {
                        return true;
                    }
                } else if (blueAmount == 7) {
                    if (x == c) {
                        return true;
                    }
                } else if (blueAmount == 8) {
                    if (x == a || x == c) {
                        return true;
                    }
                } else if (blueAmount == 9) {
                    if (x == a) {
                        return true;
                    }
                }
            } else if (wireArray[wireCounter].color == "red") {
                if (redAmount == 1) {
                    if (x == c) {
                        return true;
                    }
                } else if (redAmount == 2) {
                    if (x == b) {
                        return true;
                    }
                } else if (redAmount == 3) {
                    if (x == a) {
                        return true;
                    }
                } else if (redAmount == 4) {
                    if (x == a || x == c) {
                        return true;
                    }
                } else if (redAmount == 5) {
                    if (x == b) {
                        return true;
                    }
                } else if (redAmount == 6) {
                    if (x == a || x == c) {
                        return true;
                    }
                } else if (redAmount == 7) {
                    if (x == a || x == b || x == c) {
                        return true;
                    }
                } else if (redAmount == 8) {
                    if (x == a || x == b) {
                        return true;
                    }
                } else if (redAmount == 9) {
                    if (x == b) {
                        return true;
                    }
                }
            }

            return false;
        }

        // Wrong + Done

        function wrongClick() {
            // Red light
            let red_light = document.querySelector(
                `.svg_container${moduleCounter} .svg_subcontainer .red_light`
            );
            red_light.style.opacity = "1";
            setTimeout(function () {
                red_light.style.opacity = "0";
            }, 1000);

            // Shake
            let container = document.querySelector(`.svg_container${moduleCounter}`);
            container.classList.add("shake");
            setTimeout(function () {
                container.classList.remove("shake");
            }, 100);

            // Add strike
            strikeFunc();
        }

        function moduleDone() {
            // Remove eventlisteners
            arrowUp.removeEventListener("click", panelUp);
            arrowDown.removeEventListener("click", panelDown);
            for (let i = 0; i < wireList.length; i++) {
                wireList[i].removeEventListener("click", cutWire);
            }

            // Style
            document.querySelector(
                `.svg_container${moduleCounter} .svg_subcontainer .green_light`
            ).style.opacity = "1";

            // Module Beaten
            moduleBeaten();
        }



    }
}

// ------- COMPLICATED WIRES MODULE --------
complicatedWiresModule = {
    func: function () {
        let moduleCounter = document.querySelectorAll(".module_container>div").length;

        // Create module
        let newDiv = document.createElement("div");
        newDiv.classList.add(`svg_container`);
        newDiv.classList.add(`svg_container${moduleCounter}`);
        newDiv.innerHTML = `<div class="svg_subcontainer">${complicatedWiresSvg}</div>`;

        // Add to DOM

        if (moduleCounter < 6) {
            document.querySelector("#front_module_container").appendChild(newDiv);
        } else if (moduleCounter < 12) {
            document.querySelector("#back_module_container").appendChild(newDiv);
        }

        const wireList = document.querySelectorAll(`.svg_container${moduleCounter} .wire_container g`);
        const ledList = document.querySelectorAll(`.svg_container${moduleCounter} .LED g`);
        const starList = document.querySelectorAll(`.svg_container${moduleCounter} .Stars path`);


        let wireArray = [
            [{
                red: false,
                blue: false,
                led: false,
                star: false,
                done: false
            }],
            [{
                red: false,
                blue: false,
                led: false,
                star: false,
                done: false
            }],
            [{
                red: false,
                blue: false,
                led: false,
                star: false,
                done: false
            }],
            [{
                red: false,
                blue: false,
                led: false,
                star: false,
                done: false
            }],
            [{
                red: false,
                blue: false,
                led: false,
                star: false,
                done: false
            }],
            [{
                red: false,
                blue: false,
                led: false,
                star: false,
                done: false
            }]
        ]


        init()

        function init() {
            createModule()
            wireHover()
        }

        function createModule() {

            for (let i = 0; i < wireList.length; i++) {

                // Decide if LED
                if (Math.random() < 0.5) {
                    wireArray[i][0].led = true;
                    ledList[i].style.fill = "yellow";
                }

                // Decide if star
                if (Math.random() < 0.5) {
                    wireArray[i][0].star = true;
                    starList[i].style.display = "block";
                }

                // Decide if red color
                if (Math.random() < 0.5) {
                    wireArray[i][0].red = true;
                }

                // Decide if blue color
                if (Math.random() < 0.5) {
                    wireArray[i][0].blue = true;
                }

                // Add colors
                if (wireArray[i][0].red == true && wireArray[i][0].blue == true) {
                    wireList[i].children[2].style.stroke = "red";
                    wireList[i].children[2].style.strokeDasharray = "10"

                    wireList[i].children[1].style.stroke = "blue";
                    wireList[i].children[1].style.strokeDasharray = "10"
                    wireList[i].children[1].style.strokeDashoffset = "10"

                } else if (wireArray[i][0].red == true) {
                    wireList[i].children[2].style.stroke = "red";
                } else if (wireArray[i][0].blue == true) {
                    wireList[i].children[2].style.stroke = "blue";
                }

                // Decide if stripe on red/blue only
                if (!(wireArray[i][0].red == true && wireArray[i][0].blue == true)) {
                    if (Math.random() < 0.5) {
                        wireList[i].children[2].style.strokeDasharray = "10"
                        wireList[i].children[2].style.strokeDashoffset = "20"
                    }
                }

            }

            addEventListeners()
        }

        function addEventListeners() {


            for (let i = 0; i < wireArray.length; i++) {
                if (findSolution(wireArray[i][0])) {
                    wireList[i].addEventListener("click", rightClick);
                } else {
                    wireArray[i][0].done = true;
                    wireList[i].addEventListener("click", wrongClick);
                }
            }

            // If all wires are on "Don't cut" then rerun code
            if (isModuleDone()) {
                document.querySelector(`.svg_container${moduleCounter}`).remove()
                complicatedWiresModule()
            }
        }

        function findSolution(parm) {

            let letter;

            if (parm.red) {
                if (parm.blue) {
                    if (parm.star) {
                        if (parm.led) {
                            // Red Blue Star LED
                            letter = "D";

                        } else {
                            // Red Blue Star
                            letter = "P";
                        }
                    } else {
                        if (parm.led) {
                            // Red Blue LED
                            letter = "S";

                        } else {
                            // Red Blue
                            letter = "S";
                        }
                    }
                } else {
                    if (parm.star) {
                        if (parm.led) {
                            // Red Star LED
                            letter = "B";

                        } else {
                            // Red Star
                            letter = "C";
                        }
                    } else {
                        if (parm.led) {
                            // Red LED
                            letter = "B";

                        } else {
                            // Red
                            letter = "S";
                        }
                    }
                }
            } else {
                if (parm.blue) {
                    if (parm.star) {
                        if (parm.led) {
                            // Blue Star LED
                            letter = "P";

                        } else {
                            // Blue Star
                            letter = "D";
                        }
                    } else {
                        if (parm.led) {
                            // Blue LED
                            letter = "P";

                        } else {
                            // Blue
                            letter = "S";
                        }
                    }
                } else {
                    if (parm.star) {
                        if (parm.led) {
                            // Star LED
                            letter = "B";

                        } else {
                            // Star
                            letter = "C";
                        }
                    } else {
                        if (parm.led) {
                            // LED
                            letter = "D";

                        } else {
                            // EMPTY
                            letter = "C";
                        }
                    }

                }
            }

            if (letter == "C") {
                return true;
            } else if (letter == "S" && evenNumb.includes(serialNumber.slice(-1))) {
                return true;
            } else if (letter == "P" && parellelPortActive) {
                return true;
            } else if (letter == "B" && batteryAmount >= 2) {
                return true;
            } else {
                return false;
            }
        }

        function rightClick() {
            wireCut(this)

            if (isModuleDone()) {
                moduleDone()
            }
        }

        function moduleDone() {
            // Style
            document.querySelector(`.svg_container${moduleCounter} .svg_subcontainer .green_light`).style.opacity = "1";

            // Remove eventlisteners
            for (let i = 0; i < wireList.length; i++) {
                wireList[i].removeEventListener("click", rightClick);
                wireList[i].removeEventListener("click", wrongClick);
                wireList[i].removeEventListener("mouseover", hoverOn);
                wireList[i].removeEventListener("mouseover", hoverOff);
            }

            // Module Beaten
            moduleBeaten();
        }

        function wrongClick() {
            wireCut(this)

            // Red light
            let red_light = document.querySelector(`.svg_container${moduleCounter} .svg_subcontainer .red_light`);
            red_light.style.opacity = "1";
            setTimeout(function () {
                red_light.style.opacity = "0";
            }, 1000);

            // Shake
            let container = document.querySelector(`.svg_container${moduleCounter}`);
            container.classList.add("shake");
            setTimeout(function () {
                container.classList.remove("shake");
            }, 100);

            // Add strike
            strikeFunc();
        }

        function isModuleDone() {
            for (let i = 0; i < wireArray.length; i++) {
                if (!wireArray[i][0].done && !wireList[i].children[3].classList.contains("wire_is_cut")) {
                    return false;
                }
            }
            return true;
        }

        function wireCut(parm) {
            parm.children[3].classList.add("wire_is_cut");
            parm.removeEventListener("click", rightClick);
            parm.removeEventListener("click", wrongClick);
            parm.removeEventListener("mouseover", hoverOn);
            parm.removeEventListener("mouseover", hoverOff);
            parm.children[0].style.display = "none";
        }

        function wireHover() {
            for (let i = 0; i < wireArray.length; i++) {
                wireList[i].addEventListener("mouseover", hoverOn);
                wireList[i].addEventListener("mouseleave", hoverOff);
            }
        }

        function hoverOn() {
            this.children[0].style.display = "block";
        }

        function hoverOff() {
            this.children[0].style.display = "none";
        }



    }
}

// ------- MORSE CODE --------
morseCodeModule = {
    func: function () {
        let moduleCounter = document.querySelectorAll(".module_container>div").length;

        // Create module
        let newDiv = document.createElement("div");
        newDiv.classList.add(`svg_container`);
        newDiv.classList.add(`svg_container${moduleCounter}`);
        newDiv.innerHTML = `<div class="svg_subcontainer">${morseCodeSvg}</div><div class="morsecode_container"><div class="morsecode_light"></div><div class="morsecode_display">3.505 MHz</div><div class="morsecode_tuner_line"></div><div class="morsecode_btn_left"></div><div class="morsecode_btn_right"></div><div class="morsecode_TX_btn">TX</div></div>`;

        // Add to DOM
        if (moduleCounter < 6) {
            document.querySelector("#front_module_container").appendChild(newDiv);
        } else if (moduleCounter < 12) {
            document.querySelector("#back_module_container").appendChild(newDiv);
        }

        // Variables
        const light = document.querySelector(`.svg_container${moduleCounter} .morsecode_light`);
        const display = document.querySelector(`.svg_container${moduleCounter} .morsecode_display`);
        const TX = document.querySelector(`.svg_container${moduleCounter} .morsecode_TX_btn`);
        const tunerLine = document.querySelector(`.svg_container${moduleCounter} .morsecode_tuner_line`);
        const btnLeft = document.querySelector(`.svg_container${moduleCounter} .morsecode_btn_left`);
        const btnRight = document.querySelector(`.svg_container${moduleCounter} .morsecode_btn_right`);

        const morseCodeList = {
            a: ".-",
            b: "-...",
            c: "-.-.",
            d: "-..",
            e: ".",
            f: "..-.",
            g: "--.",
            h: "....",
            i: "..",
            j: ".---",
            k: "-.-",
            l: ".-..",
            m: "--",
            n: "-.",
            o: "---",
            p: ".--.",
            q: "--.-",
            r: ".-.",
            s: "...",
            t: "-",
            u: "..-",
            v: "...-",
            w: ".--",
            x: "-..-",
            y: "-.--",
            z: "--.."
        }

        const wordList = [{
            word: "shell",
            frequency: "3.505"
        }, {
            word: "halls",
            frequency: "3.515"
        }, {
            word: "slick",
            frequency: "3.522"
        }, {
            word: "trick",
            frequency: "3.532"
        }, {
            word: "boxes",
            frequency: "3.535"
        }, {
            word: "leaks",
            frequency: "3.542"
        }, {
            word: "strobe",
            frequency: "3.545"
        }, {
            word: "bistro",
            frequency: "3.552"
        }, {
            word: "flick",
            frequency: "3.555"
        }, {
            word: "bombs",
            frequency: "3.565"
        }, {
            word: "break",
            frequency: "3.572"
        }, {
            word: "brick",
            frequency: "3.575"
        }, {
            word: "steak",
            frequency: "3.582"
        }, {
            word: "sting",
            frequency: "3.592"
        }, {
            word: "vector",
            frequency: "3.595"
        }, {
            word: "beats",
            frequency: "3.600"
        }]

        let blinkArray = "";
        let completedModule = false;
        let selectedWordData;
        let frequencyNr = 0;

        // Eventlisteners
        btnLeft.addEventListener("click", tuneFrequency);
        btnRight.addEventListener("click", tuneFrequency);
        TX.addEventListener("click", TXbtnClicked);


        init()

        function init() {

            // Get word and start sequence
            selectedWordData = selectWord();
            //console.log(selectedWordData.word)
            let wordArray = returnMorseCode(selectedWordData.word);
            morseCodeFlashing(wordArray)

        }

        // Select and return word
        function selectWord() {
            return wordList[Math.floor(Math.random() * wordList.length)];
        }

        // Find and return morse code
        function returnMorseCode(parm) {

            let parmSplit = parm.split("");

            for (let i = 0; i < parmSplit.length; i++) {
                let test = parmSplit[i]
                blinkArray += morseCodeList[test] + " ";
            }

            let newArray = "";

            for (let i = 0; i < blinkArray.length; i++) {
                if (blinkArray[i] == ".") {
                    newArray += ". "
                } else if (blinkArray[i] == "-") {
                    newArray += "... "
                } else {
                    newArray += "  "
                }
            }

            return newArray;
        }

        // Animate morse code from string
        function morseCodeFlashing(parm) {
            //console.log(parm.length)
            var i = 0;
            let clickSpeed = 500;

            function wordLoop() {
                if (parm[i] != " ") {
                    light.classList.add("morsecode_flash");
                } else {
                    light.classList.remove("morsecode_flash");
                }
                setTimeout(function () {
                    i++;
                    if (i < parm.length) {
                        if (completedModule == false) {
                            wordLoop();
                        }
                    } else {
                        i = 0;
                        setTimeout(() => {
                            if (completedModule == false) {
                                wordLoop();
                            }
                        }, 3500);
                    }
                }, clickSpeed)
            }
            wordLoop();

        }

        // Move tuner line on clicks
        function tuneFrequency() {
            if (this.classList.contains("morsecode_btn_left") && frequencyNr != 0) {
                frequencyNr--;
                display.innerHTML = wordList[frequencyNr].frequency + " MHZ";
                tunerLine.style.left = 25 + frequencyNr * 9.7 + "px";
            } else if (this.classList.contains("morsecode_btn_right") && frequencyNr != 15) {
                frequencyNr++;
                display.innerHTML = wordList[frequencyNr].frequency + " MHZ";
                tunerLine.style.left = 25 + frequencyNr * 9.7 + "px";
            }
        }

        // when TX btn clicked; check for correct
        function TXbtnClicked() {
            if (display.innerHTML.split(" ")[0] == selectedWordData.frequency) {
                moduleDone()
            } else {
                wrongClick()
            }
        }


        // Wrong + Done

        function wrongClick() {

            // Red light
            let red_light = document.querySelector(`.svg_container${moduleCounter} .svg_subcontainer .red_light`);
            red_light.style.opacity = "1";
            setTimeout(function () {
                red_light.style.opacity = "0";
            }, 1000);

            // Shake
            let container = document.querySelector(`.svg_container${moduleCounter}`);
            container.classList.add("shake");
            setTimeout(function () {
                container.classList.remove("shake");
            }, 100);

            // Add strike
            strikeFunc();
        }

        function moduleDone() {
            // Reset
            btnLeft.removeEventListener("click", tuneFrequency);
            btnRight.removeEventListener("click", tuneFrequency);
            TX.removeEventListener("click", TXbtnClicked);

            // Stop Sequence
            light.classList.remove("morsecode_flash")
            completedModule = true;

            // Style
            document.querySelector(`.svg_container${moduleCounter} .svg_subcontainer .green_light`).style.opacity = "1";

            // Module Beaten
            moduleBeaten();
        }

    }
}

// ------- MEMORY --------
memoryModule = {
    func: function () {
        let moduleCounter = document.querySelectorAll(".module_container>div").length;

        // Create module
        let newDiv = document.createElement("div");
        newDiv.classList.add(`svg_container`);
        newDiv.classList.add(`svg_container${moduleCounter}`);
        newDiv.innerHTML = `<div class="svg_subcontainer">${memorySvg}</div><div class="memory_container"><div class="memory_display"></div><div class="memory_position_1">1</div><div class="memory_position_2">3</div><div class="memory_position_3">4</div><div class="memory_position_4">2</div><div class="memory_strip"></div><div class="memory_strip_light_1"></div><div class="memory_strip_light_2"></div><div class="memory_strip_light_3"></div><div class="memory_strip_light_4"></div><div class="memory_strip_light_5"></div></div>`;

        // Add to DOM
        if (moduleCounter < 6) {
            document.querySelector("#front_module_container").appendChild(newDiv);
        } else if (moduleCounter < 12) {
            document.querySelector("#back_module_container").appendChild(newDiv);
        }

        // Variables
        const memoryDisplay = document.querySelector(`.svg_container${moduleCounter} .memory_display`);
        const memoryPositions = document.querySelectorAll(`.svg_container${moduleCounter} [class^="memory_position"]`);
        const memoryStripLights = document.querySelectorAll(`.svg_container${moduleCounter} [class^="memory_strip_light_"]`);

        const positionNumbers = [1, 2, 3, 4];
        let stageNr = 1;
        let displayNr;
        let allDisplayNr = [];
        let currentNumbers;
        let stepsArray = [];

        addMemoryNumbers();

        // Add numbers
        function addMemoryNumbers() {
            let numbersClone = positionNumbers.slice(0);

            // Add display number
            displayNr = Math.floor(Math.random() * numbersClone.length) + 1;
            allDisplayNr.push(displayNr);

            memoryDisplay.innerHTML = displayNr;
            setTimeout(() => {
                memoryDisplay.style.opacity = 1;
                memoryDisplay.style.transform = "scaleX(1) scaleY(1)";
            }, 100);

            let newcurrentNumbers = [];

            // Add position numbers and add to array
            for (let i = 0; i < memoryPositions.length; i++) {
                let randomNr = Math.floor(Math.random() * numbersClone.length);
                let selectedNr = numbersClone.splice(randomNr, 1);
                memoryPositions[i].innerHTML = selectedNr;
                newcurrentNumbers.push({
                    position: memoryPositions[i],
                    label: selectedNr[0]
                });
            }

            // Sort numbers in array
            newcurrentNumbers.sort(function (a, b) {
                if (a.label < b.label) {
                    return -1;
                }
                if (a.label > b.label) {
                    return 1;
                }
            });
            currentNumbers = newcurrentNumbers;

            addEventListeners();
            animateNumbers("in");
        }

        // Numbers animation
        function animateNumbers(parm) {
            let i = 0;

            function myLoop() {
                setTimeout(function () {
                    if (parm == "in") {
                        memoryPositions[i].style.transform = "scaleY(1)";
                    } else {
                        memoryPositions[i].style.transform = "scaleY(0)";
                    }
                    i++;
                    if (i < memoryPositions.length) {
                        myLoop();
                    }
                }, 100);
            }
            myLoop();
        }

        // Add eventlisteners
        function addEventListeners() {
            let correct = findCorrect();

            for (let i = 0; i < memoryPositions.length; i++) {
                if (memoryPositions[i] == correct) {
                    // Correct
                    memoryPositions[i].addEventListener("click", correctClick);
                } else {
                    // Wrong
                    memoryPositions[i].addEventListener("click", wrongClick);
                }
            }
        }

        function findCorrect() {
            //console.log("stepsArray:", stepsArray, "display nrs", allDisplayNr);
            let x;
            if (stageNr == 1) {
                if (displayNr == 1) {
                    return memoryPositions[1];
                } else if (displayNr == 2) {
                    return memoryPositions[1];
                } else if (displayNr == 3) {
                    return memoryPositions[2];
                } else if (displayNr == 4) {
                    return memoryPositions[3];
                }
            } else if (stageNr == 2) {
                if (displayNr == 1) {
                    return currentNumbers[3].position;
                } else if (displayNr == 2) {
                    return memoryPositions[stepsArray[0].position - 1];
                } else if (displayNr == 3) {
                    return memoryPositions[0];
                } else if (displayNr == 4) {
                    return memoryPositions[stepsArray[0].position - 1];
                }
            } else if (stageNr == 3) {
                if (displayNr == 1) {
                    return currentNumbers[stepsArray[1].label - 1].position;
                } else if (displayNr == 2) {
                    return currentNumbers[stepsArray[0].label - 1].position;
                } else if (displayNr == 3) {
                    return memoryPositions[2];
                } else if (displayNr == 4) {
                    return currentNumbers[3].position;
                }
            } else if (stageNr == 4) {
                if (displayNr == 1) {
                    return memoryPositions[stepsArray[0].position - 1];
                } else if (displayNr == 2) {
                    return memoryPositions[0];
                } else if (displayNr == 3) {
                    return memoryPositions[stepsArray[1].position - 1];
                } else if (displayNr == 4) {
                    return memoryPositions[stepsArray[1].position - 1];
                }
            } else if (stageNr == 5) {
                if (displayNr == 1) {
                    return currentNumbers[stepsArray[0].label - 1].position;
                } else if (displayNr == 2) {
                    return currentNumbers[stepsArray[1].label - 1].position;
                } else if (displayNr == 3) {
                    return currentNumbers[stepsArray[3].label - 1].position;
                } else if (displayNr == 4) {
                    return currentNumbers[stepsArray[2].label - 1].position;
                }
            }
        }

        function correctClick() {
            // Add green light
            document.querySelector(`.svg_container${moduleCounter} .memory_strip_light_${stageNr}`).style.backgroundColor = "#15ff4e";

            // Remove eventlisteners
            for (let i = 0; i < memoryPositions.length; i++) {
                memoryPositions[i].removeEventListener("click", correctClick);
                memoryPositions[i].removeEventListener("click", wrongClick);
            }

            // If stage nr 5 - Go to module done function
            if (stageNr == 5) {
                // Done
                moduleDone();
            } else {
                // Add info to array
                let stepInfo = {
                    position: Number(this.classList[0].split("memory_position_").pop()),
                    label: Number(this.innerHTML)
                };

                stepsArray.push(stepInfo);

                // Stage nr. + 1
                stageNr++;

                // Get new numbers
                memoryDisplay.style.opacity = 0;
                memoryDisplay.style.transform = "scaleX(3.5) scaleY(0)";
                animateNumbers("out");
                setTimeout(() => {
                    addMemoryNumbers();
                }, 300);
            }
        }

        function wrongClick() {
            // Reset
            stageNr = 1;
            allDisplayNr = [];
            stepsArray = [];
            for (let i = 0; i < memoryStripLights.length; i++) {
                memoryStripLights[i].style.backgroundColor = "";
            }
            for (let i = 0; i < memoryPositions.length; i++) {
                memoryPositions[i].removeEventListener("click", correctClick);
                memoryPositions[i].removeEventListener("click", wrongClick);
            }

            // Get new numbers
            memoryDisplay.style.opacity = 0;
            memoryDisplay.style.transform = "scaleX(3.5) scaleY(0)";
            animateNumbers("out");
            setTimeout(() => {
                addMemoryNumbers();
            }, 300);

            // Red light
            let red_light = document.querySelector(
                `.svg_container${moduleCounter} .svg_subcontainer .red_light`
            );
            red_light.style.opacity = "1";
            setTimeout(function () {
                red_light.style.opacity = "0";
            }, 1000);

            // Shake
            let container = document.querySelector(`.svg_container${moduleCounter}`);
            container.classList.add("shake");
            setTimeout(function () {
                container.classList.remove("shake");
            }, 100);

            // Add strike
            strikeFunc();
        }

        function moduleDone() {
            // Style
            document.querySelector(
                `.svg_container${moduleCounter} .svg_subcontainer .green_light`
            ).style.opacity = "1";

            // Module Beaten
            moduleBeaten();
        }

    }
}

// ------- WHO'S ON FIRST MODULE --------
whosOnFirstModule = {
    func: function () {
        let moduleCounter = document.querySelectorAll(".module_container>div").length;

        let wofStepOneArray = [{
            value: "yes",
            look: 3
        },
        {
            value: "first",
            look: 2
        },
        {
            value: "display",
            look: 6
        },
        {
            value: "okay",
            look: 2
        },
        {
            value: "says",
            look: 6
        },
        {
            value: "nothing",
            look: 3
        },
        {
            value: "",
            look: 5
        },
        {
            value: "blank",
            look: 4
        },
        {
            value: "no",
            look: 6
        },
        {
            value: "led",
            look: 3
        },
        {
            value: "lead",
            look: 6
        },
        {
            value: "read",
            look: 5
        },
        {
            value: "red",
            look: 4
        },
        {
            value: "reed",
            look: 5
        },
        {
            value: "leed",
            look: 5
        },
        {
            value: "hold on",
            look: 6
        },
        {
            value: "you",
            look: 4
        },
        {
            value: "you are",
            look: 6
        },
        {
            value: "your",
            look: 4
        },
        {
            value: "you're",
            look: 4
        },
        {
            value: "ur",
            look: 1
        },
        {
            value: "there",
            look: 6
        },
        {
            value: "they're",
            look: 5
        },
        {
            value: "their",
            look: 4
        },
        {
            value: "they are",
            look: 3
        },
        {
            value: "see",
            look: 6
        },
        {
            value: "c",
            look: 2
        },
        {
            value: "cee",
            look: 6
        }
        ];

        let wofStepTwoArray = [{
            value: "yes",
            list: [
                "okay",
                "right",
                "uhhh",
                "middle",
                "first",
                "what",
                "press",
                "ready",
                "nothing",
                "yes",
                "left",
                "blank",
                "no",
                "wait"
            ]
        },
        {
            value: "first",
            list: [
                "left",
                "okay",
                "yes",
                "middle",
                "no",
                "right",
                "nothing",
                "uhhh",
                "wait",
                "ready",
                "blank",
                "what",
                "press",
                "first"
            ]
        },
        {
            value: "okay",
            list: [
                "middle",
                "no",
                "first",
                "yes",
                "uhhh",
                "nothing",
                "wait",
                "okay",
                "left",
                "ready",
                "blank",
                "press",
                "what",
                "right"
            ]
        },
        {
            value: "nothing",
            list: [
                "uhhh",
                "right",
                "okay",
                "middle",
                "yes",
                "blank",
                "no",
                "press",
                "left",
                "what",
                "wait",
                "first",
                "nothing",
                "ready"
            ]
        },
        {
            value: "blank",
            list: [
                "wait",
                "right",
                "okay",
                "middle",
                "blank",
                "press",
                "ready",
                "nothing",
                "no",
                "what",
                "left",
                "uhhh",
                "yes",
                "first"
            ]
        },
        {
            value: "no",
            list: [
                "blank",
                "uhhh",
                "wait",
                "first",
                "what",
                "ready",
                "right",
                "yes",
                "nothing",
                "left",
                "press",
                "okay",
                "no",
                "middle"
            ]
        },
        {
            value: "you",
            list: [
                "sure",
                "you are",
                "your",
                "you're",
                "next",
                "uh huh",
                "ur",
                "hold",
                "what?",
                "you",
                "uh uh",
                "like",
                "done",
                "u"
            ]
        },
        {
            value: "you are",
            list: [
                "your",
                "next",
                "like",
                "uh huh",
                "what?",
                "done",
                "uh uh",
                "hold",
                "you",
                "u",
                "you're",
                "sure",
                "ur",
                "you are"
            ]
        },
        {
            value: "your",
            list: [
                "uh uh",
                "you are",
                "uh huh",
                "your",
                "next",
                "ur",
                "sure",
                "u",
                "you're",
                "you",
                "what?",
                "hold",
                "like",
                "done"
            ]
        },
        {
            value: "you're",
            list: [
                "you",
                "you're",
                "ur",
                "next",
                "uh uh",
                "you are",
                "u",
                "your",
                "what?",
                "uh huh",
                "sure",
                "done",
                "like",
                "hold"
            ]
        },
        {
            value: "ur",
            list: [
                "done",
                "u",
                "ur",
                "uh huh",
                "what?",
                "sure",
                "your",
                "hold",
                "you're",
                "like",
                "next",
                "uh uh",
                "you are",
                "you"
            ]
        },
        {
            value: "ready",
            list: [
                "yes",
                "okay",
                "what",
                "middle",
                "left",
                "press",
                "right",
                "blank",
                "ready",
                "no",
                "first",
                "uhhh",
                "nothing",
                "wait"
            ]
        },
        {
            value: "what",
            list: [
                "uhhh",
                "what",
                "left",
                "nothing",
                "ready",
                "blank",
                "middle",
                "no",
                "okay",
                "first",
                "wait",
                "yes",
                "press",
                "right"
            ]
        },
        {
            value: "uhhh",
            list: [
                "ready",
                "nothing",
                "left",
                "what",
                "okay",
                "yes",
                "right",
                "no",
                "press",
                "blank",
                "uhhh",
                "middle",
                "wait",
                "first"
            ]
        },
        {
            value: "left",
            list: [
                "right",
                "left",
                "first",
                "no",
                "middle",
                "yes",
                "blank",
                "what",
                "uhhh",
                "wait",
                "press",
                "ready",
                "okay",
                "nothing"
            ]
        },
        {
            value: "right",
            list: [
                "yes",
                "nothing",
                "ready",
                "press",
                "no",
                "wait",
                "what",
                "right",
                "middle",
                "left",
                "uhhh",
                "blank",
                "okay",
                "first"
            ]
        },
        {
            value: "middle",
            list: [
                "blank",
                "ready",
                "okay",
                "what",
                "nothing",
                "press",
                "no",
                "wait",
                "left",
                "middle",
                "right",
                "first",
                "uhhh",
                "yes"
            ]
        },
        {
            value: "wait",
            list: [
                "uhhh",
                "no",
                "blank",
                "okay",
                "yes",
                "left",
                "first",
                "press",
                "what",
                "wait",
                "nothing",
                "ready",
                "right",
                "middle"
            ]
        },
        {
            value: "press",
            list: [
                "right",
                "middle",
                "yes",
                "ready",
                "press",
                "okay",
                "nothing",
                "uhhh",
                "blank",
                "left",
                "first",
                "what",
                "no",
                "wait"
            ]
        },
        {
            value: "u",
            list: [
                "uh huh",
                "sure",
                "next",
                "what?",
                "you're",
                "ur",
                "uh uh",
                "done",
                "u",
                "you",
                "like",
                "hold",
                "you are",
                "your"
            ]
        },
        {
            value: "uh huh",
            list: [
                "uh huh",
                "your",
                "you are",
                "you",
                "done",
                "hold",
                "uh uh",
                "next",
                "sure",
                "like",
                "you're",
                "ur",
                "u",
                "what?"
            ]
        },
        {
            value: "uh uh",
            list: [
                "ur",
                "u",
                "you are",
                "you're",
                "next",
                "uh uh",
                "done",
                "you",
                "uh huh",
                "like",
                "your",
                "sure",
                "hold",
                "what?"
            ]
        },
        {
            value: "what?",
            list: [
                "you",
                "hold",
                "you're",
                "your",
                "u",
                "done",
                "uh uh",
                "like",
                "you are",
                "uh huh",
                "ur",
                "next",
                "what?",
                "sure"
            ]
        },
        {
            value: "done",
            list: [
                "sure",
                "uh huh",
                "next",
                "what?",
                "your",
                "ur",
                "you're",
                "hold",
                "like",
                "you",
                "u",
                "you are",
                "uh uh",
                "done"
            ]
        },
        {
            value: "next",
            list: [
                "what?",
                "uh huh",
                "uh uh",
                "your",
                "hold",
                "sure",
                "next",
                "like",
                "done",
                "you are",
                "ur",
                "you're",
                "u",
                "you"
            ]
        },
        {
            value: "hold",
            list: [
                "you are",
                "u",
                "done",
                "uh uh",
                "you",
                "ur",
                "sure",
                "what?",
                "you're",
                "next",
                "hold",
                "uh huh",
                "your",
                "like"
            ]
        },
        {
            value: "sure",
            list: [
                "you are",
                "done",
                "like",
                "you're",
                "you",
                "hold",
                "uh huh",
                "ur",
                "sure",
                "u",
                "what?",
                "next",
                "your",
                "uh uh"
            ]
        },
        {
            value: "like",
            list: [
                "you're",
                "next",
                "u",
                "ur",
                "hold",
                "done",
                "uh uh",
                "what?",
                "uh huh",
                "you",
                "like",
                "sure",
                "you are",
                "your"
            ]
        }
        ];

        // Create module
        let newDiv = document.createElement("div");
        newDiv.classList.add(`svg_container`);
        newDiv.classList.add(`svg_container${moduleCounter}`);
        newDiv.innerHTML = `<div class="svg_subcontainer">${backgroundSvg}</div><div class="wof_container"><div class="wof_display"></div><div class="wof_text"></div><div class="wof_text"></div><div class="wof_text"></div><div class="wof_text"></div><div class="wof_text"></div><div class="wof_text"></div><div class="wof_strip"></div><div class="wof_strip_light_1"></div><div class="wof_strip_light_2"></div><div class="wof_strip_light_3"></div></div>`;

        // Add to DOM
        if (moduleCounter < 6) {
            document.querySelector("#front_module_container").appendChild(newDiv);
        } else if (moduleCounter < 12) {
            document.querySelector("#back_module_container").appendChild(newDiv);
        }

        // Variables
        let wof_display = document.querySelector(
            `.svg_container${moduleCounter} .wof_display`
        );
        let wof_texts = document.querySelectorAll(
            `.svg_container${moduleCounter} .wof_text`
        );

        let currentDisplay;
        let currentButtons;
        let amountCorrect = 0;

        addTexts();

        function addTexts() {
            // Add Display
            let partOne =
                wofStepOneArray[Math.floor(Math.random() * wofStepOneArray.length)];
            wof_display.style.transition = "color 0.2s";
            wof_display.style.color = "#000000";
            setTimeout(() => {
                wof_display.style.color = "#FFFFFF";
                wof_display.innerHTML = partOne.value;
                currentDisplay = partOne;
            }, 300);

            // Add Button Text
            let partTwoCopy = wofStepTwoArray.slice();
            let newTextArray = [];

            for (let i = 0; i < 6; i++) {
                let randomNr = Math.floor(Math.random() * partTwoCopy.length);
                newTextArray.push(partTwoCopy[randomNr]);
                partTwoCopy.splice(randomNr, 1);
                shiftAnimation(wof_texts[i], newTextArray[i].value);
            }

            currentButtons = newTextArray;

            // Add eventlisteners
            setTimeout(() => {
                addEventListeners();
            }, 300);
        }

        function shiftAnimation(parm, parm2) {
            parm.style.transform = "scaleY(0)";
            setTimeout(() => {
                parm.style.transform = "scaleY(1)";
                parm.innerHTML = parm2;
            }, 300);
        }

        function addEventListeners() {
            // Find button to look at
            lookingAtButton = wof_texts[currentDisplay.look - 1];
            //console.log("look at", lookingAtButton);

            // Find List from "Look-button"
            let found;
            wofStepTwoArray.some(function (e) {
                if (e.value == lookingAtButton.innerHTML) {
                    found = e;
                    return true;
                }
            });

            // Add eventlisteners
            for (let i = 0; i < wof_texts.length; i++) {
                if (wof_texts[i].innerHTML == checkForMatch(found)) {
                    //console.log("click on", wof_texts[i]);
                    wof_texts[i].addEventListener("click", correctClick);
                } else {
                    wof_texts[i].addEventListener("click", wrongClick);
                }
            }
        }

        function checkForMatch(parm) {
            for (let i = 0; i < parm.list.length; i++) {
                for (let j = 0; j < currentButtons.length; j++) {
                    if (parm.list[i] == currentButtons[j].value) {
                        return parm.list[i];
                    }
                }
            }
        }

        function correctClick() {
            console.log("YAS");

            // Reset
            for (let i = 0; i < wof_texts.length; i++) {
                wof_texts[i].removeEventListener("click", correctClick);
                wof_texts[i].removeEventListener("click", wrongClick);
            }

            amountCorrect++;
            document.querySelector(
                `.svg_container${moduleCounter} .wof_strip_light_${amountCorrect}`
            ).style.backgroundColor = "#15ff4e";

            if (amountCorrect == 3) {
                moduleDone();
            } else {
                addTexts();
            }
        }

        function wrongClick() {
            console.log("NAS");
            // Reset
            for (let i = 0; i < 3; i++) {
                document.querySelector(
                    `.svg_container${moduleCounter} .wof_strip_light_${i + 1}`
                ).style.backgroundColor = "#CCCCCC";
            }
            for (let i = 0; i < wof_texts.length; i++) {
                wof_texts[i].removeEventListener("click", correctClick);
                wof_texts[i].removeEventListener("click", wrongClick);
            }
            amountCorrect = 0;

            addTexts();

            // Red light
            let red_light = document.querySelector(
                `.svg_container${moduleCounter} .svg_subcontainer .red_light`
            );
            red_light.style.opacity = "1";
            setTimeout(function () {
                red_light.style.opacity = "0";
            }, 1000);

            // Shake
            let container = document.querySelector(`.svg_container${moduleCounter}`);
            container.classList.add("shake");
            setTimeout(function () {
                container.classList.remove("shake");
            }, 100);

            // Add strike
            strikeFunc();
        }

        function moduleDone() {
            // Style
            for (let i = 0; i < 6; i++) {
                wof_texts[i].style.cursor = "default";
            }
            document.querySelector(
                `.svg_container${moduleCounter} .svg_subcontainer .green_light`
            ).style.opacity = "1";

            // Module Beaten
            moduleBeaten();
        }

    }
}

// ------- WIRE MODULE --------
wireModule = {
    func: function () {
        let moduleCounter = document.querySelectorAll(".module_container>div").length;

        // Create module
        let newDiv = document.createElement("div");
        newDiv.classList.add(`svg_container`);
        newDiv.classList.add(`svg_container${moduleCounter}`);
        newDiv.innerHTML = `<div class="svg_subcontainer">${wireModuleSvg}</div>`;

        // Add to DOM

        if (moduleCounter < 6) {
            document.querySelector("#front_module_container").appendChild(newDiv);
        } else if (moduleCounter < 12) {
            document.querySelector("#back_module_container").appendChild(newDiv);
        }

        // --- VARIABLES ---
        let scene = document.querySelector(
            `.svg_container${moduleCounter} .wire_module`
        );
        var wireArray = [].slice.call(
            document.querySelectorAll(`.svg_container${moduleCounter} .wires path`)
        );
        var shadowArray = [].slice.call(
            document.querySelectorAll(`.svg_container${moduleCounter}  .wire-shadow g`)
        );
        let red_light = document.querySelector(
            `.svg_container${moduleCounter}  .red_light`
        );
        let green_light = document.querySelector(
            `.svg_container${moduleCounter} .green_light`
        );
        let wireAmount;
        let colorArray = [{
            color: "yellow",
            amount: 0
        },
        {
            color: "red",
            amount: 0
        },
        {
            color: "black",
            amount: 0
        },
        {
            color: "white",
            amount: 0
        },
        {
            color: "blue",
            amount: 0
        }
        ];

        startGame();

        // --- Initiate wire game ---
        function startGame() {
            chooseWires();
            checkColors();
            ifFunc();
            onHover();
            wrongEvent();
        }

        // Turn on green light
        function cutRightWire() {
            moduleBeaten();
            green_light.style.opacity = "1";
        }

        // Remove old and add new Event Listeners
        function wrongEvent() {
            wireArray.forEach(element => {
                element.addEventListener("click", isItWrong);
            });
        }

        // Actions for Correct and Wrong wire-cuts (Fires after every wire-cut)
        function isItWrong() {
            cutAnyWire(this);

            if (green_light.style.opacity == "1") {
                // RIGHT

                // resetFunc();
                wireArray.forEach(element => {
                    element.removeEventListener("click", isItWrong);
                    element.removeEventListener("click", cutRightWire);
                });

                document.querySelector(
                    `.svg_container${moduleCounter} .wire-shadow`
                ).style.display = "none";
            } else {
                // WRONG
                strikeFunc();

                red_light.style.opacity = "1";
                setTimeout(function () {
                    red_light.style.opacity = "0";
                }, 1000);

                scene.classList.add("shake");
                setTimeout(function () {
                    scene.classList.remove("shake");
                }, 100);
            }
        }

        function cutAnyWire(parm) {
            // remove shadow
            let clickedWire = parm;
            let wireNr = 0;
            while (clickedWire.previousSibling != null) {
                clickedWire = clickedWire.previousSibling;
                wireNr++;
            }
            shadowArray[Math.ceil(wireNr / 2) - 1].style.visibility = "hidden";

            parm.style.strokeDasharray = "22%";
            parm.removeEventListener("click", isItWrong);
        }

        function onHover() {
            for (let i = 0; i < wireArray.length; i++) {
                wireArray[i].addEventListener("mouseover", function () {
                    shadowArray[i].style.display = "block";
                });
                wireArray[i].addEventListener("mouseleave", function () {
                    shadowArray[i].style.display = "none";
                });
            }
        }

        // --- CREATE THE SCENE ---
        function chooseWires() {
            wireAmount = Math.floor(Math.random() * 4) + 3;
            // Display wires + choose wire color
            for (let i = 0; i < wireAmount; i++) {
                wireArray[i].style.display = "block";
                wireArray[i].style.stroke =
                    colorArray[Math.floor(Math.random() * colorArray.length)].color;

                // add class with color-name
                for (let ii = 0; ii < colorArray.length; ii++) {
                    if (wireArray[i].style.stroke == colorArray[ii].color) {
                        wireArray[i].classList.add(colorArray[ii].color);
                    }
                }
            }
        }

        // Make list of number amounts and return to array
        function checkColors() {
            for (let i = 0; i < wireAmount; i++) {
                for (let ii = 0; ii < colorArray.length; ii++) {
                    if (wireArray[i].style.stroke == colorArray[ii].color) {
                        colorArray[ii].amount = colorArray[ii].amount + 1;
                    }
                }
            }
        }

        // --- IF STATEMENTS ---

        function ifFunc() {
            if (wireAmount == 3) {
                wiresThree();
            } else if (wireAmount == 4) {
                wiresFour();
            } else if (wireAmount == 5) {
                wiresFive();
            } else {
                wiresSix();
            }
        }

        // 3 Wires
        function wiresThree() {
            if (colorArray[1].amount == 0) {
                // If there are no red wires, cut the second wire.
                wireArray[1].addEventListener("click", cutRightWire);
            } else if (wireArray[2].style.stroke == colorArray[3].color) {
                // Otherwise, if the last wire is white, cut the last wire.
                wireArray[2].addEventListener("click", cutRightWire);
            } else if (colorArray[4].amount > 1) {
                // Otherwise, if there is more than one blue wire, cut the last blue wire.
                let blueWires = document.querySelectorAll(".blue");
                blueWires[blueWires.length - 1].addEventListener("click", cutRightWire);
            } else {
                // Otherwise, cut the last wire.
                wireArray[2].addEventListener("click", cutRightWire);
            }
        }

        // 4 Wires
        function wiresFour() {
            // If there is more than one red wire and the last digit of the serial number is odd, cut the last red wire.
            let lastCharacter = serialNumber.slice(-1);

            if (colorArray[1].amount > 1 && oddNumb.includes(lastCharacter)) {
                let redWires = document.querySelectorAll(".red");
                redWires[redWires.length - 1].addEventListener("click", cutRightWire);
            } else if (
                wireArray[3].style.stroke == colorArray[0].color &&
                colorArray[1].amount == 0
            ) {
                // Otherwise, if the last wire is yellow and there are no red wires, cut the first wire.
                wireArray[0].addEventListener("click", cutRightWire);
            } else if (colorArray[4].amount == 1) {
                // Otherwise, if there is exactly one blue wire, cut the first wire.
                wireArray[0].addEventListener("click", cutRightWire);
            } else if (colorArray[0].amount > 1) {
                // Otherwise, if there is more than one yellow wire, cut the last wire.
                wireArray[3].addEventListener("click", cutRightWire);
            } else {
                // Otherwise, cut the second wire.
                wireArray[1].addEventListener("click", cutRightWire);
            }
        }

        // 5 Wires
        function wiresFive() {
            // If the last wire is black and the last digit of the serial number is odd, cut the fourth wire.
            let lastCharacter = serialNumber.slice(-1);
            if (
                wireArray[4].style.stroke == colorArray[2].color &&
                oddNumb.includes(lastCharacter)
            ) {
                wireArray[3].addEventListener("click", cutRightWire);
            } else if (colorArray[1].amount == 1 && colorArray[0].amount > 1) {
                // Otherwise, if there is exactly one red wire and there is more than one yellow wire, cut the first wire.
                wireArray[0].addEventListener("click", cutRightWire);
            } else if (colorArray[2].amount == 0) {
                // Otherwise, if there are no black wires, cut the second wire.
                wireArray[1].addEventListener("click", cutRightWire);
            } else {
                // Otherwise, cut the first wire.
                wireArray[0].addEventListener("click", cutRightWire);
            }
        }

        // 6 Wires
        function wiresSix() {
            // If there are no yellow wires and the last digit of the serial number is odd, cut the third wire.
            let lastCharacter = serialNumber.slice(-1);
            if (colorArray[0].amount == 0 && oddNumb.includes(lastCharacter)) {
                wireArray[2].addEventListener("click", cutRightWire);
            } else if (colorArray[0].amount == 1 && colorArray[3].amount > 1) {
                // Otherwise, if there is exactly one yellow wire and there is more than one white wire, cut the fourth wire.
                wireArray[3].addEventListener("click", cutRightWire);
            } else if (colorArray[1].amount == 0) {
                // Otherwise, if there are no red wires, cut the last wire.
                wireArray[5].addEventListener("click", cutRightWire);
            } else {
                // Otherwise, cut the fourth wire.
                wireArray[3].addEventListener("click", cutRightWire);
            }
        }

    }
}

// ------- BUTTON MODULE --------
buttonModule = {
    func: function () {
        let moduleCounter = document.querySelectorAll(".module_container>div").length;

        // Create module
        let newDiv = document.createElement("div");
        newDiv.classList.add(`svg_container`);
        newDiv.classList.add(`svg_container${moduleCounter}`);
        newDiv.innerHTML = `<div class="svg_subcontainer">${theButtonSvg}</div><div class="module_button_label">Detonate</div>`;

        // Add to DOM
        if (moduleCounter < 6) {
            document.querySelector("#front_module_container").appendChild(newDiv);
        } else if (moduleCounter < 12) {
            document.querySelector("#back_module_container").appendChild(newDiv);
        }

        // Variables
        let container = document.querySelector(
            `.svg_container${moduleCounter} .svg_subcontainer`
        );
        let button = document.querySelector(
            `.svg_container${moduleCounter} .svg_subcontainer .button`
        );
        let strip = document.querySelector(
            `.svg_container${moduleCounter} .svg_subcontainer .strip_color`
        );
        let button_text = document.querySelector(
            `.svg_container${moduleCounter} .module_button_label`
        );
        let green_light = document.querySelector(
            `.svg_container${moduleCounter} .svg_subcontainer .green_light`
        );
        let red_light = document.querySelector(
            `.svg_container${moduleCounter} .svg_subcontainer .red_light`
        );

        let buttonColorArray = [{
            name: "white",
            bg: "rgb(255, 255, 255)",
            text: "rgb(0, 0, 0)"
        },
        {
            name: "blue",
            bg: "rgb(0, 0, 255)",
            text: "rgb(255, 255, 255)"
        },
        {
            name: "red",
            bg: "rgb(255, 0, 0)",
            text: "rgb(255, 255, 255)"
        },
        {
            name: "yellow",
            bg: "rgb(255, 255, 0)",
            text: "rgb(0, 0, 0)"
        }
        ];

        let buttonTextArray = ["abort", "detonate", "hold", "press"];

        let stripColorArray = [{
            name: "white",
            color: "rgb(255, 255, 255)"
        },
        {
            name: "blue",
            color: "rgb(0, 0, 255)"
        },
        {
            name: "red",
            color: "rgb(255, 0, 0)"
        },
        {
            name: "yellow",
            color: "rgb(255, 255, 0)"
        },
        {
            name: "green",
            color: "rgb(0, 255, 0)"
        }
        ];

        let solutionVar;

        startGame();

        button.addEventListener("mouseenter", buttonHover);
        button.addEventListener("mouseleave", buttonUnhover);
        button.addEventListener("mousedown", buttonDown);
        button.addEventListener("mouseup", buttonUp);

        // --- Initiate wire game ---
        function startGame() {
            createButton();
            findSolution();
        }

        function createButton() {
            let chosenButton =
                buttonColorArray[Math.floor(Math.random() * buttonColorArray.length)];
            button.style.fill = chosenButton.bg;
            button_text.innerHTML =
                buttonTextArray[Math.floor(Math.random() * buttonTextArray.length)];
            button_text.style.color = chosenButton.text;
        }

        function findSolution() {
            if (
                button.style.fill == buttonColorArray[1].bg &&
                button_text.innerHTML == "abort"
            ) {
                // 1 - Blue Abort
                solutionVar = "hold";
            } else if (batteryAmount > 1 && button_text.innerHTML == "detonate") {
                // 2 - 1<Batteries Detonate
                solutionVar = "click";
            } else if (
                button.style.fill == buttonColorArray[0].bg &&
                litIndicatorArray.includes("CAR")
            ) {
                // 3 - White Lit-CAR
                solutionVar = "hold";
            } else if (batteryAmount > 2 && litIndicatorArray.includes("FRK")) {
                // 4 - 2<Batteries Lit-FRK
                solutionVar = "click";
            } else if (button.style.fill == buttonColorArray[3].bg) {
                // 5 - Yellow
                solutionVar = "hold";
            } else if (
                button.style.fill == buttonColorArray[2].bg &&
                button_text.innerHTML == "hold"
            ) {
                // 6 - Red Hold
                solutionVar = "click";
            } else {
                // 7 - Other
                solutionVar = "hold";
            }
        }

        function buttonHover() {
            this.parentNode.children[2].style.fill = "rgb(255, 0, 0)";
        }

        function buttonUnhover() {
            this.parentNode.children[2].style.fill = "rgb(0, 0, 0, 0)";
        }

        let isMouseDown = false;

        function buttonDown() {
            isMouseDown = true;
            //console.log("Down =", isMouseDown);
            this.parentNode.parentNode.parentNode.parentNode.children[1].style.transform =
                "scale(0.9)";

            setTimeout(() => {
                if (isMouseDown == 0) {
                    buttonClick(this);
                } else {
                    buttonHold(this);
                }
            }, 50);
        }

        function buttonUp() {
            isMouseDown = false;
            console.log("Up =", isMouseDown);
            this.parentNode.parentNode.parentNode.parentNode.children[1].style.transform =
                "scale(1)";
        }

        function buttonClick() {
            button.parentNode.parentNode.parentNode.parentNode.children[1].style.transform =
                "scale(0.9)";
            setTimeout(() => {
                button.parentNode.parentNode.parentNode.parentNode.children[1].style.transform =
                    "scale(1)";
            }, 100);
            if (solutionVar == "click") {
                console.log("DONE!");
                moduleDone();
            } else {
                moduleMistake();
            }
        }

        function buttonHold() {
            if (solutionVar == "hold") {
                console.log("Release a Held Button");
                releasingAHeldButton();
            } else {
                moduleMistake();
            }
        }

        function releasingAHeldButton() {
            let releaseTimerNr;

            button.removeEventListener("mouseup", buttonDown);
            let stripColor =
                stripColorArray[Math.floor(Math.random() * stripColorArray.length)];
            strip.style.animationName = `strip_color_${stripColor.name}`;

            if (stripColor.name == "blue") {
                releaseTimerNr = 4;
            } else if (stripColor.name == "yellow") {
                releaseTimerNr = 5;
            } else {
                releaseTimerNr = 1;
            }

            button.addEventListener("mouseup", checkColorAndTime);

            function checkColorAndTime() {
                button.removeEventListener("mouseup", checkColorAndTime);
                if (timer.innerHTML.includes(releaseTimerNr)) {
                    console.log("DONE!");
                    moduleDone();
                } else {
                    moduleMistake();
                }
            }
        }

        function moduleMistake() {
            // Reset
            strip.style.animationName = "";
            isMouseDown = false;

            // Red light
            red_light.style.opacity = "1";
            setTimeout(function () {
                red_light.style.opacity = "0";
            }, 1000);

            // Shake
            container.classList.add("shake");
            setTimeout(function () {
                container.classList.remove("shake");
            }, 100);

            // Add strike
            strikeFunc();
        }

        function moduleDone() {
            // Remove Hover
            button.removeEventListener("mouseenter", buttonHover);
            button.removeEventListener("mouseleave", buttonUnhover);
            // Remove clickable
            button.removeEventListener("mousedown", buttonDown);
            button.removeEventListener("mouseup", buttonUp);
            // Style
            button.parentNode.children[2].style.fill = "rgb(0, 0, 0, 0)";
            strip.style.animationName = "";
            button.style.cursor = "default";
            green_light.style.opacity = "1";

            // Module Beaten
            moduleBeaten();
        }
    }

}

// ------- KEYPADS MODULE --------
keypadsModule = {
    func: function () {
        // Variables
        let moduleCounter = document.querySelectorAll(".module_container>div").length;
        let keyPadArray = [{
            column: [{
                name: "28-balloon",
                order: 1
            },
            {
                name: "13-at",
                order: 2
            },
            {
                name: "30-upsidedowny",
                order: 3
            },
            {
                name: "12-squigglyn",
                order: 4
            },
            {
                name: "7-squidknife",
                order: 5
            },
            {
                name: "9-hookn",
                order: 6
            },
            {
                name: "23-leftc",
                order: 7
            }
            ]
        },
        {
            column: [{
                name: "16-euro",
                order: 1
            },
            {
                name: "28-balloon",
                order: 2
            },
            {
                name: "23-leftc",
                order: 3
            },
            {
                name: "26-cursive",
                order: 4
            },
            {
                name: "3-hollowstar",
                order: 5
            },
            {
                name: "9-hookn",
                order: 6
            },
            {
                name: "20-questionmark",
                order: 7
            }
            ]
        },
        {
            column: [{
                name: "1-copyright",
                order: 1
            },
            {
                name: "8-pumpkin",
                order: 2
            },
            {
                name: "26-cursive",
                order: 3
            },
            {
                name: "5-doublek",
                order: 4
            },
            {
                name: "15-meltedthree",
                order: 5
            },
            {
                name: "30-upsidedowny",
                order: 6
            },
            {
                name: "3-hollowstar",
                order: 7
            }
            ]
        },
        {
            column: [{
                name: "11-six",
                order: 1
            },
            {
                name: "21-paragraph",
                order: 2
            },
            {
                name: "31-bt",
                order: 3
            },
            {
                name: "7-squidknife",
                order: 4
            },
            {
                name: "5-doublek",
                order: 5
            },
            {
                name: "20-questionmark",
                order: 6
            },
            {
                name: "4-smileyface",
                order: 7
            }
            ]
        },
        {
            column: [{
                name: "24-pitchfork",
                order: 1
            },
            {
                name: "4-smileyface",
                order: 2
            },
            {
                name: "31-bt",
                order: 3
            },
            {
                name: "22-rightc",
                order: 4
            },
            {
                name: "21-paragraph",
                order: 5
            },
            {
                name: "19-dragon",
                order: 6
            },
            {
                name: "2-filledstar",
                order: 7
            }
            ]
        },
        {
            column: [{
                name: "11-six",
                order: 1
            },
            {
                name: "16-euro",
                order: 2
            },
            {
                name: "27-tracks",
                order: 3
            },
            {
                name: "14-ae",
                order: 4
            },
            {
                name: "24-pitchfork",
                order: 5
            },
            {
                name: "18-nwithhat",
                order: 6
            },
            {
                name: "6-omega",
                order: 7
            }
            ]
        }
        ];
        let selectedColumnArray;
        let selectedSymbolsArray = [];
        let sortedSymbolArray;

        startGame();

        // --- Initiate wire game ---
        function startGame() {
            createKeypad();
            sortKeypads();
            addEventListener();
        }

        function createKeypad() {
            // Select a column
            selectedColumnArray =
                keyPadArray[Math.floor(Math.random() * keyPadArray.length)].column;

            // Select 4x symbols
            for (let i = 0; i < 4; i++) {
                let randomNr = Math.floor(Math.random() * selectedColumnArray.length);
                selectedSymbolsArray.push(selectedColumnArray[randomNr]);
                selectedColumnArray.splice(randomNr, 1);
            }

            // Add to DOM
            let newDiv = document.createElement("div");
            newDiv.classList.add(`svg_container`);
            newDiv.classList.add(`svg_container${moduleCounter}`);
            newDiv.innerHTML = `<div class="svg_subcontainer">${backgroundSvg}</div><div class="keypad_container"></div>`;

            if (moduleCounter < 6) {
                document.querySelector("#front_module_container").appendChild(newDiv);

            } else if (moduleCounter < 12) {
                document.querySelector("#back_module_container").appendChild(newDiv);
            }

            for (let i = 0; i < 4; i++) {
                let newKey = document.createElement("div");
                newKey.classList.add(`keypad_key`);
                newKey.innerHTML = `<div class="keypad_light"></div><img class="keypad_label" src="media/module_keypads/${selectedSymbolsArray[i].name}.png" alt="">`;
                document.querySelector(`.svg_container${moduleCounter} .keypad_container`).appendChild(newKey);
                selectedSymbolsArray[i].dom = newKey;
            }
        }

        // Sort keypad array
        function sortKeypads() {
            sortedSymbolArray = selectedSymbolsArray.slice(0);
            sortedSymbolArray.sort(function (a, b) {
                if (a.order > b.order) {
                    return 1;
                }
                if (b.order > a.order) {
                    return -1;
                }
                return 0;
            });
        }

        // Add eventlisters
        function addEventListener() {
            //console.log(sortedSymbolArray);
            for (let i = 0; i < sortedSymbolArray.length; i++) {
                if (i == 0) {
                    sortedSymbolArray[0].dom.addEventListener("click", correctClick);
                } else {
                    sortedSymbolArray[i].dom.addEventListener("click", moduleMistake);
                }
            }
        }

        // Run if correct key is clicked
        function correctClick() {
            // Remove eventlisteners
            for (let i = 0; i < sortedSymbolArray.length; i++) {
                sortedSymbolArray[i].dom.removeEventListener("click", correctClick);
                sortedSymbolArray[i].dom.removeEventListener("click", moduleMistake);
            }
            // Add green strip
            this.children[0].style.backgroundColor = "#00ff00";
            // call eventlistener or finish module
            if (sortedSymbolArray.length > 1) {
                sortedSymbolArray.shift();
                addEventListener();
            } else {
                moduleDone();
            }
        }

        // Run if wrong key is clicked
        function moduleMistake() {
            // Red light
            let red_light = document.querySelector(
                `.svg_container${moduleCounter} .svg_subcontainer .red_light`
            );
            red_light.style.opacity = "1";
            setTimeout(function () {
                red_light.style.opacity = "0";
            }, 1000);

            // Shake
            let container = document.querySelector(`.svg_container${moduleCounter}`);
            container.classList.add("shake");
            setTimeout(function () {
                container.classList.remove("shake");
            }, 100);

            // Add strike
            strikeFunc();
        }

        // Module done
        function moduleDone() {
            // Style
            document.querySelector(".keypad_container").style.cursor = "default";
            document.querySelector(
                `.svg_container${moduleCounter} .svg_subcontainer .green_light`
            ).style.opacity = "1";

            // Module Beaten
            moduleBeaten();
        }

    }
}

// ------- SIMON SAYS MODULE --------
simonSaysModule = {
    func: function () {
        let moduleCounter = document.querySelectorAll(".module_container>div").length;

        // Create module
        let newDiv = document.createElement("div");
        newDiv.classList.add(`svg_container`);
        newDiv.classList.add(`svg_container${moduleCounter}`);
        newDiv.innerHTML = `<div class="svg_subcontainer">${backgroundSvg}</div><div class="simon_container"><div class="blue"></div><div class="yellow"></div><div class="red"></div><div class="green"></div></div><div class="replay"></div>`;

        // Add to DOM
        if (moduleCounter < 6) {
            document.querySelector("#front_module_container").appendChild(newDiv);
        } else if (moduleCounter < 12) {
            document.querySelector("#back_module_container").appendChild(newDiv);
        }

        // Variables
        let colorArray = document.querySelectorAll(
            `.svg_container${moduleCounter} .simon_container > div`
        );
        let replay = document.querySelector(`.svg_container${moduleCounter} .replay`);
        let flashingAmount = 1;
        let clickedAmount = 0;
        let flashedColorsArray = [];
        let clickedColorsArray = [];

        // Eventlisteners
        for (let i = 0; i < colorArray.length; i++) {
            colorArray[i].addEventListener("click", flashOnClick);
        }
        replay.addEventListener("click", replayButton);

        // Replay sequence
        function replayButton() {
            clickedColorsArray = [];
            clickedAmount = 0;
            replay.style.transform = "scale(0.9)";
            setTimeout(() => {
                replay.style.transform = "scale(1)";
            }, 100);
            flashing();
        }

        // Flash on click
        function flashOnClick() {
            this.style.opacity = 1;
            setTimeout(() => {
                this.style.opacity = 0.3;
            }, 400);
        }

        // Start function
        flashColors();

        function flashColors() {
            flashedColorsArray.push(
                colorArray[Math.floor(Math.random() * colorArray.length)].classList.value
            );

            // Flash
            setTimeout(() => {
                flashing();
            }, 500);

            for (let i = 0; i < colorArray.length; i++) {
                colorArray[i].addEventListener("click", clickColors);
            }
        }

        // Flash sequence
        function flashing() {
            let i = 0;

            function loop() {
                //console.log("loop");
                setTimeout(function () {
                    document.querySelector(
                        `.svg_container${moduleCounter} .simon_container .${flashedColorsArray[i]}`
                    ).style.opacity = "1";
                    setTimeout(() => {
                        document.querySelector(
                            `.svg_container${moduleCounter} .simon_container .${flashedColorsArray[i]}`
                        ).style.opacity = "0.3";
                        i++;
                        if (i < flashedColorsArray.length) {
                            loop();
                        }
                    }, 500);
                }, 800);
            }
            loop();
        }

        // Run function on click
        function clickColors() {
            if (flashingAmount > clickedAmount) {
                clickedColorsArray.push(this.classList.value);
                console.log(
                    findClickColor(flashedColorsArray[clickedAmount]),
                    clickedColorsArray[clickedAmount]
                );
                if (
                    findClickColor(flashedColorsArray[clickedAmount]) ==
                    clickedColorsArray[clickedAmount]
                ) {
                    clickedAmount++;
                    if (
                        flashedColorsArray.length == flashedColorsArray.length &&
                        flashingAmount == clickedAmount
                    ) {
                        if (flashingAmount < 5) {
                            flashingAmount++;
                            clickedAmount = 0;
                            clickedColorsArray = [];
                            for (let i = 0; i < colorArray.length; i++) {
                                colorArray[i].removeEventListener("click", clickColors);
                            }
                            flashColors();
                        } else {
                            moduleDone();
                        }
                    }
                } else {
                    moduleMistake();
                }
            }
        }

        // Return correct color
        function findClickColor(colorParm) {
            if (vowelTest(serialNumber)) {
                // console.log("YAS")
                if (strikeAmount == 0) {
                    if (colorParm == "red") {
                        return "blue";
                    } else if (colorParm == "blue") {
                        return "red";
                    } else if (colorParm == "green") {
                        return "yellow";
                    } else if (colorParm == "yellow") {
                        return "green";
                    }
                } else if (strikeAmount == 1) {
                    if (colorParm == "red") {
                        return "yellow";
                    } else if (colorParm == "blue") {
                        return "green";
                    } else if (colorParm == "green") {
                        return "blue";
                    } else if (colorParm == "yellow") {
                        return "red";
                    }
                } else {
                    if (colorParm == "red") {
                        return "green";
                    } else if (colorParm == "blue") {
                        return "red";
                    } else if (colorParm == "green") {
                        return "yellow";
                    } else if (colorParm == "yellow") {
                        return "blue";
                    }
                }
            } else {
                // console.log("NAS")
                if (strikeAmount == 0) {
                    if (colorParm == "red") {
                        return "blue";
                    } else if (colorParm == "blue") {
                        return "yellow";
                    } else if (colorParm == "green") {
                        return "green";
                    } else if (colorParm == "yellow") {
                        return "red";
                    }
                } else if (strikeAmount == 1) {
                    if (colorParm == "red") {
                        return "red";
                    } else if (colorParm == "blue") {
                        return "blue";
                    } else if (colorParm == "green") {
                        return "yellow";
                    } else if (colorParm == "yellow") {
                        return "green";
                    }
                } else {
                    if (colorParm == "red") {
                        return "yellow";
                    } else if (colorParm == "blue") {
                        return "green";
                    } else if (colorParm == "green") {
                        return "blue";
                    } else if (colorParm == "yellow") {
                        return "red";
                    }
                }
            }
        }

        // Check for vowel
        function vowelTest(parm) {
            let parmSplit = parm.split("");
            for (let i = 0; i < parmSplit.length; i++) {
                if (/^[aeiou]$/i.test(parmSplit[i])) {
                    return true;
                }
            }
        }

        // Mistake
        function moduleMistake() {
            // Reset
            clickedAmount = 0;
            clickedColorsArray = [];
            flashing();

            // Red light
            let red_light = document.querySelector(
                `.svg_container${moduleCounter} .svg_subcontainer .red_light`
            );
            red_light.style.opacity = "1";
            setTimeout(function () {
                red_light.style.opacity = "0";
            }, 1000);

            // Shake
            let container = document.querySelector(`.svg_container${moduleCounter}`);
            container.classList.add("shake");
            setTimeout(function () {
                container.classList.remove("shake");
            }, 100);

            // Add strike
            strikeFunc();
        }

        // Module Done
        function moduleDone() {
            // Remove eventlisternes and hovers
            for (let i = 0; i < colorArray.length; i++) {
                colorArray[i].removeEventListener("click", flashOnClick);
                colorArray[i].removeEventListener("click", clickColors);
                colorArray[i].style.cursor = "default";
            }
            replay.removeEventListener("click", replayButton);
            replay.style.cursor = "default";

            // Style
            document.querySelector(
                `.svg_container${moduleCounter} .svg_subcontainer .green_light`
            ).style.opacity = "1";

            // Module Beaten
            moduleBeaten();
        }

    }
}

// ------- PASSWORD MODULE --------
passwordModule = {
    func: function () {
        let moduleCounter = document.querySelectorAll(".module_container>div").length;

        // Create module
        let newDiv = document.createElement("div");
        newDiv.classList.add(`svg_container`);
        newDiv.classList.add(`svg_container${moduleCounter}`);
        //newDiv.innerHTML = `<div class="svg_subcontainer">${backgroundSvg}</div><div class="password_container"><div class="password_bg"></div><div class="password_display1"></div><div class="password_display2"></div><div class="password_display3"></div><div class="password_display4"></div><div class="password_display5"></div><div class="password_arrow_container"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div><div class="password_submit">Submit</div></div>`;

        const labelHTML = `<div class="display"></div><div class="btn_top"><div></div></div><div class="btn_bottom"><div></div></div>`
        newDiv.innerHTML = `<div class="svg_subcontainer">${backgroundSvg}</div><div class="password_container"><div class="password_bg"></div><div class="label1">${labelHTML}</div><div class="label2">${labelHTML}</div><div class="label3">${labelHTML}</div><div class="label4">${labelHTML}</div><div class="label5">${labelHTML}</div><div class="password_submit">Submit</div></div>`

        // Add to DOM
        if (moduleCounter < 6) {
            document.querySelector("#front_module_container").appendChild(newDiv);
        } else if (moduleCounter < 12) {
            document.querySelector("#back_module_container").appendChild(newDiv);
        }

        // Variables
        const displayList = document.querySelectorAll(`.svg_container${moduleCounter} .display`);
        const btnTopList = document.querySelectorAll(`.svg_container${moduleCounter} .btn_top`);
        const btnBottomList = document.querySelectorAll(`.svg_container${moduleCounter} .btn_bottom`);
        const submit = document.querySelector(`.svg_container${moduleCounter} .password_submit`);

        const wordArray = ["ABOUT", "AFTER", "AGAIN", "BELOW", "COULD", "EVERY", "FIRST", "FOUND", "GREAT", "HOUSE", "LARGE", "LEARN", "NEVER", "OTHER", "PLACE", "PLANT", "POINT", "RIGHT", "SMALL", "SOUND", "SPELL", "STILL", "STUDY", "THEIR", "THERE", "THESE", "THING", "THINK", "THREE", "WATER", "WHERE", "WHICH", "WORLD", "WOULD", "WRITE"]

        let selectedLetters = {
            "label1": [],
            "label2": [],
            "label3": [],
            "label4": [],
            "label5": []
        }

        let labelPositions = {
            "label1": 0,
            "label2": 0,
            "label3": 0,
            "label4": 0,
            "label5": 0
        }

        let chosenWord;

        init()

        function init(parm) {
            if (parm != "reset") {
                addEventListeners()
            }
            chooseWord()
            selectLetters()
            // console.log("Chosen Word:", chosenWord)
            if (checkForWords() == true) {
                rebuildModule()
            } else {
                addLetters()
            }
        }

        function chooseWord() {
            chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        }

        function selectLetters() {
            let chosenWordArray = chosenWord.split("");

            for (let i = 0; i < chosenWordArray.length; i++) {

                // Add chosen word letters
                selectedLetters[`label${i + 1}`].push(chosenWordArray[i]);

                let newAlphabet = alphabet.split("");

                newAlphabet.splice(newAlphabet.indexOf(`${chosenWordArray[i][0]}`), 1);

                for (let j = 0; j < chosenWordArray.length; j++) {
                    let randomNr = Math.floor(Math.random() * newAlphabet.length);

                    selectedLetters[`label${i + 1}`].push(newAlphabet[randomNr]);
                    newAlphabet.splice(randomNr, (randomNr + 1))

                }
            }
        }

        function addEventListeners() {
            // console.log(displayList, btnTopList, btnBottomList);

            for (let i = 0; i < btnTopList.length; i++) {
                btnTopList[i].addEventListener("click", function () {
                    changeNumber(i, "up")
                })
                btnBottomList[i].addEventListener("click", function () {
                    changeNumber(i, "down")
                })
            }

            submit.addEventListener("click", checkForDone)
        }

        function addLetters() {
            for (let i = 0; i < displayList.length; i++) {
                labelPositions[`label${i + 1}`] = Math.floor(Math.random() * displayList.length);
                // console.log(selectedLetters[`label${i+1}`], labelPositions[`label${i+1}`])
                displayList[i].innerHTML = selectedLetters[`label${i + 1}`][labelPositions[`label${i + 1}`]];
            }
        }

        function changeNumber(num, dir) {
            console.log(num, dir)
            if (dir == "up") {
                if (labelPositions[`label${num + 1}`] < 5) {
                    labelPositions[`label${num + 1}`] = labelPositions[`label${num + 1}`] + 1;
                } else {
                    labelPositions[`label${num + 1}`] = 0;
                }
            } else {
                if (labelPositions[`label${num + 1}`] > 0) {
                    labelPositions[`label${num + 1}`] = labelPositions[`label${num + 1}`] - 1;
                } else {
                    labelPositions[`label${num + 1}`] = 5;
                }
            }
            displayList[num].innerHTML = selectedLetters[`label${num + 1}`][labelPositions[`label${num + 1}`]];
        }

        function checkForWords() {
            let returnVar;

            selectedLetters.label1.forEach(function (label1) {
                selectedLetters.label2.forEach(function (label2) {
                    selectedLetters.label3.forEach(function (label3) {
                        selectedLetters.label4.forEach(function (label4) {
                            selectedLetters.label5.forEach(function (label5) {
                                if (wordArray.includes(label1 + label2 + label3 + label4 + label5) && chosenWord != (label1 + label2 + label3 + label4 + label5)) {
                                    // console.log((label1 + label2 + label3 + label4 + label5));
                                    returnVar = true;
                                }
                            });
                        });
                    });
                });
            });

            return returnVar;
        };

        function rebuildModule() {

            // console.log("rebuild")

            selectedLetters = {
                "label1": [],
                "label2": [],
                "label3": [],
                "label4": [],
                "label5": []
            }

            init("reset")
        }

        function checkForDone() {
            let wordCheck = "";
            for (let i = 0; i < displayList.length; i++) {
                wordCheck = wordCheck + selectedLetters[`label${i + 1}`][labelPositions[`label${i + 1}`]];
            }
            if (wordCheck == chosenWord) {
                console.log("done")
                moduleDone()
            } else {
                console.log("mistake")
                wrongClick()
            }
        }

        function wrongClick() {
            // Red light
            let red_light = document.querySelector(`.svg_container${moduleCounter} .svg_subcontainer .red_light`);
            red_light.style.opacity = "1";
            setTimeout(function () {
                red_light.style.opacity = "0";
            }, 1000);

            // Shake
            let container = document.querySelector(`.svg_container${moduleCounter}`);
            container.classList.add("shake");
            setTimeout(function () {
                container.classList.remove("shake");
            }, 100);

            // Add strike
            strikeFunc();
        }

        function moduleDone() {
            // Remove eventlisteners
            for (let i = 0; i < displayList.length; i++) {
                let old_top = btnTopList[i];
                let old_bottom = btnBottomList[i];
                let new_top = old_top.cloneNode(true);
                let new_bottom = old_bottom.cloneNode(true);
                old_top.parentNode.replaceChild(new_top, old_top);
                old_bottom.parentNode.replaceChild(new_bottom, old_bottom);
            }

            submit.removeEventListener("click", checkForDone);

            // Style
            document.querySelector(`.svg_container${moduleCounter}`).style.pointerEvents = "none";
            document.querySelector(`.svg_container${moduleCounter} .svg_subcontainer .green_light`).style.opacity = "1";

            // Module Beaten
            moduleBeaten();
        }

    }
}
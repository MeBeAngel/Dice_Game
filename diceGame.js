// node diceGame.js

let playerOne = "#die-1";
let playerTwo = "#die-2";
let title = document.querySelector(".title");
let flagOne = document.querySelector(".flag-one");
let flagTwo = document.querySelector(".flag-two");
let btn = document.getElementById("button");

let randomNum = Math.floor((Math.random() * 7) + 1);
let randomNum2 = Math.floor((Math.random() * 7) + 1);

function rollOne(player) {

    let one = document.querySelectorAll(player + " .die-row .one");
    one[0].classList.add("hidden");

    let two = document.querySelectorAll(player + " .die-row .two");
    two[0].classList.add("hidden");

    let three = document.querySelectorAll(player + " .die-row .three");
    three[0].classList.add("hidden");

    let center = document.querySelectorAll(player + " .die-row .center");
    center[0].classList.add("visible");

    let four = document.querySelectorAll(player + " .die-row .four");
    four[0].classList.add("hidden");

    let five = document.querySelectorAll(player + " .die-row .five");
    five[0].classList.add("hidden");

    let six = document.querySelectorAll(player + " .die-row .six");
    six[0].classList.add("hidden");
}

function rollTwo(player) {

    let one = document.querySelectorAll(player + " .die-row .one");
    one[0].classList.add("visible");

    let two = document.querySelectorAll(player + " .die-row .two");
    two[0].classList.add("hidden");

    let three = document.querySelectorAll(player + " .die-row .three");
    three[0].classList.add("hidden");

    let center = document.querySelectorAll(player + " .die-row .center");
    center[0].classList.add("hidden");

    let four = document.querySelectorAll(player + " .die-row .four");
    four[0].classList.add("hidden");

    let five = document.querySelectorAll(player + " .die-row .five");
    five[0].classList.add("hidden");

    let six = document.querySelectorAll(player + " .die-row .six");
    six[0].classList.add("visible");
}


function rollThree(player) {

    let one = document.querySelectorAll(player + " .die-row .one");
    one[0].classList.add("visible");

    let two = document.querySelectorAll(player + " .die-row .two");
    two[0].classList.add("hidden");

    let three = document.querySelectorAll(player + " .die-row .three");
    three[0].classList.add("hidden");

    let center = document.querySelectorAll(player + " .die-row .center");
    center[0].classList.add("visible");

    let four = document.querySelectorAll(player + " .die-row .four");
    four[0].classList.add("hidden");

    let five = document.querySelectorAll(player + " .die-row .five");
    five[0].classList.add("hidden");

    let six = document.querySelectorAll(player + " .die-row .six");
    six[0].classList.add("visible");
}


function rollFour(player) {

    let one = document.querySelectorAll(player + " .die-row .one");
    one[0].classList.add("visible");

    let two = document.querySelectorAll(player + " .die-row .two");
    two[0].classList.add("hidden");

    let three = document.querySelectorAll(player + " .die-row .three");
    three[0].classList.add("visible");

    let center = document.querySelectorAll(player + " .die-row .center");
    center[0].classList.add("hidden");

    let four = document.querySelectorAll(player + " .die-row .four");
    four[0].classList.add("visible");

    let five = document.querySelectorAll(player + " .die-row .five");
    five[0].classList.add("hidden");

    let six = document.querySelectorAll(player + " .die-row .six");
    six[0].classList.add("visible");
}


function rollFive(player) {

    let one = document.querySelectorAll(player + " .die-row .one");
    one[0].classList.add("visible");

    let two = document.querySelectorAll(player + " .die-row .two");
    two[0].classList.add("hidden");

    let three = document.querySelectorAll(player + " .die-row .three");
    three[0].classList.add("visible");

    let center = document.querySelectorAll(player + " .die-row .center");
    center[0].classList.add("visible");

    let four = document.querySelectorAll(player + " .die-row .four");
    four[0].classList.add("visible");

    let five = document.querySelectorAll(player + " .die-row .five");
    five[0].classList.add("hidden");

    let six = document.querySelectorAll(player + " .die-row .six");
    six[0].classList.add("visible");
}


function rollSix(player) {

    let one = document.querySelectorAll(player + " .die-row .one");
    one[0].classList.add("visible");

    let two = document.querySelectorAll(player + " .die-row .two");
    two[0].classList.add("visible");

    let three = document.querySelectorAll(player + " .die-row .three");
    three[0].classList.add("visible");

    let center = document.querySelectorAll(player + " .die-row .center");
    center[0].classList.add("hidden");

    let four = document.querySelectorAll(player + " .die-row .four");
    four[0].classList.add("visible");

    let five = document.querySelectorAll(player + " .die-row .five");
    five[0].classList.add("visible");

    let six = document.querySelectorAll(player + " .die-row .six");
    six[0].classList.add("visible");
}

function rollDice() {
    if (randomNum === 1) {
        rollOne(playerOne);
    } else if (randomNum === 2) {
        rollTwo(playerOne);
    } else if (randomNum === 3) {
        rollThree(playerOne);
    } else if (randomNum === 4) {
        rollFour(playerOne);
    } else if (randomNum === 5) {
        rollFive(playerOne);
    } else if (randomNum === 6) {
        rollSix(playerOne);
    }

    return randomNum;
}

function rollDice2() {
    if (randomNum2 === 1) {
        rollOne(playerTwo);
    } else if (randomNum2 === 2) {
        rollTwo(playerTwo);
    } else if (randomNum2 === 3) {
        rollThree(playerTwo);
    } else if (randomNum2 === 4) {
        rollFour(playerTwo);
    } else if (randomNum2 === 5) {
        rollFive(playerTwo);
    } else if (randomNum2 === 6) {
        rollSix(playerTwo);
    }

    return randomNum2;
}


btn.addEventListener("click", () => {

    rollDice();
    rollDice2();

    let resultOne = rollDice();
    let resultTwo = rollDice2();

    if (resultOne === resultTwo) {
        title.innerHTML = "TIE";
        flagOne.classList.remove("hidden");
        flagTwo.classList.remove("hidden");
    } else if (resultOne > resultTwo) {
        title.innerHTML = "Player 1 Wins!";
        flagOne.classList.remove("hidden");
    } else if (resultTwo > resultOne) {
        title.innerHTML = "Player 2 Wins!";
        flagTwo.classList.remove("hidden");
    }


    btn.textContent = "Reset"
    btn.classList.add("reset-btn");
    if (btn.textContent === "Reset") {
        btn.addEventListener("click", () => {
            location.reload();
        })
    }
})
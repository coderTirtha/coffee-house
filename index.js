var menu = document.querySelector(".menu-items");
var bars = document.querySelector(".menu-bars");
var close = document.querySelector("#cross-btn");
var rate = document.querySelector(".far");
var rate1 = document.querySelector("#star1");
var rate2 = document.querySelector("#star2");
var rate3 = document.querySelector("#star3");
var rate4 = document.querySelector("#star4");

function clickMenu() {
    menu.style.display = "block";
    bars.style.display = "none";
    close.style.display = "block";
}

function closeMenu() {
    menu.style.display = "none";
    bars.style.display = "block";
}

function ratings() {
    rate.classList.add("fas");
}

function ratings1() {
    rate1.classList.add("fas");
}

function ratings2() {
    rate2.classList.add("fas");
}

function ratings3() {
    rate3.classList.add("fas");
}

function ratings4() {
    rate4.classList.add("fas");
}

function settings() {
    document.querySelector(".hide-menu").style.display = "block";
    document.querySelector(".fa-cog").style.display = "none";
}
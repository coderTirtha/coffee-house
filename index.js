var menu = document.querySelector(".hidden-menu");
var bars = document.querySelector(".menu-bars");
var close = document.querySelector("#cross-btn");
var rate = document.querySelector("#star0");
var rate1 = document.querySelector("#star1");
var rate2 = document.querySelector("#star2");
var rate3 = document.querySelector("#star3");
var rate4 = document.querySelector("#star4");
var selectBody = document.querySelector("body");


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
    document.getElementById("rate-submission").style.display = "block";
    document.getElementById("rate-submission").innerHTML = "Submit your ratings.";
    document.getElementById("rate-submission").style.textDecoration = "underline";
}

function ratings1() {
    rate1.classList.add("fas");
    document.getElementById("rate-submission").style.display = "block";
    document.getElementById("rate-submission").innerHTML = "Submit your ratings.";
    document.getElementById("rate-submission").style.textDecoration = "underline";
}

function ratings2() {
    rate2.classList.add("fas");
    document.getElementById("rate-submission").style.display = "block";
    document.getElementById("rate-submission").innerHTML = "Submit your ratings.";
    document.getElementById("rate-submission").style.textDecoration = "underline";
}

function ratings3() {
    rate3.classList.add("fas");
    document.getElementById("rate-submission").style.display = "block";
    document.getElementById("rate-submission").innerHTML = "Submit your ratings.";
    document.getElementById("rate-submission").style.textDecoration = "underline";
}

function ratings4() {
    rate4.classList.add("fas");
    document.getElementById("rate-submission").style.display = "block";
    document.getElementById("rate-submission").innerHTML = "Submit your ratings.";
    document.getElementById("rate-submission").style.textDecoration = "underline";
}

function settings() {
    document.querySelector(".hide-menu").style.display = "block";
    document.querySelector(".fa-cog").style.display = "none";
    document.querySelector("#close-btn").style.display = "block";
}

function closeSettings() {
    document.querySelector(".hide-menu").style.display = "none";
    document.querySelector(".fa-cog").style.display = "block";
    document.querySelector("#close-btn").style.display = "none";
}

document.querySelector(".dark-mode").addEventListener("click", function() {
    document.querySelector(".hide-menu").style.display = "none";
    document.querySelector(".fa-cog").style.display = "block";
    document.querySelector("#close-btn").style.display = "none";
    selectBody.style.backgroundColor = "rgb(33 6 6) ";
    selectBody.style.color = "white";
    document.querySelector("#brand-logo").src = "images/logo(dark-mode).png";
    document.querySelector(".hide-menu li#close-btn").style.color = "white";
    document.querySelector(".icons i").style.color = "white";
    document.querySelector(".fa-instagram").style.color = "white";
    document.querySelectorAll(".menu-items li")[0].style.color = "white";
    document.querySelectorAll(".menu-items li")[1].style.color = "white";
    document.querySelectorAll(".menu-items li")[2].style.color = "white";
    document.querySelectorAll(".menu-items li")[3].style.color = "white";
    document.querySelectorAll(".hidden-menu li")[0].style.color = "white";
    document.querySelectorAll(".hidden-menu li")[1].style.color = "white";
    document.querySelectorAll(".hidden-menu li")[2].style.color = "white";
    document.querySelectorAll(".hidden-menu li")[3].style.color = "white";
    document.querySelectorAll(".hidden-menu li")[4].style.color = "white";
    document.querySelectorAll(".menu-items li:hover")[0].style.borderBottom = "4px solid white";
    document.querySelectorAll(".menu-items li:hover")[1].style.borderBottom = "4px solid white";
    document.querySelectorAll(".menu-items li:hover")[2].style.borderBottom = "4px solid white";
    document.querySelectorAll(".menu-items li:hover")[3].style.borderBottom = "4px solid white";
    document.querySelectorAll(".hidden-menu li:hover")[1].style.borderBottom = "4px solid white";
    document.querySelectorAll(".hidden-menu li:hover")[2].style.borderBottom = "4px solid white";
    document.querySelectorAll(".hidden-menu li:hover")[3].style.borderBottom = "4px solid white";
    document.querySelectorAll(".hidden-menu li:hover")[4].style.borderBottom = "4px solid white";
});

document.querySelector(".light-mode").addEventListener("click", function() {
    document.querySelector(".hide-menu").style.display = "none";
    document.querySelector(".fa-cog").style.display = "block";
    document.querySelector("#close-btn").style.display = "none";
    selectBody.style.backgroundColor = "white";
    selectBody.style.color = "black";
    document.querySelector("#brand-logo").src = "images/logo.png";
    document.querySelector(".hide-menu li#close-btn").style.color = "black";
    document.querySelector(".icons i").style.color = "black";
    document.querySelector(".fa-instagram").style.color = "black";
    document.querySelectorAll(".menu-items li")[0].style.color = "black";
    document.querySelectorAll(".menu-items li")[1].style.color = "black";
    document.querySelectorAll(".menu-items li")[2].style.color = "black";
    document.querySelectorAll(".menu-items li")[3].style.color = "black";
    document.querySelectorAll(".hidden-menu li")[0].style.color = "black";
    document.querySelectorAll(".hidden-menu li")[1].style.color = "black";
    document.querySelectorAll(".hidden-menu li")[2].style.color = "black";
    document.querySelectorAll(".hidden-menu li")[3].style.color = "black";
    document.querySelectorAll(".hidden-menu li")[4].style.color = "black";
});

var count = 0;

function orderBtn() {
    document.querySelector(".your-orders").style.display = "block";
    count += 1;
    document.getElementById("click").innerHTML = count;

    if (count > 1) {
        document.getElementById("plural").innerHTML = "items";
    }
}

function closeOrderMenu() {
    document.querySelector(".your-orders").style.display = "none";
    count = 0;
    document.getElementById("plural").innerHTML = "item";
}

document.getElementById("rate-submission").addEventListener("click", function() {
    rate.classList.remove("fas");
    rate1.classList.remove("fas");
    rate2.classList.remove("fas");
    rate3.classList.remove("fas");
    rate4.classList.remove("fas");
    document.getElementById("rate-submission").innerHTML = "Your ratings have been submitted. Thanks for your opinion! You can write a review here to improve us.";
    document.getElementById("rate-submission").style.textDecoration = "none";
    document.getElementById("rate-submission").style.cursor = "pointer";
});
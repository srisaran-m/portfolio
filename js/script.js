/* =====================================
PAGE LOADER
===================================== */

window.addEventListener("load", function () {


const loader =
    document.getElementById("loader");


if (loader) {

    setTimeout(function () {

        loader.style.opacity = "0";


        setTimeout(function () {

            loader.style.display = "none";

        }, 800);

    }, 700);

}


});

/* =====================================
MOBILE MENU
===================================== */

const menuBtn =
document.getElementById("menuBtn");

const navMenu =
document.getElementById("navMenu");

if (menuBtn && navMenu) {


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


}

/* =====================================
CLOSE MOBILE MENU
===================================== */

const navLinks =
document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {


link.addEventListener("click", function () {

    if (navMenu) {

        navMenu.classList.remove("active");

    }

});


});

/* =====================================
PROJECT CARDS
===================================== */

const projectCards =
document.querySelectorAll(".project-card");

const projectsBox =
document.querySelector(".projects-box");

/* =====================================
PROJECT SCROLL REVEAL
===================================== */

function revealProjects() {


if (!projectsBox) {

    return;

}


const boxRect =
    projectsBox.getBoundingClientRect();


projectCards.forEach(function (card) {

    const cardRect =
        card.getBoundingClientRect();


    const cardCenter =
        cardRect.top +
        cardRect.height / 2;


    const boxCenter =
        boxRect.top +
        boxRect.height / 2;


    const distance =
        Math.abs(
            cardCenter - boxCenter
        );


    if (distance < boxRect.height * 0.55) {

        card.classList.add("show");

    }

});


}

/* PROJECT BOX SCROLL */

if (projectsBox) {


projectsBox.addEventListener(
    "scroll",
    revealProjects
);


}

/* PAGE SCROLL */

window.addEventListener(
"scroll",
revealProjects
);

/* INITIAL CHECK */

window.addEventListener(
"load",
revealProjects
);

/* =====================================
PROJECT IMAGE CLICK
===================================== */

projectCards.forEach(function (card) {


const image =
    card.querySelector(".project-image");


if (image) {

    image.addEventListener(
        "click",
        function () {

            card.classList.toggle(
                "image-active"
            );

        }
    );

}


});

/* =====================================
OTHER SCROLL REVEAL ELEMENTS
===================================== */

const elements =
document.querySelectorAll(
".interest-item, .journey-column, .stat"
);

const observer =
new IntersectionObserver(


    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.20

    }

);


elements.forEach(function (element) {


observer.observe(element);


});

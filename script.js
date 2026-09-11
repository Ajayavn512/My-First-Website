// ========================================
// HOME BUTTON
// ========================================

const button = document.getElementById("myButton");
const message = document.getElementById("message");

if (button && message) {

    button.addEventListener("click", function () {

        message.textContent =
            "Wow Ajay! 🎉 Tumhari JavaScript chal rahi hai!";

        button.textContent =
            "Clicked ✅";

        button.style.backgroundColor =
            "green";

        button.style.color =
            "white";

    });

}


// ========================================
// STEP 32 - MOBILE NAVBAR
// ========================================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const icon =
            menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    // Close mobile menu after clicking a link

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            const icon =
                menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}


// ========================================
// STEP 33 - TYPING ANIMATION
// ========================================

const typingText =
    document.getElementById("typing-text");


const typingWords = [

    "Web Developer",
    "Digital Creator",
    "Video Editor",
    "Graphic Designer",
    "AI Creator"

];


let wordIndex = 0;

let characterIndex = 0;

let isDeleting = false;


function typeAnimation() {

    if (!typingText) {
        return;
    }


    const currentWord =
        typingWords[wordIndex];


    if (isDeleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }


    typingText.textContent =
        currentWord.substring(
            0,
            characterIndex
        );


    let typingSpeed =
        isDeleting ? 60 : 100;


    if (
        !isDeleting &&
        characterIndex === currentWord.length
    ) {

        typingSpeed = 1500;

        isDeleting = true;

    }


    else if (
        isDeleting &&
        characterIndex === 0
    ) {

        isDeleting = false;

        wordIndex++;

        if (
            wordIndex === typingWords.length
        ) {

            wordIndex = 0;

        }

        typingSpeed = 400;

    }


    setTimeout(
        typeAnimation,
        typingSpeed
    );

}


if (typingText) {

    typeAnimation();

}


// ========================================
// STEP 39 - SCROLL REVEAL ANIMATION
// ========================================

const sections =
    document.querySelectorAll(".section");


sections.forEach(function (section) {

    section.classList.add("reveal");

});


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    sections.forEach(function (section) {

        const sectionTop =
            section.getBoundingClientRect().top;


        if (
            sectionTop <
            windowHeight - 100
        ) {

            section.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


// Run once when page loads

revealOnScroll();


// ========================================
// STEP 39 - ACTIVE NAVIGATION
// ========================================

window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        if (navLinks) {

            navLinks
                .querySelectorAll("a")
                .forEach(function (link) {

                    link.classList.remove("active");


                    if (
                        link.getAttribute("href") ===
                        "#" + currentSection
                    ) {

                        link.classList.add("active");

                    }

                });

        }

    }
);